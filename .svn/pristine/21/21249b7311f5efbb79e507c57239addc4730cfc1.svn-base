<template>
  <div>
    <div class="resumeJob-top">
      <span class="resumeJob-top-left">{{title.person}}</span>
      <span class="resumeJob-top-right">{{title.JobTitle}}</span>
    </div>
    <div class="resumeJob-container">
        <ul class="hrss-item-ul">
          <li @click="User_LangTypeSelectsk">
            <span class="hrss-item-left">语言</span>
            <span class="hrss-item-right" >{{LangForm.LangType}}</span>
          </li>
          <li @click="User_BookTypeSelectsk">
            <span class="hrss-item-left">证书等级</span>
            <span class="hrss-item-right" >{{LangForm.BookType}}</span>
          </li>
          <li>
            <span class="hrss-item-left">获证日期</span>
            <span class="hrss-item-right" @click="setDate">{{LangForm.BookTime}}</span>
          </li>
          <li @click="User_SelectSkilledTypesk">
            <span class="hrss-item-left">语言熟练程度</span>
            <span class="hrss-item-right" >{{LangForm.SkilledType}}</span>
          </li>
          <li>
            <span class="hrss-item-left">总成绩</span>
            <span class="hrss-item-right">
              <input type="text" v-model.trim="LangForm.Grade" placeholder="请输入" />
            </span>
          </li>
        </ul>
        <p class="JobRemark">备注</p>
        <textarea class="job_text" placeholder="请在此处输入" v-model.trim="LangForm.Remarks"></textarea>
     </div>
     <div class="resumewtJob-footer">
       <div class="resumewtJob-keep" @click="LangKeep">保存</div>
       <div class="resumewtJob-remove">删除</div>
     </div>
      <!--语言选择-->
     <mt-popup
      v-model="LangTypeVisible"
      position="bottom"
      popup-transition="popup-fade">
       <mt-picker :slots="LangTypeSlots" @change="LangTypeValuesChange" value-key="name" class="levelselect" showToolbar>
         <div class="picker-toolbar-title">
           <div class="usi-btn-cancel" @click="User_LangTypeSelectsk">
              取消
           </div>
           <div>
           语言
           </div>
           <div class="usi-btn-sure" @click="User_LangTypeSelectSure">
             确定
           </div>
         </div>
       </mt-picker>
     </mt-popup>
     <!--证书等级-->
      <mt-popup
      v-model="BookTypeVisible"
      position="bottom"
      popup-transition="popup-fade">
       <mt-picker :slots="LangLevellist" @change="BookTypeValuesChange" value-key="name" class="levelselect" showToolbar>
         <div class="picker-toolbar-title">
           <div class="usi-btn-cancel" @click="User_BookTypeSelectsk">
              取消
           </div>
           <div>
           证书等级
           </div>
           <div class="usi-btn-sure" @click="User_BookTypeSelectSure">
             确定
           </div>
         </div>
       </mt-picker>
     </mt-popup>
     <!--熟练程度-->
     <mt-popup
        v-model="SkilledTypeVisible"
        position="bottom"
        popup-transition="popup-fade">
         <mt-picker :slots="SkilledTypeSlots" @change="OnValuesSkilledTypeChange"  value-key="name" class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
             <div class="usi-btn-cancel" @click="User_SelectSkilledTypesk">
                取消
             </div>
             <div>
             熟练程度
             </div>
             <div class="usi-btn-sure" @click="User_SelectSkilledTypeSure">
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
        JobTitle: '语言技能 - 编辑'
      },
      LangForm: {
        LangType: '英语',
        LangTypeArr: [{'code': '1', 'name': '英语'}],
        BookType: '英语4级',
        BookTypeArr: [{'code': '1', 'name': '英语4级'}],
        BookTime: '2018-01-10',
        SkilledType: '一般',
        SkilledTypeArr: [{'code': '4', 'name': '一般'}],
        Grade: '100',
        Remarks: ''
      },
      SkilledTypeVisible: false,
      SkilledTypeSlots: [
        {
          flex: 1,
          values: UserCodeList.SkilledList,
          textAlign: 'center'
        }
      ],
      LangTypeVisible: false,
      LangTypeSlots: [
        {
          flex: 1,
          values: UserCodeList.LanguageList,
          textAlign: 'center'
        }
      ],
      BookTypeVisible: false
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
          this.LangForm.BookTime = date
        }
      })
    },
    // 语言
    User_LangTypeSelectsk () {
      this.LangTypeVisible = !this.LangTypeVisible
    },
    User_LangTypeSelectSure () {
      if (this.LangForm.LangTypeArr) {
        this.LangForm.LangType = this.LangForm.LangTypeArr[0].name
      }
      this.LangTypeVisible = !this.LangTypeVisible
    },
    LangTypeValuesChange (picker, values) {
      this.LangForm.LangTypeArr = values
      console.log(this.LangForm.LangTypeArr)
    },
    // 等级证书
    User_BookTypeSelectsk () {
      this.BookTypeVisible = !this.BookTypeVisible
    },
    User_BookTypeSelectSure () {
      if (this.LangForm.BookTypeArr.length > 0) {
        this.LangForm.BookType = this.LangForm.BookTypeArr[0].name
      }
      this.BookTypeVisible = !this.BookTypeVisible
    },
    BookTypeValuesChange (picker, values) {
      this.LangForm.BookTypeArr = values
      console.log(this.LangForm.BookTypeArr)
    },
    // 熟练程度
    User_SelectSkilledTypesk () {
      this.SkilledTypeVisible = !this.SkilledTypeVisible
    },
    User_SelectSkilledTypeSure () {
      if (this.LangForm.SkilledTypeArr.length > 0) {
        this.LangForm.SkilledType = this.LangForm.SkilledTypeArr[0].name
      }
      this.SkilledTypeVisible = !this.SkilledTypeVisible
    },
    OnValuesSkilledTypeChange (picker, values) {
      this.LangForm.SkilledTypeArr = values
      console.log(this.LangForm.SkilledTypeArr)
    },
    LangKeep () {
      this.$router.push({
        path: `/resumewt`
      })
    }
  },
  computed: {
    LangLevellist () {
      let lglevelslots = [
        {
          flex: 1,
          values: UserCodeList.languageENList,
          textAlign: 'center'
        }
      ]
      return lglevelslots
    }
  },
  watch: {
    'LangForm.LangType' (item) {
      this.LangForm.BookType = ''
      this.LangForm.BookTypeArr = []
      let languagecode = Number(this.LangForm.LangTypeArr[0].code)
      console.log(languagecode)
      if (languagecode === 1) {
        console.log('英语')
        this.LangLevellist[0].values = UserCodeList.languageENList
      } else if (languagecode === 2) {
        console.log('德语')
        this.LangLevellist[0].values = UserCodeList.LanguageGermanList
      } else if (languagecode === 3) {
        console.log('日语')
        this.LangLevellist[0].values = UserCodeList.LanguageJapaneseList
      } else if (languagecode === 4) {
        console.log('法语')
        this.LangLevellist[0].values = UserCodeList.LanguageFrenchList
      } else if (languagecode === 5) {
        this.LangLevellist[0].values = UserCodeList.LanguageRussianList
      } else if (languagecode === 6) {
        this.LangLevellist[0].values = UserCodeList.LanguageKoreanList
      } else {
        this.LangLevellist[0].values = UserCodeList.LanguageOtherList
      }
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
  font-size: 14px;
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