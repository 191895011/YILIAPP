<template>
  <div class="hrss-per my-subordinate">
    <div class="hrss-search">
      <h2>我的下属</h2>
      <el-input type="search" ref="searchRef" placeholder="输入姓名/员工ID查询人员" prefix-icon="el-icon-search" v-model="searchKey" size="medium" @keyup.13.native="handleSearch">
        <img v-if="isSearch" slot="append" :src="require('@/assets/icon/我的下属.png')" style="width: 0.6rem;" @click="isSearch = !isSearch;searchKey=''">
      </el-input>
    </div>
    <div class="hrss-per-main">
      <div v-show="isSearch" class="sub-search-list">
        <ul v-if="searchList.length > 0">
          <li v-for="subo in searchList" :key="subo.emplid" @click="handleSubClick(subo.emplid)">
            <img class="person-icon" :src="subo.photo?'data:image/png;base64,'+subo.photo:''" />
            <div class="sub-search-span">
              <span>{{subo.IBMname}} [{{subo.emplid}}]</span><br>
              <span style="font-size:.26rem">{{subo.dept_descr}} {{subo.job_title}}</span>
            </div>
          </li>
        </ul>
        <span v-if="searchList.length == 0" class="no-data">暂无数据</span>
      </div>
      <div v-show="!isSearch" class="sub-info">
        <div class="sub-person">
          <i class="el-icon-arrow-up" v-if="subCache.length > 0" @click="getTopList" />
          <el-badge class="mark" :value="sub.cnt" type="warning">
            <img class="person-icon" :src="sub.photo?'data:image/png;base64,'+sub.photo:''" @click="handleSubClick(sub.emplid)" />
          </el-badge>
          <span>{{sub.name}}</span>
          <span style="font-size:.26rem">{{sub.job}}</span>
        </div>
        <canvas class="sub-line" id="subLine"></canvas>
        <div class="sub-list">
          <div class="sub-person" v-for="(dr,index) in subList" :key="index">
            <el-badge class="mark" :value="dr.dr_cnt" type="warning" v-if="dr.dr_cnt != '0' ">
              <img class="person-icon" :src="dr.dr_photo?'data:image/png;base64,'+dr.dr_photo:''" @click="handleSubClick(dr.dr_emplid)" />
            </el-badge>
            <img class="person-icon" :src="dr.dr_photo?'data:image/png;base64,'+dr.dr_photo:''" v-if="dr.dr_cnt == '0'" @click="handleSubClick(dr.dr_emplid)" />
            <span>{{dr.dr_name}}</span>
            <span style="font-size:.26rem">{{dr.dr_job}}</span>
            <i class="el-icon-arrow-down" v-if="dr.dr_cnt > 0" @click="getSubList(dr.dr_emplid,sub.emplid)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Subordinate, Magnifier } from "@/api/index.js";
import "@/assets/styles/perFunc.css";
export default {
  data() {
    return {
      searchKey: "",
      isSearch: false,
      searchList: [],
      personal: {},
      subList: [],
      sub: {},
      subCache: []
    };
  },
  methods: {
    canvasLine() {
      if (this.subList.length == 0) return;
      var canvas = document.getElementById("subLine");
      canvas.height = canvas.clientHeight;
      canvas.width = canvas.clientWidth;
      var ctx = canvas.getContext("2d");
      ctx.strokeStyle = "rgb(28, 170, 254)";
      if (this.subList.length >= 3) {
        ctx.moveTo(25, 40);
        ctx.arcTo(25, 20, 30, 20, 5);
        ctx.arcTo(canvas.clientWidth / 2, 20, canvas.clientWidth / 2, 0, 5);
        ctx.lineTo(canvas.clientWidth / 2, 0);
        ctx.arcTo(canvas.clientWidth / 2, 20, canvas.clientWidth - 25, 20, 5);
        ctx.arcTo(canvas.clientWidth - 25, 20, canvas.clientWidth - 25, 40, 5);
        ctx.lineTo(canvas.clientWidth - 25, 40);
      } else if (this.subList.length == 2) {
        ctx.moveTo(88, 40);
        ctx.arcTo(88, 20, 93, 20, 5);
        ctx.arcTo(canvas.clientWidth / 2, 20, canvas.clientWidth / 2, 0, 5);
        ctx.lineTo(canvas.clientWidth / 2, 0);
        ctx.arcTo(canvas.clientWidth / 2, 20, canvas.clientWidth - 88, 20, 5);
        ctx.arcTo(canvas.clientWidth - 88, 20, canvas.clientWidth - 88, 40, 5);
        ctx.lineTo(canvas.clientWidth - 88, 40);
      } else {
        ctx.moveTo(canvas.clientWidth / 2, 0);
        ctx.lineTo(canvas.clientWidth / 2, 40);
      }
      ctx.stroke();
    },
    handleSearch() {
      this.$refs.searchRef.blur();
      this.isSearch = true;
      Magnifier({
        SECURITY: "N",
        DATA_TYPE: "SUBO",
        KEYWORDS: this.searchKey
      }).then(res => {
        if (res.status == "0") {
          this.searchList = res.jsonData;
        }
      });
    },
    getSubList(eId, pId) {
      if (!eId) return;
      let p = { EMPLID: eId };
      Subordinate(p).then(res => {
        if (res.status == "0") {
          this.sub = res.jsonData;
          this.subList = this.sub.drGroup;
          if (pId) this.subCache.push(pId);
          this.canvasLine();
        }
      });
    },
    getTopList() {
      this.getSubList(this.subCache[this.subCache.length - 1]);
      this.subCache.pop();
    },
    handleSubClick(emplid) {
      console.log(emplid);
      this.$router.push({ name: "resume", params: { emplid: emplid } });
    }
  },
  created() {
    this.personal = JSON.parse(sessionStorage.getItem("userInfo"));
    this.getSubList(this.personal.EMPLID); //("00142973");
  },
  mounted() {}
};
</script>

<style scoped>
.my-subordinate .sub-line {
  width: 80vw;
  height: 0.8rem;
  margin: 0.2rem 0;
}
.my-subordinate .sub-info {
  text-align: center;
  padding-top: 1.2rem;
  height: calc(100vh - 4rem);
  background: #fff;
}
.my-subordinate .sub-info .sub-person >>> .el-badge__content.is-fixed {
  top: auto;
  bottom: 0;
  right: 0.6rem;
}
.my-subordinate .sub-info .sub-person .el-icon-arrow-up,
.my-subordinate .sub-info .sub-person .el-icon-arrow-down {
  display: block;
  font-size: 0.6rem;
  color: rgb(28, 170, 254);
}
.my-subordinate .sub-info .sub-person .person-icon {
  height: 2rem;
  width: 2rem;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 0.2rem;
}
.my-subordinate .sub-info .sub-person span {
  display: block;
  line-height: 0.4rem;
}
.my-subordinate .sub-info .sub-list {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.my-subordinate .sub-info .sub-list .sub-person {
  display: inline-block;
  width: 33vw;
  text-align: center;
  z-index: 1000;
  padding: 0.2rem 0;
  vertical-align: top;
}
.sub-search-list {
  padding: 0.2rem;
}
.sub-search-list ul li {
  padding: 0.1rem 0.2rem;
  display: block;
  background: #fff;
  border-radius: 0.1rem;
  /* height: 1.6rem; */
  height: 1rem;
  margin-bottom: 0.1rem;
}
.sub-search-list ul li img {
  display: inline-block;
  height: 1rem;
  width: 1rem;
  object-fit: cover;
  border-radius: 1rem;
  margin-top: -0.5rem;
}
.sub-search-list ul li .sub-search-span {
  padding-left: 0.2rem;
  height: 1rem;
  display: inline-block;
}
.sub-search-list ul li .sub-search-span span {
  line-height: 0.5rem;
}
/* .sub-search-list ul li i {
  display: block;
  float: right;
  line-height: 1rem;
} */
.sub-search-list .no-data {
  line-height: 2rem;
  display: block;
  text-align: center;
}
</style>