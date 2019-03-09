<template>
  <div class="recruit">
    <div class="recruit-search">
      <form action="javascript:return true;">
        <el-input type="search" ref="searchRef" placeholder="搜索" prefix-icon="el-icon-search" v-model="searchModel.KEYWORDS" height="34" @keyup.13.native="handleSearch">
        </el-input>
      </form>
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

<style>
.recruit {
  background: rgba(255, 255, 255, 1);
  padding-bottom: 55px;
}
.recruit-search {
  padding: 10px 15px 20px;
  background: #007bfe;
}
.recruit-search .el-input__inner {
  height: 34px;
}
.recruit-search .el-input__icon {
  line-height: 34px;
}
.recruit-search .mint-navbar {
  background-color: transparent;
}
.recruit-search .mint-tab-item-label {
  font-size: 15px;
}
.recruit-search .mint-navbar .mint-tab-item {
  height: 21px;
  color: rgba(255, 255, 255, 1);
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  line-height: 21px;
  padding: 20px 0 0 0;
  margin-bottom: 0px;
}
.recruit-search .mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid rgba(255, 255, 255, 1);
  font-family: PingFang-SC-Bold;
  font-weight: bold;
}
.show-list {
  padding-top: 15px;
  height: 55px;
  margin-left: 10px;
  border-bottom: 2px solid #eeeeee;
}
.show-list .show-title {
  display: block;
  height: 21px;
  font-size: 15px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 21px;
  max-width: 90vw;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.show-list .show-date {
  display: block;
  height: 17px;
  font-size: 12px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  line-height: 17px;
}
.no-data {
  display: inherit;
  margin-top: 10px;
  text-align: center;
}
.hrss-scroll {
  height: calc(100vh - 2.26rem);
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>