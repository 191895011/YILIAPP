<template>
	<div class="agentorder">
		<div class="agentorder-navbar">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="tab-notice">处理中的工单</mt-tab-item>
			  <mt-tab-item id="tab-notice2">已办结的工单</mt-tab-item>
			</mt-navbar>
		</div>
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="tab-notice">
			<div class="order-box">
				<div class="orderInfo" >
					<div class="yuan bluelan"></div>
					<ul>
						<li class="orderTitle">工单标题（工单标题）<i class="el-icon-arrow-right"></i></li>
						<li class="orderdata">
							<span style="width: 50%;float: left;">工单处理人：张三</span>
							<span style="width: 50%;float: left;">工单状态：升级处理</span>
						</li>
						<li class="orderdata" style="padding:.2rem 0 .3rem">
							<span style="width: 50%;float: left;">问题类型：业务咨询</span>
							<span style="width: 50%;float: left;">问题分类：薪酬类</span>
						</li>
						<li class="orderTime">发起时间：2018-12-24</li>
					</ul>
					 <!-- <span class="no-data" v-if="noticeList.length == 0">暂无数据</span> -->	
				</div>
			</div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="tab-notice2">
			  <div class="order-box">
			  	<div class="orderInfo" >
			  		<div class="yuan bluelan"></div>
			  		<ul>
			  			<li class="orderTitle">工单标题2（工单标题）<i class="el-icon-arrow-right"></i></li>
			  			<li class="orderdata">
			  				<span style="width: 50%;float: left;">工单处理人：李四</span>
			  				<span style="width: 50%;float: left;">工单状态：升级处理</span>
			  			</li>
			  			<li class="orderdata" style="padding:.2rem 0 .3rem">
			  				<span style="width: 50%;float: left;">问题类型：业务咨询</span>
			  				<span style="width: 50%;float: left;">问题分类：薪酬类</span>
			  			</li>
			  			<li class="orderTime">发起时间：2018-12-24</li>
			  		</ul>
			  		 <!-- <span class="no-data" v-if="noticeList.length == 0">暂无数据</span> -->	
			  	</div>
			  </div>
			 <!-- <span class="no-data" v-if="notice2List.length == 0">暂无数据</span> -->
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	export default {
		data(){
		  return {
			selected: "tab-notice",
			noticeList: [],
			notice2List: []
		  };
		},
		methods: {
			
		}
	}
</script>

<style>
	.agentorder {
		overflow: hidden;
		max-height: 100%;
		position: relative;
		
	}
	.agentorder .mint-tab-container {
		overflow: hidden;
		position: relative;
		overflow-y: scroll;
		max-height: 93vh;
	}
	.agentorder-navbar {
	  padding: 10px 15px 0;
	  background: #007bfe;
	}
	.agentorder-navbar .el-input__inner {
	  height: 34px;
	}
	.agentorder-navbar .el-input__icon {
	  line-height: 34px;
	}
	.agentorder-navbar .mint-navbar {
	  background-color: transparent;
	}
	.agentorder-navbar .mint-tab-item-label {
	  font-size: 15px;
	}
	.agentorder-navbar .mint-navbar .mint-tab-item {
	  height: 21px;
	  color: rgba(255, 255, 255, 1);
	  font-family: PingFang-SC-Medium;
	  font-weight: 500;
	  line-height: 21px;
	  padding: 20px 0 0 0;
	  margin-bottom: 0px;
	}
	.agentorder-navbar .mint-navbar .mint-tab-item.is-selected {
	  border-bottom: 3px solid rgba(255, 255, 255, 1);
	  font-family: PingFang-SC-Bold;
	  font-weight: bold;
	}
	.show-list {
	  padding-top: 15px;
	  height: 55px;
	  margin-left: 10px;
	  border-bottom: 1px solid #eeeeee;
	}
	.show-list .show-title {
	  display: block;
	  height: 21px;
	  font-size: 15px;
	  font-family: PingFang-SC-Medium;
	  font-weight: 500;
	  color: rgba(102, 102, 102, 1);
	  line-height: 21px;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  max-width: 90%;
	}
	.show-list .show-date {
	  display: block;
	  height: 17px;
	  font-size: 12px;
	  font-family: PingFang-SC-Medium;
	  font-weight: 500;
	  color: rgba(153, 153, 153, 1);
	  line-height: 17px;
	}
	.no-data {
	  display: inherit;
	  margin-top: 10px;
	  text-align: center;
	}
	.order-box {
		padding: 10px;
		position: relative;
		margin-top: 6px;
	}
	.order-box .orderInfo{
		background: #fff;
		padding: 15px 25px 10px;
		text-align: left;
		font-size: 16px;
		color: #333;
		border-radius: 5px;
		font-weight: 500;
	}
	.order-box .orderInfo .yuan {
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background: #0094E2;
		position: absolute;
		left: .4rem;
		top: .52rem;
	}
	.order-box .orderInfo ul li {
		color: #666;
		font-size: 14px;
		font-weight: normal;
		overflow: hidden;
	}
	.order-box .orderInfo ul li:first-child {
		padding-bottom: .25rem;
		border-bottom: 1px solid #eee;
		width: 7.4rem;
		margin-left: -25px;
		padding-left: 25px;
		color: #333;
		font-size: 16px;
		text-align: left;
	}
	.order-box .orderInfo ul li.orderdata {
		padding-top: .3rem;
	}
	.order-box .orderInfo ul li.orderTime {
		width: 120%;
		padding-top: .2rem;
		font-size: 13px;
		color: #999999;
		margin-left: -25px;
		padding-left: 25px;
		border-top: 1px solid #eee;
		
	}
	.order-box .orderTitle .el-icon-arrow-right {
		font-size: 16px;
		color: #666;
		position: absolute;
		left: 6.8rem;
		top: .52rem;
	}
</style>
