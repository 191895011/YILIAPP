<template>
    <div class="hrss-per attendance-info">
        <div class="hrss-search">
            <h2 style="margin-bottom:0">我的纳税单位</h2>
        </div>
        <div class="hrss-per-main">
            <el-collapse v-model="activeNames">
                <el-collapse-item title="基本信息" name="1">
                    <ul class="hrss-item-ul">
                        <li>
                            <span>员工 ID</span>
                            <span class="hrss-item-right">{{personal.EMPLID}}</span>
                        </li>
                        <li>
                            <span>姓名</span>
                            <span class="hrss-item-right">{{personal.NAME}}</span>
                        </li>
                        <li>
                            <span>纳税单位名称</span>
                            <span class="hrss-item-right">{{personal.TAX_AGENCY_DESC}}</span>
                        </li>
                        <li>
                            <span>统一社会信用代码</span>
                            <span class="hrss-item-right">{{personal.USCC}}</span>
                        </li>
                    </ul>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
import "@/assets/styles/perFunc.css";
export default {
  data() {
    return {
      activeNames: ["1"],
      personal: {}
    };
  },
  created() {
    this.personal = JSON.parse(sessionStorage.getItem("userInfo"));
    console.log(this.personal);
  }
};
</script>

<style>
</style>