<template>
  <div class="hrss-per news-index-info">
    <div class="hrss-search">
      <h2>新闻中心</h2>
      <el-input type="search" ref="searchRef" placeholder="搜索 关键字" prefix-icon="el-icon-search" v-model="search" height="34" onsearch @keyup.enter.native="handleSearch">
      </el-input>
      <mt-navbar v-model="showTab">
        <mt-tab-item id="tab-notice">人力资源通知公告</mt-tab-item>
        <mt-tab-item id="tab-policy">人力资源政策解读</mt-tab-item>
      </mt-navbar>
    </div>

    <div class="hrss-scroll">
      <mt-tab-container v-model="showTab">
        <mt-tab-container-item id="tab-notice">
          <ul v-if="noticeList.length > 0">
            <li v-for="item in noticeList" :key="item.id" class="show-list" @click="handleNewClick(item.id)">
              <span class="show-title">{{item.title}}</span>
              <span class="show-date">{{item.date}}</span>
            </li>
          </ul>
          <span class="no-data" v-if="noticeList.length == 0">暂无数据</span>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-policy">
          <ul v-if="policyList.length > 0">
            <li v-for="item in policyList" :key="item.id" class="show-list" @click="handleNewClick(item.id)">
              <span class="show-title">{{item.title}}</span>
              <span class="show-date">{{item.date}}</span>
            </li>
          </ul>
          <span class="no-data" v-if="policyList.length == 0">暂无数据</span>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { NewsList } from "@/api/index.js";
import "@/assets/styles/perFunc.css";
export default {
  data() {
    return {
      search: "",
      showTab: "tab-notice",
      noticeList: [],
      policyList: []
    };
  },
  methods: {
    handleSearch() {
      this.$refs.searchRef.blur();
      this.getNewsList();
    },
    handleNewClick(id) {
      this.$router.push({ name: "newsInfo", params: { id: id } });
    },
    getNewsList() {
      let p = { KEYWORDS: this.search ? this.search : "" };
      NewsList(p).then(res => {
        if (res.status == "0") {
          if (res.JsonData.length > 0) {
            res.JsonData.forEach(e => {
              if (e.category_cd == "NewsKind0000000005")
                this.noticeList = e.news;
              if (e.category_cd == "NewsKind0000000019")
                this.policyList = e.news;
            });
          }
        }
      });
    }
  },
  created() {
    this.getNewsList();
  }
};
</script>

<style scoped>
.hrss-search .mint-navbar {
  background-color: transparent;
  margin-bottom: -0.22rem;
}
.hrss-search .mint-tab-item-label {
  font-size: 15px;
}
.hrss-search .mint-navbar .mint-tab-item {
  height: 21px;
  color: rgba(255, 255, 255, 1);
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  line-height: 21px;
  padding: 20px 0 0 0;
  margin-bottom: 0px;
}
.hrss-search .mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid rgba(255, 255, 255, 1);
  font-family: PingFang-SC-Bold;
  font-weight: bold;
}
.hrss-scroll {
  height: calc(100vh - 3.52rem) !important;
}
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
.news-index-info{
  min-height: 100vh;
  background: #fff;
}
.news-index-info .no-data {
  line-height: 2rem;
  display: block;
  text-align: center;
}
</style>