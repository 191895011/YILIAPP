<template>
  <div class="hrss-per social-info">
    <div class="hrss-search">
      <h2>我的社保</h2>
      <el-input placeholder="缴费期间" prefix-icon="el-icon-search" v-model="selectDate" readonly @click.native="selectDatePopup=true" size="medium">
        <i slot="suffix" class="el-input__icon el-icon-caret-bottom"></i>
      </el-input>
      <mt-popup v-model="selectDatePopup" closeOnClickModal="true" position="bottom">
        <mt-picker :slots="dataSlots" @change="onValuesChange" showToolbar valueKey="CAL_PRD_DESCR">
          <div class="picker-toolbar-title">
            <div class="usi-btn-cancel" @click="selectDatePopup=!selectDatePopup">取消</div>
            <div class="">缴费期间</div>
            <div class="usi-btn-sure" @click="getSalary">确定</div>
          </div>
        </mt-picker>
      </mt-popup>
    </div>
    <div class="hrss-per-main">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="社保合计" name="1">
        <ul class="hrss-item-ul">
          <li>
            <span>个人缴费金额（元）</span>
            <span class="hrss-item-right">{{socData.GC_SUM_TOTAL}}</span>
          </li>
          <li>
            <span>个人补缴金额（元）</span>
            <span class="hrss-item-right">{{socData.GC_SUM_TOTAL1}}</span>
          </li>
          <li>
            <span>个人金额小计（元）</span>
            <span class="hrss-item-right">{{socData.GC_SUM_TOTAL2}}</span>
          </li>
          <li>
            <span>公司缴费金额（元）</span>
            <span class="hrss-item-right">{{socData.GC_SUM_TOTAL3}}</span>
          </li>
          <li>
            <span>公司补缴金额（元）</span>
            <span class="hrss-item-right">{{socData.GC_SUM_TOTAL4}}</span>
          </li>
          <li>
            <span>公司金额小计（元）</span>
            <span class="hrss-item-right">{{socData.GC_SUM_TOTAL5}}</span>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="社保明细" name="2">
        <ul class="hrss-item-table" v-if="socData.SI_DETAIL.length > 0" v-for="(social,index) in socData.SI_DETAIL" :key="index">
          <li>
            <span>社会保险类型</span>
            <span class="hrss-item-right">{{social.CG_SI_TYPE}}</span>
          </li>
          <li>
            <span>个人金额小计（元）</span>
            <span class="hrss-item-right">{{social.GC_SUM_TOTAL6}}</span>
          </li>
          <li>
            <span>公司金额小计（元）</span>
            <span class="hrss-item-right">{{social.GC_SUM_TOTAL7}}</span>
          </li>
          <li>
            <span>个人缴费基数（元）</span>
            <span class="hrss-item-right">{{social.CG_PAY_BASE_PERS}}</span>
          </li>
          <li>
            <span>个人缴费比例（%）</span>
            <span class="hrss-item-right">{{social.CG_PAY_RATE_PERS}}%</span>
          </li>
          <li>
            <span>个人缴费金额（元）</span>
            <span class="hrss-item-right">{{social.CG_PAY_AMT_PERS}}</span>
          </li>
          <li>
            <span>个人补缴金额（元）</span>
            <span class="hrss-item-right">{{social.GC_FUND_NBACK_P}}</span>
          </li>
          <li>
            <span>公司缴费基数（元）</span>
            <span class="hrss-item-right">{{social.CG_PAY_BASE_CO}}</span>
          </li>
          <li>
            <span>公司缴费比例（%）</span>
            <span class="hrss-item-right">{{social.CG_PAY_RATE_CO}}%</span>
          </li>
          <li>
            <span>公司缴费金额（元）</span>
            <span class="hrss-item-right">{{social.CG_PAY_AMT_CO}}</span>
          </li>
          <li>
            <span>公司补缴金额（元）</span>
            <span class="hrss-item-right">{{social.GC_FUND_NBACK_C}}</span>
          </li>
          <li>
            <span>社会保险缴纳地</span>
            <span class="hrss-item-right">{{social.GC_SI_SIL_DESC}}</span>
          </li>
          <li>
            <span>期间 ID</span>
            <span class="hrss-item-right">{{social.CAL_PRD_ID}}</span>
          </li>
          <li>
            <span>补缴说明</span>
            <span class="hrss-item-right">{{social.GC_FUND_SBACK_CMN}}</span>
          </li>
        </ul>
        <span v-if="socData.SI_DETAIL.length == 0" class="hrss-no-data">暂无数据</span>
      </el-collapse-item>
    </el-collapse>
    </div>
  </div>
</template>

<script>
import { PayRoll_Period, PAYROLL_SELECT } from "@/api/index.js";
import "@/assets/styles/perFunc.css";
export default {
  data() {
    return {
      activeNames: ["1", "2"],
      prdType: "SOC",
      selectDatePopup: false,
      selectDate: "",
      dataSlots: [],
      slotsSelect: [],
      personal: {},
      socData: { SI_DETAIL: [] }
    };
  },
  methods: {
    onValuesChange(picker, values) {
      this.slotsSelect = values;
    },
    getSalary() {
      if (this.slotsSelect.length > 0)
        this.selectDate = this.slotsSelect[0].CAL_PRD_DESCR;
      this.selectDatePopup = false;
      this.getSocList();
    },
    handleRowClick(row, event, column) {
      this.$refs.socialRef.toggleRowExpansion(row);
    },
    getPrdList() {
      let p = { PRD_TYPE: this.prdType };
      PayRoll_Period(p).then(res => {
        if (res.status == "0") {
          if (res.JsonData.length > 0) {
            this.dataSlots = [{ values: res.JsonData }];
            this.slotsSelect = [res.JsonData[0]];
            this.getSalary();
          }
        }
      });
    },
    getSocList() {
      let p = {
        PRD_TYPE: this.prdType,
        CALPRDID: this.slotsSelect[0].CAL_PRD_ID
      };
      PAYROLL_SELECT(p).then(res => {
        if (res.status == "0") {
          this.socData = res.JsonData;
        }
      });
    }
  },
  created() {
    this.personal = JSON.parse(sessionStorage.getItem("userInfo"));
    this.getPrdList();
  }
};
</script>

<style scoped>
</style>
