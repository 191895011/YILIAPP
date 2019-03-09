<template>
  <div>
    <div class="resumeJob-top">
      <span class="resumeJob-top-left">{{title.person}}</span>
      <span class="resumeJob-top-right">{{title.JobTitle}}</span>
    </div>
    <div class="resumeJob-container">
        <ul class="hrss-item-ul">
          <!-- <li>
            <span class="hrss-item-left">国家/地区</span>
            <span class="hrss-item-right" >{{UserForm.Country}}</span>
          </li> -->
          <li @click="showAddressPicker">
            <span class="hrss-item-left">户口所在地</span>
            <span class="hrss-item-right">{{UserForm.Hukou}}</span>
          </li>
          <li>
            <span class="hrss-item-left">证件号码</span>
            <span class="hrss-item-right">
              <input type="text" v-model="UserForm.IDnumber" placeholder="请输入" />
            </span>
          </li>
          <li>
            <span class="hrss-item-left">联系方式</span>
            <span class="hrss-item-right">
              <input type="text" v-model="UserForm.Phone" placeholder="请输入" />
            </span>
          </li>
          <li @click="User_SelectMarriagesk">
            <span class="hrss-item-left">婚姻状况</span>
            <span class="hrss-item-right">{{UserForm.MarriageType}}</span>
          </li>
          <li>
            <span class="hrss-item-left">籍贯</span>
            <span class="hrss-item-right">
              <input type="text" v-model="UserForm.Ancestorplace" placeholder="请输入" />
            </span>
          </li>
          <li @click="User_SelectAccountsk">
            <span class="hrss-item-left">户口性质</span>
            <span class="hrss-item-right">{{UserForm.AccountType}}</span>
          </li>
          <li @click="User_SelectBornPlacesk">
            <span class="hrss-item-left">出生州/省</span>
            <span class="hrss-item-right" >{{UserForm.Bornplace}}</span>
          </li>
          <li>
            <span class="hrss-item-left">出生地点</span>
            <span class="hrss-item-right">
              <input type="text" v-model="UserForm.BornplaceInput" placeholder="请输入" />
            </span>
          </li>
          <li @click="User_SelectPoliticalsk">
            <span class="hrss-item-left">政治面貌</span>
            <span class="hrss-item-right" >{{UserForm.Political}}</span>
          </li>
          <li>
            <span class="hrss-item-left">个人Email</span>
            <span class="hrss-item-right">
              <input type="text" v-model="UserForm.Mailbox" placeholder="请输入" />
            </span>
          </li>
          <li>
            <span class="hrss-item-left">直接上级</span>
            <span class="hrss-item-right" >我的上级</span>
          </li>
          <li>
            <span class="hrss-item-left">加入伊利日期</span>
            <span class="hrss-item-right" @click="setDate">{{UserForm.StartTime}}</span>
          </li>
        </ul> 
     </div>
     <div class="resumewtJob-footer">
         <div class="resumewtJob-keep" @click="KeepMsg">保存</div>
         <!-- <div class="resumewtJob-remove">删除</div> -->
     </div>
     <!--地区选择-->
      <mt-popup
        v-model="AddressplaceShow"
        position="bottom"
        popup-transition="popup-fade">
        <mt-picker
          class="levelselect"
          :slots="AddressSlots"
          valueKey="value"
          :visibleItemCount ="5"
          @change="AddressChange"
          :itemHeight="40"
          showToolbar>
          <div class="picker-toolbar-title">
             <div class="usi-btn-cancel" @click="showAddressPicker">
                取消
             </div>
             <div>
             户口所在地
             </div>
             <div class="usi-btn-sure" @click="AddressPickerSure">
               确定
             </div>
          </div>
        </mt-picker>
      </mt-popup>
      <!--婚姻状况-->
      <mt-popup
        v-model="MarriageVisible"
        position="bottom"
        popup-transition="popup-fade">
          <mt-picker :slots="Marriageslots" @change="onValuesMarriageChange" value-key="name" class="levelselect" showToolbar>
               <div class="picker-toolbar-title">
                   <div class="usi-btn-cancel" @click="User_SelectMarriagesk">
                      取消
                   </div>
                   <div>
                   婚姻状况
                   </div>
                   <div class="usi-btn-sure" @click="User_SelectMarriageSure">
                     确定
                   </div>
                </div>
         </mt-picker>
      </mt-popup>
      <!--户口性质-->
      <mt-popup
        v-model="AccountVisible"
        position="bottom"
        popup-transition="popup-fade">
          <mt-picker :slots="Accountslots" @change="onValuesAccountChange" value-key="name" class="levelselect" showToolbar>
               <div class="picker-toolbar-title">
                   <div class="usi-btn-cancel" @click="User_SelectAccountsk">
                      取消
                   </div>
                   <div>
                   户口性质
                   </div>
                   <div class="usi-btn-sure" @click="User_SelectAccountSure">
                     确定
                   </div>
                </div>
         </mt-picker>
      </mt-popup>
      <!--出生州/省-->
      <mt-popup
        v-model="BornPlaceVisible"
        position="bottom"
        popup-transition="popup-fade">
          <mt-picker :slots="BornPlaceslots" @change="onValuesBornPlaceChange" value-key="value" class="levelselect" showToolbar>
               <div class="picker-toolbar-title">
                   <div class="usi-btn-cancel" @click="User_SelectBornPlacesk">
                      取消
                   </div>
                   <div>
                   出生州/省
                   </div>
                   <div class="usi-btn-sure" @click="User_SelectBornPlaceSure">
                     确定
                   </div>
                </div>
         </mt-picker>
      </mt-popup>
      <!--政治面貌-->
      <mt-popup
        v-model="PoliticalVisible"
        position="bottom"
        popup-transition="popup-fade">
          <mt-picker :slots="Politicalslots" @change="onValuesPoliticalChange" value-key="name" class="levelselect" showToolbar>
           <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="User_SelectPoliticalsk">
                  取消
               </div>
               <div>
               政治面貌
               </div>
               <div class="usi-btn-sure" @click="User_SelectPoliticalSure">
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
        JobTitle: '个人信息 - 编辑'
      },
      UserForm: {
        Phone: '18731923456',
        IDnumber: '1305211900',
        Ancestorplace: '内蒙古包头市土默特右旗',
        Country: '中国',
        Hukou: '安徽省合肥市',
        HukouArr: [{'id': '1000','value': '安徽省'}, {'id': '1200','value': '合肥市'}],
        MarriageType: '已婚',
        MarriageTypeArr: [{'code': '2', 'name': '已婚'}],
        AccountType: '农业',
        AccountTypeArr: [{'code': '1', 'name': '农业'}],
        Bornplace: '内蒙古',
        BornplaceArr: [{'id': '150000','value': '内蒙古'}],
        BornplaceInput: '包头市土默特右旗',
        Political: '群众',
        PoliticalArr: [{'code': '13', 'name': '群众'}],
        Mailbox: 'yili@.com',
        StartTime: '2018-01-10'
      },
      AddressplaceShow :false,
      AddressSlots: [
        {
          flex: 1,
          values: this.getProvinceArr(this.$store.state.CityList), // 省份数组
          textAlign: 'center'
        },
        {
          divider: true,
          content: ''
        },
        {
          flex: 1,
          values: this.getCityArr(this.$store.state.CityList, '北京'),
          textAlign: 'center'
        }
      ],
      MarriageVisible: false,
      Marriageslots: [
        {
          flex: 1,
          values: UserCodeList.MarriageList,
          textAlign: 'center'
        }
      ],
      AccountVisible: false,
      Accountslots: [
        {
          flex: 1,
          values: UserCodeList.AccountList,
          textAlign: 'center'
        }
      ],
      BornPlaceVisible: false,
      BornPlaceslots: [
        {
          flex: 1,
          values: this.getProvinceArr(this.$store.state.CityList),
          textAlign: 'center'
        }
      ],
      PoliticalVisible: false,
      Politicalslots: [
        {
          flex: 1,
          values: UserCodeList.PoliticalList,
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
          this.UserForm.StartTime = date
        }
      })
    },
    showAddressPicker () {
      this.AddressplaceShow = !this.AddressplaceShow
    },
    AddressPickerSure () {
      if (this.UserForm.HukouArr.length > 0) {
        console.log(this.UserForm.HukouArr)
        this.UserForm.Hukou = this.UserForm.HukouArr[0].value + '' + this.UserForm.HukouArr[1].value
      }
      this.AddressplaceShow = !this.AddressplaceShow
    },
    AddressChange (picker, values) {
      picker.setSlotValues(1, this.getCityArr(this.$store.state.CityList, values[0]['value']))
      this.UserForm.HukouArr = values
      console.log(this.UserForm.HukouArr)
    },
    // 遍历json，返回省级对象数组
    getProvinceArr (city) {
      let provinceArr = []
      city.forEach(function (item) {
        let obj = {}
        obj.value = item.value
        obj.id = item.id
        provinceArr.push(obj)
      })
      return provinceArr
    },
    // 遍历json，返回市级对象数组
    getCityArr (list, province) {
      // console.log('省:' + province)
      let cityArr = []
      list.forEach(function (item) {
        if (item.value === province) {
          item.cityList.forEach(function (args) {
            let obj = {}
            obj.value = args.value
            obj.id = args.id
            cityArr.push(obj)
          })
        }
      })
      return cityArr
    },
    // 婚姻状态
    User_SelectMarriagesk () {
      this.MarriageVisible = !this.MarriageVisible
    },
    User_SelectMarriageSure () {
      if (this.UserForm.MarriageTypeArr.length > 0) {
        this.UserForm.MarriageType = this.UserForm.MarriageTypeArr[0].name
      }
      this.MarriageVisible = !this.MarriageVisible
    },
    onValuesMarriageChange (picker, values) {
       this.UserForm.MarriageTypeArr = values
    },
    // 户口性质
    User_SelectAccountsk () {
      this.AccountVisible = !this.AccountVisible
    },
    User_SelectAccountSure () {
      if (this.UserForm.AccountTypeArr.length > 0) {
        this.UserForm.AccountType = this.UserForm.AccountTypeArr[0].name
      }
      this.AccountVisible = !this.AccountVisible
    },
    onValuesAccountChange (picker, values) {
      this.UserForm.AccountTypeArr = values
    },
    // 出生省
    User_SelectBornPlacesk () {
      this.BornPlaceVisible = !this.BornPlaceVisible
    },
    User_SelectBornPlaceSure () {
      if (this.UserForm.BornplaceArr.length > 0) {
        this.UserForm.Bornplace = this.UserForm.BornplaceArr[0].value
      }
      this.BornPlaceVisible = !this.BornPlaceVisible
    },
    onValuesBornPlaceChange (picker, values) {
      this.UserForm.BornplaceArr = values
    },
    // 政治面貌
    User_SelectPoliticalsk () {
      this.PoliticalVisible = !this.PoliticalVisible
    },
    User_SelectPoliticalSure () {
      if (this.UserForm.PoliticalArr.length > 0) {
        this.UserForm.Political = this.UserForm.PoliticalArr[0].name
      }
      this.PoliticalVisible = !this.PoliticalVisible
    },
    onValuesPoliticalChange (picker, values) {
      this.UserForm.PoliticalArr = values
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
  font-size:15px;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(51,51,51,1);
}
.resumeJob-container .hrss-item-ul li .hrss-item-right input{
  width: 57%;
}
.resumeJob-container .hrss-item-ul li .hrss-item-left {
   display:inline-block;
   width: 29vw;
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