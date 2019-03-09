<template>
    <div class="hrss-per resume-info">
        <div class="hrss-search resume-top">
            <h2 style="margin-bottom:0">工作信息</h2>
        </div>
        <div class="hrss-per-main">
            <el-collapse v-model="activeNames">
                <el-collapse-item name="1">
                    <template slot="title">
                        <img :src="require('@/assets/icon/resume_icon_13.png')">
                        <span>本企业工作经历</span>
                    </template>
                    <ul class="hrss-item-table" v-for="(item,index) in resume.internal_now" :key="index">
                        <li>
                            <span>开始日期</span>
                            <span class="hrss-item-right">{{item.begin_dt}}</span>
                        </li>
                        <li>
                            <span>异动原因</span>
                            <span class="hrss-item-right">{{item.reason}}</span>
                        </li>
                        <li>
                            <span>人员类别</span>
                            <span class="hrss-item-right">{{item.emp_class}}</span>
                        </li>
                        <li>
                            <span>部门</span>
                            <span class="hrss-item-right">{{item.dept}}</span>
                        </li>
                        <li>
                            <span>职务</span>
                            <span class="hrss-item-right">{{item.jobcode}}</span>
                        </li>
                        <li>
                            <span>管理职级</span>
                            <span class="hrss-item-right">{{item.mng_level}}</span>
                        </li>
                        <li>
                            <span>工作地点</span>
                            <span class="hrss-item-right">{{item.workplace}}</span>
                        </li>
                    </ul>
                    <div class="hrss-no-data" v-if="!resume.internal_now || resume.internal_now.length == 0">暂无数据</div>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template slot="title">
                        <img :src="require('@/assets/icon/resume_icon_5.png')">
                        <span>本企业历史工作经历</span>
                    </template>
                    <ul class="hrss-item-table" v-for="(item,index) in resume.internal_his" :key="index">
                        <li>
                            <span>开始日期</span>
                            <span class="hrss-item-right">{{item.begin_dt}}</span>
                        </li>
                        <li>
                            <span>结束日期</span>
                            <span class="hrss-item-right">{{item.end_dt}}</span>
                        </li>
                        <li>
                            <span>人员状态</span>
                            <span class="hrss-item-right">{{item.status}}</span>
                        </li>
                        <li>
                            <span>部门</span>
                            <span class="hrss-item-right">{{item.dept}}</span>
                        </li>
                        <li>
                            <span>职位</span>
                            <span class="hrss-item-right">{{item.jobcode}}</span>
                        </li>
                        <li>
                            <span>备注</span>
                            <span class="hrss-item-right">{{item.comments}}</span>
                        </li>
                    </ul>
                    <div class="hrss-no-data" v-if="!resume.internal_his || resume.internal_his.length == 0">暂无数据</div>
                </el-collapse-item>
                <el-collapse-item name="3">
                    <template slot="title">
                        <img :src="require('@/assets/icon/resume_icon_3.png')">
                        <span>企业外工作经历</span>
                    </template>
                    <ul class="hrss-item-table" v-for="(item,index) in resume.external" :key="index">
                        <li>
                            <span>开始日期</span>
                            <span class="hrss-item-right">{{item.begin_dt}}</span>
                        </li>
                        <li>
                            <span>结束日期</span>
                            <span class="hrss-item-right">{{item.end_dt}}</span>
                        </li>
                        <li>
                            <span>部门</span>
                            <span class="hrss-item-right">{{item.company}}</span>
                        </li>
                        <li>
                            <span>职位</span>
                            <span class="hrss-item-right">{{item.position}}</span>
                        </li>
                    </ul>
                    <div class="hrss-no-data" v-if="!resume.external || resume.external.length == 0">暂无数据</div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
import { Resume } from "@/api/index.js";
import "@/assets/styles/perFunc.css";
export default {
  data() {
    return {
      activeNames: ["1", "2", "3"],
      personal: {},
      role: "EMP",
      resume: {}
    };
  },
  methods: {
    getResume(emplId, role) {
      this.loading = true;
      let p = {
        EMPLID: emplId,
        ROLE: role,
        TYPE: "CV"
      };
      Resume(p).then(res => {
        if (res.status == "0") {
          this.resume = res.JsonData;
        }
      });
    }
  },
  created() {
    this.personal = JSON.parse(sessionStorage.getItem("userInfo"));
    this.getResume(this.personal.EMPLID, "EMP");
  }
};
</script>

<style scoped>
.hrss-per .hrss-per-main {
  height: calc(100vh - 1.88rem);
}
.resume-info {
  padding-bottom: 1.16rem;
}
.resume-info .resume-top {
  color: #fff;
  background: #007bfe;
  padding: 0.22rem 0.28rem;
}
.resume-info .resume-top .person-icon {
  display: inline-block;
  object-fit: cover;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 0.7rem;
  vertical-align: top;
  border: 1px solid #fff;
}
.resume-info .resume-top .resume-top-msg {
  display: inline-block;
  height: 1.4rem;
  margin-left: 0.2rem;
}
.resume-info .resume-top .resume-top-msg .resume-name {
  display: block;
  line-height: 0.8rem;
  font-size: 0.36rem;
}
.resume-info .resume-top .resume-top-msg .resume-job {
  display: block;
  width: 5rem;
  line-height: 0.3rem;
  font-size: 0.28rem;
  color: #eee;
}
.resume-info >>> .el-collapse .el-collapse-item .el-collapse-item__header img {
  height: 0.48rem;
  margin: 0 0.18rem;
  /* border: 0.02rem dashed #999; */
}
</style>