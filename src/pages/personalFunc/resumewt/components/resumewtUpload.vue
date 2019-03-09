<template>
  <div>
    <div class="resumeJob-top">
      <span class="resumeJob-top-left">{{title.person}}</span>
      <span class="resumeJob-top-right">{{title.JobTitle}}</span>
    </div>
    <div class="resumeJob-container">
      <ul class="hrss-item-ul">
        <li @click="handleUploadFile">
          <span class="hrss-item-left">附件名称</span>
          <span class="hrss-item-right">{{fileData.FILENAME}}
            <input ref="uploadFile" type="file" accept='image/*' name="file" style="display:none;" @change="fileChange($event)" />
          </span>
        </li>
      </ul>
      <p class="JobRemark">附件说明</p>
      <textarea class="job_text" placeholder="请在此处输入" v-model.trim="fileData.DESCR"></textarea>
    </div>
    <div class="resumewtJob-footer">
      <div class="resumewtJob-keep">保存</div>
      <div class="resumewtJob-remove">删除</div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      title: {
        person: "个人信息修改流程 - ",
        JobTitle: "附件上传"
      },
      fileData: {
        FILENAME: "请选项",
        BASE64STRING: "",
        DESCR: ""
      }
    };
  },
  methods: {
    handleUploadFile() {
      this.$refs.uploadFile.click();
    },
    fileChange(e) {
      let files = this.$refs.uploadFile.files;
      if (files.length > 0) this.fileAdd(files[0]);
    },
    fileAdd(file) {
      //判断是否为图片文件
      if (file.type.indexOf("image") != -1) {
        let reader = new FileReader();
        reader.vue = this;
        reader.readAsDataURL(file);
        reader.onload = function() {
          reader.vue.fileData.FILENAME = file.name;
          reader.vue.fileData.BASE64STRING = this.result;
        };
      }
    }
  }
};
</script>

<style type="text/css" scoped>
.resumeJob-top {
  box-sizing: border-box;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  padding-left: 0.2rem;
  background: #007bfe;
  color: rgba(255, 255, 255, 1);
  font-family: PingFang-SC-Bold;
}
.resumeJob-top .resumeJob-top-left {
  font-size: 17px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.resumeJob-top .resumeJob-top-right {
  font-size: 15px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.resumeJob-container {
  margin-top: 0.2rem;
}
.resumeJob-container .hrss-item-ul li {
  display: inline-block;
  width: 100%;
  min-height: 0.6rem;
  border-bottom: 0.02rem solid #eee;
  background-color: #fff;
}
.resumeJob-container .hrss-item-ul li span {
  display: inline;
  color: #999;
  font-size: 0.3rem;
  line-height: 0.88rem;
  max-width: 65vw;
  padding: 0 0.2rem;
}
.resumeJob-container .hrss-item-ul li .hrss-item-right {
  font-size: 15px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.resumeJob-container .hrss-item-ul li .hrss-item-left {
  display: inline-block;
  width: 24vw;
}
.resumeJob-container .hrss-item-ul li .hrss-item-right > input {
  font-size: 15px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.resumeJob-container .hrss-item-ul li .hrss-item-img {
  height: 0.4rem;
}
.resumewtJob-footer {
  margin: 0.46rem 0.2rem 1rem;
}
.resumewtJob-keep {
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  background: rgba(0, 148, 226, 1);
  border-radius: 0.06rem;
  font-size: 15px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.resumewtJob-remove {
  margin-top: 0.28rem;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  font-size: 14px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(0, 148, 226, 1);
  border: 1px solid #0094e2;
  background: rgba(244, 246, 247, 1);
}
.resumeJob-container .JobRemark {
  box-sizing: border-box;
  width: 100%;
  line-height: 0.6rem;
  padding-left: 0.2rem;
  color: #999;
  background-color: #fff;
}
.resumeJob-container .job_text {
  box-sizing: border-box;
  width: 100%;
  padding: 0 0.2rem;
  background-color: #fff;
}
.resumeJob-container textarea::-webkit-input-placeholder {
  color: #999;
  font-size: 16px;
}
</style>