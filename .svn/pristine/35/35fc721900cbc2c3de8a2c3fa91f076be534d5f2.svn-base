<template>
  <div class="hrss-per attendance-info">
    <div class="hrss-search">
      <h2>我的考勤</h2>
      <el-input placeholder="考勤期间" prefix-icon="el-icon-search" v-model="selectDate" readonly @click.native="selectDatePopup=true" size="medium">
        <i slot="suffix" class="el-input__icon el-icon-caret-bottom"></i>
      </el-input>
      <mt-popup v-model="selectDatePopup" closeOnClickModal="true" position="bottom">
        <mt-picker :slots="dataSlots" @change="onValuesChange" showToolbar valueKey="CAL_PRD_DESCR">
          <div class="picker-toolbar-title">
            <div class="usi-btn-cancel" @click="selectDatePopup=!selectDatePopup">取消</div>
            <div class="">考勤期间</div>
            <div class="usi-btn-sure" @click="getSalary">确定</div>
          </div>
        </mt-picker>
      </mt-popup>
    </div>
    <div class="hrss-per-main">
      <el-collapse v-model="activeNames">
        <el-collapse-item v-if="attList.length > 0" v-for="att in attList" :key="att.SECTIONS_CD" :title="att.SECTIONS_DESCR" :name="att.SECTIONS_CD">
          <ul class="hrss-item-ul" v-for="(item,index) in att.ITEMS" :key="index" v-if="att.ITEMS.length > 0">
            <li>
              <span>类型</span>
              <span class="hrss-item-right">{{item.NAME}}</span>
            </li>
            <li>
              <span>时长</span>
              <span class="hrss-item-right">{{item.VALUE}}</span>
            </li>
            <li>
              <span>单位</span>
              <span class="hrss-item-right">{{item.UNIT}}</span>
            </li>
          </ul>
          <span v-if="att.ITEMS.length == 0" class="hrss-no-data">暂无数据</span>
        </el-collapse-item>
        <span v-if="attList.length == 0" class="hrss-no-data">暂无数据</span>
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
      activeNames: [],
      selectDatePopup: false,
      selectDate: "",
      dataSlots: [],
      slotsSelect: [],
      personal: {},
      prdType: "ATT",
      attList: []
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
      this.getAttList();
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
    getAttList() {
      let p = {
        PRD_TYPE: this.prdType,
        CALPRDID: this.slotsSelect[0].CAL_PRD_ID
      };
      PAYROLL_SELECT(p).then(res => {
        if (res.status == "0") {
          this.attList = res.JsonData[0].SECTIONS;
          this.activeNames = [];
          this.attList.forEach(e => {
            this.activeNames.push(e.SECTIONS_CD);
          });
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

<style>
</style>