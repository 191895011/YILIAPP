<template>
  <div>
    <div class="resumeJob-top">
      <span class="resumeJob-top-left">{{title.person}}</span>
      <span class="resumeJob-top-right">{{title.JobTitle}}</span>
    </div>
    <div class="resumeJob-container">
        <ul class="hrss-item-ul">
          <li @click="setDate">
            <span class="hrss-item-left">开始日期</span>
            <span class="hrss-item-right" >{{TeachForm.StartTime}}</span>
            <!-- <img class="hrss-item-img" :src="require('@/assets/icon/resumewtdown.png')"> -->
          </li>
          <li @click="setDate2">
            <span class="hrss-item-left">结束日期</span>
            <span class="hrss-item-right" >
              {{TeachForm.EndTime}}
              <!-- <input type="text" value="工作调动" placeholder="请输入" /> -->
            </span>
          </li>
          <li>
           <span class="hrss-item-left">学校名称</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="TeachForm.SchoolName" placeholder="请输入" />
            </span>
          </li>
          <li @click="User_SelectEducationTypesk">
            <span class="hrss-item-left">学历</span>
            <span class="hrss-item-right">
              {{TeachForm.EducationType}}
            </span>
          </li>
          <li @click="User_SelectDegreeTypesk">
            <span class="hrss-item-left">学位</span>
            <span class="hrss-item-right">
              {{TeachForm.DegreeType}}
            </span>
          </li>
          <li @click="User_SelectSchoolsk">
            <span class="hrss-item-left">学校类型</span>
            <span class="hrss-item-right">
              {{TeachForm.SchoolType}}
            </span>
          </li>
          <!--开始-->
          <li @click="User_SelectProfessionTypesk">
            <span class="hrss-item-left">专业类别</span>
            <span class="hrss-item-right">
              {{TeachForm.ProfessionType}}
            </span>
          </li>
          <li>
           <span class="hrss-item-left">专业</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="TeachForm.Profession" placeholder="请输入" />
            </span>
          </li>
          <li @click="User_SelectTeachModussk">
            <span class="hrss-item-left">教育形式</span>
            <span class="hrss-item-right">
              {{TeachForm.TeachModel}}
            </span>
          </li>
          <li>
           <span class="hrss-item-left">学历证书编号</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="TeachForm.EducationBook" placeholder="请输入" />
            </span>
          </li>
          <li>
           <span class="hrss-item-left">学位证书编号</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="TeachForm.DegreeBook" placeholder="请输入" />
            </span>
          </li>
          <li class="Teach-Second">
              <h3 class="Teach-SecondTitle">第二专业</h3>
          </li>
          <li @click="setDate3">
            <span class="hrss-item-left">开始日期</span>
            <span class="hrss-item-right" >{{TeachForm.SecondStartTime}}</span>
          </li>
          <li @click="setDate4">
            <span class="hrss-item-left">结束日期</span>
            <span class="hrss-item-right" >
              {{TeachForm.SecondEndTime}}
            </span>
          </li>
          <li>
           <span class="hrss-item-left">第二专业</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="TeachForm.SecondProfession" placeholder="请输入" />
            </span>
          </li>
          <li @click="User_SelectSecondDegreeTypesk">
            <span class="hrss-item-left">学位</span>
            <span class="hrss-item-right">
              {{TeachForm.SecondDegreeType}}
            </span>
          </li>
        </ul>
        <p class="JobRemark">备注</p>
        <textarea class="job_text" placeholder="请在此处输入" v-model.trim="TeachForm.SecondRemarks"></textarea>
     </div>
     <div class="resumewtJob-footer">
       <div class="resumewtJob-keep" @click="TeachKeep">保存</div>
       <div class="resumewtJob-remove">删除</div>
     </div>
     <!--学校类型-->
     <mt-popup
        v-model="SchoolTypeVisible"
        position="bottom"
        popup-transition="popup-fade">
        <mt-picker :slots="SchoolTypeSlots" @change="OnValuesSchoolChange" value-key="name" class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_SelectSchoolsk">
                  取消
               </div>
               <div>
               学校类型
               </div>
               <div class="usi-btn-sure" @click="User_SelectSchoolSure">
                 确定
               </div>
            </div>
        </mt-picker>
     </mt-popup>
     <!--专业类别-->
     <mt-popup
        v-model="ProfessionTypeVisible"
        position="bottom"
        popup-transition="popup-fade">
          <mt-picker :slots="ProfessionTypeSlots" @change="OnValuesProfessionTypeChange" value-key="name" class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_SelectProfessionTypesk">
                  取消
               </div>
               <div>
               专业类别
               </div>
               <div class="usi-btn-sure" @click="User_SelecteProfessionTypeSure">
                 确定
               </div>
            </div>
         </mt-picker>
      </mt-popup>
      <!--教育形式-->
      <mt-popup
        v-model="TeachModusVisible"
        position="bottom"
        popup-transition="popup-fade">
          <mt-picker :slots="TeachModusSlots" @change="OnValuesTeachModusChange" value-key="name" class="levelselect" showToolbar>
               <div class="picker-toolbar-title">
                   <div class="usi-btn-cancel" @click="User_SelectTeachModussk">
                      取消
                   </div>
                   <div>
                   教育形式
                   </div>
                   <div class="usi-btn-sure" @click="User_SelecteTeachModusSure">
                     确定
                   </div>
                </div>
         </mt-picker>
       </mt-popup>
        <!--学历-->
        <mt-popup
            v-model="EducationTypeVisible"
            position="bottom"
            popup-transition="popup-fade">
            <mt-picker :slots="EducationTypeSlots" @change="OnValuesEducationTypeChange" value-key="name" class="levelselect" showToolbar>
               <div class="picker-toolbar-title">
                   <div class="usi-btn-cancel" @click="User_SelectEducationTypesk">
                      取消
                   </div>
                   <div>
                   学历
                   </div>
                   <div class="usi-btn-sure" @click="User_SelectEducationTypeSure">
                     确定
                   </div>
                </div>
             </mt-picker>
        </mt-popup>
        <!--学位-->
        <mt-popup
            v-model="DegreeTypeVisible"
            position="bottom"
            popup-transition="popup-fade">
              <mt-picker :slots="DegreeTypeSlots" @change="OnValuesDegreeTypeChange" value-key="name" class="levelselect" showToolbar>
                 <div class="picker-toolbar-title">
                     <div class="usi-btn-cancel" @click="User_SelectDegreeTypesk">
                        取消
                     </div>
                     <div>
                     学位
                     </div>
                     <div class="usi-btn-sure" @click="User_SelecteDegreeTypeSure">
                       确定
                     </div>
                  </div>
             </mt-picker>
       </mt-popup>
        <!--第二学位-->
        <mt-popup
            v-model="SecondDegreeTypeVisible"
            position="bottom"
            popup-transition="popup-fade">
              <mt-picker :slots="SecondDegreeTypeSlots" @change="OnValuesSecondDegreeTypeChange" value-key="name" class="levelselect" showToolbar>
                 <div class="picker-toolbar-title">
                     <div class="usi-btn-cancel" @click="User_SelectSecondDegreeTypesk">
                        取消
                     </div>
                     <div>
                     学位
                     </div>
                     <div class="usi-btn-sure" @click="User_SelecteSecondDegreeTypeSure">
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
        JobTitle: '教育经历 - 编辑'
      },
      TeachForm: {
        StartTime: '2018-01-10',
        EndTime: '2019-01-01',
        SchoolName: '清华大学',
        SchoolType: '211高等学校',
        SchoolTypeArr: [{'code': '00', 'name': '211高等学校'}],
        ProfessionType: '经济学',
        ProfessionTypeArr: [{'code': '02', 'name': '经济学'}],
        Profession: '理财金融',
        TeachModel: '普通全日制',
        TeachModelArr: [{'code': '1', 'name': '普通全日制'}],
        EducationType: '大学',
        EducationTypeArr: [{'code': '30', 'name': '大学'}],
        DegreeType: '学士',
        DegreeTypeArr: [{'code': '4', 'name': '学士'}],
        EducationBook: '123432',
        DegreeBook: '1235665',
        SecondStartTime: '2018-02-03',
        SecondEndTime: '2018-12-03',
        SecondProfession: '中医学',
        SecondDegreeType: '学士',
        SecondDegreeTypeArr: [{'code': '4', 'name': '学士'}],
        SecondRemarks: '我是备注'
      },
      SchoolTypeVisible: false,
      SchoolTypeSlots: [
        {
          flex: 1,
          values: UserCodeList.SchoolType,
          textAlign: 'center'
        }
      ],
      ProfessionTypeVisible: false,
      ProfessionTypeSlots: [
        {
          flex: 1,
          values: UserCodeList.ProfessionTypeList,
          textAlign: 'center'
        }
      ],
      TeachModusVisible: false,
      TeachModusSlots: [
        {
          flex: 1,
          values: UserCodeList.TeachTypeList,
          textAlign: 'center'
        }
      ],
      EducationTypeVisible: false,
      EducationTypeSlots: [
        {
          flex: 1,
          values: UserCodeList.EducationList,
          textAlign: 'center'
        }
      ],
      DegreeTypeVisible: false,
      DegreeTypeSlots: [
        {
          flex: 1,
          values: UserCodeList.DegreeList,
          textAlign: 'center'
        }
      ],
      SecondDegreeTypeVisible: false,
      SecondDegreeTypeSlots: [
        {
          flex: 1,
          values: UserCodeList.DegreeList,
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
          this.TeachForm.StartTime = date
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
          this.TeachForm.EndTime = e
        }
      })
    },
    setDate3 () {
      this.$picker.show({
        type: 'datePicker',
        endTime: '2280-02-11',
        startTime: '1900-01-01',
        onOk: (e) => {
          console.log(e)
          this.TeachForm.SecondStartTime = e
        }
      })
    },
    setDate4 () {
      this.$picker.show({
        type: 'datePicker',
        endTime: '2280-02-11',
        startTime: '1900-01-01',
        onOk: (e) => {
          console.log(e)
          this.TeachForm.SecondEndTime = e
        }
      })
    },
    // 学校类型
    User_SelectSchoolsk () {
      this.SchoolTypeVisible = !this.SchoolTypeVisible  
    },
    User_SelectSchoolSure () {
      if (this.TeachForm.SchoolTypeArr.length > 0) {
        this.TeachForm.SchoolType = this.TeachForm.SchoolTypeArr[0].name
      }
      this.SchoolTypeVisible = !this.SchoolTypeVisible  
    },
    OnValuesSchoolChange (picker, values) {
      this.TeachForm.SchoolTypeArr = values
      console.log(this.TeachForm.SchoolTypeArr)
    },
    // 专业类别
    User_SelectProfessionTypesk () {
      this.ProfessionTypeVisible = !this.ProfessionTypeVisible 
    },
    User_SelecteProfessionTypeSure () {
      if (this.TeachForm.ProfessionTypeArr.length > 0) {
        this.TeachForm.ProfessionType = this.TeachForm.ProfessionTypeArr[0].name
      }
      this.ProfessionTypeVisible = !this.ProfessionTypeVisible    
    },
    OnValuesProfessionTypeChange (picker, values) {
      this.TeachForm.ProfessionTypeArr = values
      console.log(this.TeachForm.ProfessionTypeArr)
    },
    // 教育形式
    User_SelectTeachModussk () {
      this.TeachModusVisible = !this.TeachModusVisible
    },
    User_SelecteTeachModusSure () {
      if (this.TeachForm.TeachModelArr.length > 0) {
        this.TeachForm.TeachModel = this.TeachForm.TeachModelArr[0].name
      }
      this.TeachModusVisible = !this.TeachModusVisible
    },
    OnValuesTeachModusChange (picker, values) {
      this.TeachForm.TeachModelArr = values
      console.log(this.TeachForm.TeachModelArr)
    },
    // 学历
    User_SelectEducationTypesk () {
      this.EducationTypeVisible = !this.EducationTypeVisible
    },
    User_SelectEducationTypeSure () {
      if (this.TeachForm.EducationTypeArr.length > 0) {
        this.TeachForm.EducationType = this.TeachForm.EducationTypeArr[0].name
      }
      this.EducationTypeVisible = !this.EducationTypeVisible  
    },
    OnValuesEducationTypeChange (picker, values) {
      this.TeachForm.EducationTypeArr = values
      console.log(this.TeachForm.EducationTypeArr)
    },
    // 学位
    User_SelectDegreeTypesk () {
      this.DegreeTypeVisible = !this.DegreeTypeVisible
    },
    User_SelecteDegreeTypeSure () {
      if (this.TeachForm.DegreeTypeArr.length > 0) {
         this.TeachForm.DegreeType = this.TeachForm.DegreeTypeArr[0].name
      }
      this.DegreeTypeVisible = !this.DegreeTypeVisible
    },
    OnValuesDegreeTypeChange (picker, values) {
      this.TeachForm.DegreeTypeArr = values
      console.log(this.TeachForm.DegreeTypeArr)
    },
    // 第二学位
    User_SelectSecondDegreeTypesk () {
      this.SecondDegreeTypeVisible = !this.SecondDegreeTypeVisible
    },
    User_SelecteSecondDegreeTypeSure () {
      if (this.TeachForm.SecondDegreeTypeArr.length > 0) {
        this.TeachForm.SecondDegreeType = this.TeachForm.SecondDegreeTypeArr[0].name
      }
      this.SecondDegreeTypeVisible = !this.SecondDegreeTypeVisible
    },
    OnValuesSecondDegreeTypeChange (picker, values) {
      this.TeachForm.SecondDegreeTypeArr = values
      console.log(this.TeachForm.SecondDegreeTypeArr)
    },
    TeachKeep () {
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
.Teach-Second {
  display: inline-block;  
  line-height: .6rem;
  border-bottom: .02rem solid #eee;
  background-color: #fff;
}
.Teach-SecondTitle {
   padding: 0 .2rem; 
}
</style>