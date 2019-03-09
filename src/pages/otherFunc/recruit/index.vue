<template>
  <div class="hrss-per recruit-info">
    <div class="hrss-search">
      <h2>招贤纳士</h2>
      <el-input type="search" ref="searchRef" placeholder="搜索" prefix-icon="el-icon-search" v-model="searchModel.KEYWORDS" size="medium" @keyup.13.native="handleSearch">
      </el-input>
    </div>

    <div class="hrss-scroll">
      <loadmore :bottom-method="getRecruitList" :bottom-all-loaded="scrollFlg" ref="loadmore">
        <ul v-if="recruitList.length > 0">
          <li v-for="item in recruitList" :key="item.ID" class="show-list" @click="handleNewClick(item.ID)">
            <span class="show-title">{{item.TITLE}}</span>
            <span class="show-date">{{item.DATE}}</span>
          </li>
        </ul>
      </loadmore>
      <span class="no-data" v-if="recruitList.length == 0">暂无数据</span>
    </div>
  </div>
</template>

<script>
import { RecuitList } from "@/api/index.js";
import Loadmore from "@/components/loadmore";
import "@/assets/styles/perFunc.css";
export default {
  components: {
    Loadmore
  },
  data() {
    return {
      searchModel: {
        KEYWORDS: "",
        START: 1,
        END: 20
      },
      showTab: "tab-notice",
      recruitList: [],
      scrollFlg: false
    };
  },
  methods: {
    handleSearch() {
      this.$refs.searchRef.blur();
      this.scrollFlg = false;
      this.recruitList = [];
      this.searchModel.START = 1;
      this.searchModel.END = 20;
      this.getRecruitList();
    },
    handleNewClick(id) {
      this.$router.push({ name: "recruitInfo", params: { id: id } });
    },
    getRecruitList() {
      if (!this.scrollFlg) {
        this.scrollFlg = true;
        RecuitList(this.searchModel).then(res => {
          if (res.status == "0") {
            if (res.JsonData.length == 20) {
              this.scrollFlg = false;
            }
            res.JsonData.forEach(e => {
              this.recruitList.push(e);
            });
            this.$refs.loadmore.onBottomLoaded();
            this.searchModel.START += 20;
            this.searchModel.END += 20;
          }
        });
      }
    }
  },
  mounted() {
    // this.getRecruitList();
  }
};
</script>

<style scoped>
.hrss-scroll >>> .show-list {
  padding: 0.3rem 0.1rem 0;
  height: 1.1rem;
  border-bottom: 0.02rem solid #eeeeee;
  background: #fff;
}
.hrss-scroll >>> .show-list .show-title {
  display: block;
  height: 0.42rem;
  font-size: 0.3rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 0.42rem;
  max-width: 90vw;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.hrss-scroll >>> .show-list .show-date {
  display: block;
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  line-height: 0.34rem;
}
.hrss-scroll {
  height: calc(100vh - 2.66rem);
  overflow-x: hidden;
  overflow-y: scroll;
}
.recruit-info {
  background: #fff;
  min-height: 100vh;
}
.recruit-info .no-data {
  line-height: 2rem;
  display: block;
  text-align: center;
}
</style>