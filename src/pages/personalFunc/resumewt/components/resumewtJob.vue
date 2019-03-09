<template>
  <div>
    <div class="resumeJob-top">
      <span class="resumeJob-top-left">{{title.person}}</span>
      <span class="resumeJob-top-right">{{title.JobTitle}}</span>
    </div>
    <div class="resumeJob-container">
        <ul class="hrss-item-ul">
          <li>
            <span class="hrss-item-left">开始日期</span>
            <span class="hrss-item-right" @click="setDate">{{JobForm.StartTime}}</span>
            <!-- <img class="hrss-item-img" :src="require('@/assets/icon/resumewtdown.png')"> -->
          </li>
          <li>
            <span class="hrss-item-left">结束日期</span>
            <span class="hrss-item-right" @click="setDate2">
              {{JobForm.EndTime}}
              <!-- <input type="text" value="工作调动" placeholder="请输入" /> -->
            </span>
          </li>
          <li>
           <span class="hrss-item-left">原单位</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="JobForm.Unit" placeholder="请输入" />
            </span>
          </li>
          <li>
            <span class="hrss-item-left">离职前职位</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="JobForm.Office" placeholder="请输入" />
            </span>
          </li>
          <li>
            <span class="hrss-item-left">联系人</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="JobForm.ContactMan" placeholder="请输入" />
            </span>
          </li>
          <li>
            <span class="hrss-item-left">联系电话</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="JobForm.Phone" placeholder="请输入" />
            </span>
          </li>
        </ul>
        <p class="JobRemark">备注</p>
        <textarea class="job_text" placeholder="请在此处输入" v-model.trim="JobForm.Remarks"></textarea>
     </div>
     <div class="resumewtJob-footer">
       <div class="resumewtJob-keep">保存</div>
       <div class="resumewtJob-remove">删除</div>
     </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      title: {
        person: '个人信息修改流程 - ',
        JobTitle: '企业外工作经历 - 编辑'
      },
      JobForm: {
        StartTime: '2018-01-10',
        EndTime: '2019-01-01',
        Unit: '伊利总部',
        Office: '销售经理',
        ContactMan: '销售大区总监',
        Phone: '18731923456',
        Remarks: ''
      }
    }
  },
  methods: {
    setDate () {
      this.$picker.show({
        type: 'datePicker',
        endTime: '2280-02-11',
        startTime: '1900-01-01',
        onOk: (date) => {
          console.log(date)
          this.JobForm.StartTime = date
        }
      })
    },
    setDate2 () {
      this.$picker.show({
        type: 'datePicker',
        endTime: '2280-02-11',
        startTime: '1900-01-01',
        onOk: (e) => {
          console.log(e)
          this.JobForm.EndTime = e
        }
      })
    }
  }
}
</script>

<style type="text/css" scoped>
.resumeJob-top {
  box-sizing: border-box;
  width:100%;
  height: .88rem;
  line-height: .88rem;
  padding-left: .2rem;
  background:#007bfe;
  color:rgba(255,255,255,1);
  font-family: PingFang-SC-Bold;
}
.resumeJob-top .resumeJob-top-left {
  font-size:17px;
  font-family:PingFang-SC-Bold;
  font-weight:bold;
  color:rgba(255,255,255,1);
}
.resumeJob-top .resumeJob-top-right {
  font-size:15px;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(255,255,255,1);
}
.resumeJob-container {
  margin-top: .2rem;
}
.resumeJob-container .hrss-item-ul li{
   display: inline-block;
   width: 100%;
   min-height: .6rem;
   border-bottom: .02rem solid #eee;
   background-color: #fff;
}
.resumeJob-container .hrss-item-ul li span {
  display: inline;
  color: #999;
  font-size: .3rem;
  line-height: .88rem;
  max-width: 65vw;
  padding: 0 .2rem;
}
.resumeJob-container .hrss-item-ul li .hrss-item-right {
  font-size:15px;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(51,51,51,1);
}
.resumeJob-container .hrss-item-ul li .hrss-item-left {
   display:inline-block;
   width: 24vw;
}
.resumeJob-container .hrss-item-ul li .hrss-item-right> input{
  font-size: 15px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51,51,51,1);
}
.resumeJob-container .hrss-item-ul li .hrss-item-img {
  height: .4rem;
}
.resumewtJob-footer {
  margin: .46rem .2rem 1rem;
}
.resumewtJob-keep {
  width:100%;
  height:.88rem;
  line-height: .88rem;
  text-align:center;
  background:rgba(0,148,226,1);
  border-radius:.06rem;
  font-size:15px;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(255,255,255,1);
}
.resumewtJob-remove {
  margin-top: .28rem;
  width:100%;
  height:.88rem;
  line-height: .88rem;
  text-align: center;
  font-size:14px;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(0,148,226,1);
  border: 1px solid #0094E2;
  background:rgba(244,246,247,1);
}
.resumeJob-container .JobRemark{
  box-sizing: border-box;
  width: 100%;
  line-height: .6rem;
  padding-left: .2rem;
  color: #999;
  background-color: #fff;
}
.resumeJob-container .job_text{
  box-sizing: border-box;
  width: 100%;
  padding: 0 .2rem;
  background-color: #fff;
}
.resumeJob-container textarea::-webkit-input-placeholder {
  color: #999;
  font-size: 16px;
}
</style>