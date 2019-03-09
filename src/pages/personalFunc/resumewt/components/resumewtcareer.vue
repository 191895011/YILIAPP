<template>
  <div>
    <div class="resumeJob-top">
      <span class="resumeJob-top-left">{{title.person}}</span>
      <span class="resumeJob-top-right">{{title.JobTitle}}</span>
    </div>
    <div class="resumeJob-container">
        <ul class="hrss-item-ul">
          <li>
            <span class="hrss-item-left">国家职业资格分类</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="CareerForm.CareerSort" placeholder="请输入" />
            </span>
          </li>
          <li>
            <span class="hrss-item-left">国家职业资格名称</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="CareerForm.CareerName" placeholder="请输入" />
            </span>
          </li>
          <li @click="setDate">
            <span class="hrss-item-left">获证日期</span>
            <span class="hrss-item-right" >{{CareerForm.CareerTime}}</span>
          </li>
          <li>
            <span class="hrss-item-left">颁发国家职业资格单位</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="CareerForm.CareerUnit" placeholder="请输入" />
            </span>
          </li>
          <li @click="User_SelectCareerLevelTypesk">
            <span class="hrss-item-left">职业资格等级</span>
            <span class="hrss-item-right" >{{CareerForm.CareerLevelType}}</span>
          </li>
          <li>
            <span class="hrss-item-left">资格证号</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="CareerForm.CareerNumber" placeholder="请输入" />
            </span>
          </li>
        </ul>
        <p class="JobRemark">备注</p>
        <textarea class="job_text" placeholder="请在此处输入" v-model.trim="CareerForm.Remarks"></textarea>
     </div>
     <div class="resumewtJob-footer">
       <div class="resumewtJob-keep" @click="KeepMsg">保存</div>
       <div class="resumewtJob-remove">删除</div>
     </div>
     <!--职业资格等级-->
     <mt-popup
        v-model="CareerLevelTypeVisible"
        position="bottom"
        popup-transition="popup-fade">
          <mt-picker :slots="CareerLevelTypeSlots" @change="OnValuesCareerLevelTypeChange" value-key="name" class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_SelectCareerLevelTypesk">
                  取消
               </div>
               <div>
               职业资格等级
               </div>
               <div class="usi-btn-sure" @click="User_SelecteProfessionTypeSure">
                 确定
               </div>
            </div>
         </mt-picker>
      </mt-popup>
  </div>
</template>

<script type="text/javascript">
import UserCodeList from '@/assets/js/UserCodeList'

export default {
  data () {
    return {
      title: {
        person: '个人信息修改流程 - ',
        JobTitle: '职业资格 - 编辑'
      },
      CareerForm: {
        CareerSort: '我是职业分类值',
        CareerName: '我是职业资格名称',
        CareerTime: '2018-01-10',
        CareerUnit: '我是颁发单位',
        CareerLevelType: '初级',
        CareerLevelTypeArr: [{'code': '1', 'name': '初级'}],
        CareerNumber: '12342433',
        Remarks: '我是备注'
      },
      CareerLevelTypeVisible: false,
      CareerLevelTypeSlots: [
        {
          flex: 1,
          values: UserCodeList.CareerLeveList,
          textAlign: 'center'
        }
      ]
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
          this.CareerForm.BookeTime = date
        }
      })
    },
    User_SelectCareerLevelTypesk () {
      this.CareerLevelTypeVisible = !this.CareerLevelTypeVisible
    },
    User_SelecteProfessionTypeSure () {
      if (this.CareerForm.CareerLevelTypeArr.length > 0) {
        this.CareerForm.CareerLevelType = this.CareerForm.CareerLevelTypeArr[0].name
      }
      this.CareerLevelTypeVisible = !this.CareerLevelTypeVisible
    },
    OnValuesCareerLevelTypeChange (picker, values) {
      this.CareerForm.CareerLevelTypeArr = values
      console.log(this.CareerForm.CareerLevelTypeArr)
    },
    KeepMsg () {
      this.$router.push({
        path: `/resumewt`
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
  display:inline-block;
  vertical-align: top;
  font-size:15px;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(51,51,51,1);
  width:60%;
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
  width:100%;
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
  font-size:14px;
}
.resumeJob-container textarea::-webkit-input-placeholder {
  color: #999;
  font-size: 16px;
}
.levelselect {
  width: 7.5rem;
  /*font-size: .28rem;*/
}
.picker-toolbar-title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  /*font-size: .28rem;*/
  color: #000;
  border-bottom: 1px solid #ccc;
}
</style>