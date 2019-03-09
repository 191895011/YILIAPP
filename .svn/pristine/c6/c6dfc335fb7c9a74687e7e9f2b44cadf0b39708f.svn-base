<template>
  <div class="hrss-per news-info">
    <div class="hrss-search">
      <h2 style="margin-bottom:0">新闻详情</h2>
    </div>
    <div class="news-info__top">
      <span class="top-title">{{news.TITLE}}</span>
      <span>{{news.DEPT}} {{news.PUBLISHER}} {{news.PUBLISH_DT}} 浏览量：{{news.READ_NUM}}</span>
    </div>
    <div class="news-info__main" v-html="this.news.CONTENT"></div>
  </div>
</template>

<script>
import { NewsDetail } from "@/api/index.js";
import "@/assets/styles/perFunc.css";
export default {
  data() {
    return {
      news: {}
    };
  },
  methods: {
    getNewsDetail(id) {
      if (!id) return;
      let p = { NEWSID: id };
      NewsDetail(p).then(res => {
        if (res.status == "0") {
          this.news = res;
          this.news.CONTENT = decodeURI(this.news.CONTENT);
        }
      });
    }
  },
  created() {
    this.getNewsDetail(this.$route.params.id);
  }
};
</script>

<style scoped>
.news-info {
  min-height: 100vh;
  background: #fff;
}
.news-info__top {
  padding: 0 0.1rem;
  border-bottom: 1px solid #999;
  background: #fff;
}
.news-info__top span {
  text-align: center;
  display: block;
  font-size: 0.26rem;
  color: rgb(119, 119, 119);
  padding-bottom: 0.2rem;
}
.news-info__top .top-title {
  font-size: 0.35rem;
  font-weight: bold;
  line-height: 0.6rem;
  min-height: 0.8rem;
}
.news-info__main {
  overflow-x: auto;
  padding: 0.2rem 0.2rem 1rem;
  color: rgb(119, 119, 119);
  background: #fff;
}
.news-info__main >>> p {
  font-size: 0.26rem;
  line-height: 0.35rem;
}
.news-info__main >>> img {
  max-width: 100%;
  object-fit: contain;
  height: auto;
}
</style>

