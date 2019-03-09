<template>
	<div class="Agency-info">
		<div class="Agency-box">
			<div class="Agency-search">
				<div style="color: #FFFFFF;text-align: left;padding: 0.23rem .28rem;font-size: 17px;font-weight: bold;">流程中心</div>
				<router-link to="/searchpage">
					<el-button>搜索</el-button>
					<div class="fenge"></div>
				</router-link>
			</div>
			<div class="Agency-tab">

				<i class="rightpoint"><img style="width: .35rem;" src="@/assets/img/pointR.png" alt=""></i>
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="发起新流程" name="1">
						<div class="newWorklow-box">
							<el-collapse v-model="activeNames"  v-for="(list,index) in jsonData" :key="index">
							  <div class="fang"></div>
							  <el-collapse-item :title="list.CLASS_DESCR" :name="index" >
								<div v-for="(lists,index) in (list.DATALIST)" :key="index">
									<div  @click="jumpPage(lists.EOAWPRCS_ID)">
										<el-row :gutter="10">
										  <el-col :span="4"><div class="iconimg"><img :src="lists.ICON_URL" alt=""></div></el-col>
										  <el-col :span="16"><div class="textleft">{{lists.NAME}}</div></el-col>
										  <el-col :span="4"><div class=""><i class="el-icon-arrow-right"></i></div></el-col>
										</el-row>
									</div>
								</div>
								<div></div>
							  </el-collapse-item>
							</el-collapse>
						</div>
					</el-tab-pane>		
					<el-tab-pane label="待办流程" name="B">
						<div v-if="agencyList==''" style="margin-top: 3rem;">暂无数据</div>
						<div class="apply-box"  v-for="(item,index) in agencyList" :key="index">
							<div class="applyInfo" @click="jumpDetail(item.EOAWPRCS_ID,item.TRANSACTION_NBR)">
								<div class="yuan"></div>
								<ul>
									<li class="applyName">{{item.eoawprcs_descr}}（{{item.applyer_name}}）<i class="el-icon-arrow-right"></i></li>
									<li class="applydata"><span style="padding:0 .1rem">发起人：</span>{{item.requestor_name}}</li>
									<li class="applydata"><span style="padding:0 .1rem">发起时间：</span>{{item.datetime}}</li>
								</ul>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="审批中流程" name="C" >
						<div v-if="agencyList==''" style="margin-top: 3rem;">暂无数据</div>
						<div class="apply-box" v-for="(item2,index) in agencyList" :key="index">
							<div class="applyInfo" @click="jumpDetail(item2.EOAWPRCS_ID,item2.TRANSACTION_NBR)">
								<div class="yuan bluelan"></div>
								<ul>
									<li class="applyName">{{item2.eoawprcs_descr}}（{{item2.applyer_name}}）<i class="el-icon-arrow-right"></i></li>
									<li class="applydata"><span style="padding:0 .1rem">发起人：</span>{{item2.requestor_name}}</li>
									<li class="applydata"><span style="padding:0 .1rem">发起时间：</span>{{item2.datetime}}</li>
								</ul>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="已结束流程" name="E">
						<div v-if="agencyList==''" style="margin-top: 3rem;">暂无数据</div>
						<div class="apply-box" v-for="(item3,index) in agencyList" :key="index">
							<div class="applyInfo" @click="jumpDetail(item3.EOAWPRCS_ID,item3.TRANSACTION_NBR)">
								<div class="yuan bluelan"></div>
								<ul style="margin: 0;padding: 0;">
									<li class="applyName" >{{item3.eoawprcs_descr}}（{{item3.applyer_name}}）<i class="el-icon-arrow-right"></i></li>
									<li class="applydata"><span style="padding-right:.1rem">发起人：</span>{{item3.requestor_name}}</li>
									<li class="applydata"><span style="padding-right:.1rem">发起时间：</span>{{item3.datetime}}</li>
								</ul>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="我的申请" name="A">
						<div v-if="agencyList==''" style="margin-top: 3rem;">暂无数据</div>
						<div class="apply-box" v-for="(item4,index) in agencyList" :key="index">
							<div class="applyInfo" @click="jumpDetail(item4.EOAWPRCS_ID,item4.TRANSACTION_NBR)">
								<div class="yuan bluelan"></div>
								<ul>
									<li class="applyName">{{item4.eoawprcs_descr}}（{{item4.applyer_name}}）<i class="el-icon-arrow-right"></i></li>
									<li class="applydata"><span style="padding:0 .1rem">发起人：</span>{{item4.requestor_name}}</li>
									<li class="applydata"><span style="padding:0 .1rem">发起时间：</span>{{item4.datetime}}</li>
								</ul>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="草稿" name="D">
						<div v-if="agencyList==''" style="margin-top: 3rem;">暂无数据</div>
						<div class="apply-box" v-for="(item5,index) in agencyList" :key="index">
							<div class="applyInfo" @click="jumpDetail2(item5.EOAWPRCS_ID,item5.TRANSACTION_NBR)">
								<div class="yuan bluelan"></div>
								<ul>
									<li class="applyName">{{item5.eoawprcs_descr}}（{{item5.applyer_name}}）<i class="el-icon-arrow-right"></i></li>
									<li class="applydata"><span style="padding:0 .1rem">发起人：</span>{{item5.requestor_name}}</li>
									<li class="applydata"><span style="padding:0 .1rem">发起时间：</span>{{item5.datetime}}</li>
								</ul>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>
<script>
	import { WorkflowLaunch, FlowSelect } from "@/api/index.js";
	export default {
		name: "AgencyMsg",
		data() {
			return {
				 active:'processconter',
				 activeName:"1",
				 activeNames: [0],
				 agencyList:[],
				 eoawprcsid:'',
				 trnumberr:'',
				 jsonData:[],
			}
		},
		created() {
			if(this.getCookie('activeName')){
				this.activeName = this.getCookie('activeName');
				let loadingInstance1 = this.$loading({
					body: true,
					text: "读取中",
					spinner: "el-icon-loading",
					background: "rgba(255, 255, 255, 0.8)"
				});
				let nowTime = new Date();
				let params = {
					TOKEN: this.getCookie('token'),
					OPRID: this.getCookie('oprid'),
					TYPE:this.getCookie('activeName'),
					KEYWORDS:"",
					BGN_DT:this.getDates(nowTime).beginTime,
					END_DT:this.getDates(nowTime).endTime
				};
				let params2 = {
					TOKEN: this.getCookie('token'),
					OPRID: this.getCookie('oprid'),
				};
				if(this.getCookie('activeName')=="1"){
					WorkflowLaunch(params2)
					.then((response) =>{
						if(response.status=="0"){
							this.jsonData = response.JsonData;
							loadingInstance1.close();		
							console.log(this.jsonData)
						}
					})
					.catch(function(error) {
						console.log(error);
					});	
				}else{
					this.agencyList = [];
					FlowSelect(params)
					.then((response) =>{
						if(response.status=="0"){
							loadingInstance1.close();								
							this.agencyList = response.provinceList;
						}
					})
					.catch(function(error) {
						console.log(error);
					});
				}
			}else{
				let loadingInstance1 = this.$loading({
					body: true,
					text: "读取中",
					spinner: "el-icon-loading",
					background: "rgba(255, 255, 255, 0.8)"
				});
				let params3 = {
					TOKEN: this.getCookie('token'),
					OPRID: this.getCookie('oprid'),
				};
				WorkflowLaunch(params3)
				.then((response) => {
					loadingInstance1.close();	
					if(response.status=="0"){	
						this.jsonData = response.JsonData;
					}
					
				})
				.catch(function(error) {
					
				});	
			}
			

		},
// 		mounted(){
// 			let params = {
// 				TOKEN: this.getCookie('token'),
// 				OPRID: this.getCookie('oprid'),
// 			};
// 			this.$http.post('http://1.180.3.61:8766/SSCDEV/PSIGW/RESTListeningConnector/PSFT_HR/FlowBacklog.v1/', params)
// 			.then(function(response) {
// 					console.log(response)
// 				if(response.body.status=="0"){
// 					setTimeout(()=>{
// 						console.log(response)
// 						var items = document.getElementsByClassName('el-tabs__item');
// 						for(var i=0;i<items.length;i++){
// 							var itemid = document.getElementById('tab-1');
// 							var div = document.createElement("div"); 
// 							div.innerHTML = '<div class="el-badge item"><sup class="el-badge__content el-badge__content--undefined">99+</sup></div>';
// 							items[i].append(div)
// 						}
// 						console.log(this.agencyList)
// 					})
// 				}
// 			})
// 			.catch(function(error) {
// 				console.log(error);
// 			});
// 
// 		},
		methods: {
			jumpPage(type){
				//跳转到离退流程发起页
				if(type=="YL_SSC_AWE_TER"){
					this.$router.push('/retreatflow')
				}
				//跳转到在职证明开具页
				if(type=="YL_SSC_AWE_007"){
					this.$router.push('/workingprove')
				}
				//跳转到收入证明开具页
				if(type=="YL_SSC_AWE_018"){
					this.$router.push('/incomeprove')
				}
				//跳转到银行账户修改
				if(type=="YL_SSC_AWE_006"){
					this.$router.push('/editbankaccount')
				}
			},
			handleClick(tab,event){
				let loadingInstance1 = this.$loading({
					body: true,
					text: "读取中",
					spinner: "el-icon-loading",
					background: "rgba(255, 255, 255, 0.8)"
				});
				let nowTime = new Date();
				let params = {
					TOKEN: this.getCookie('token'),
					OPRID: this.getCookie('oprid'),
					TYPE:tab.name,
					KEYWORDS:"",
					BGN_DT:this.getDates(nowTime).beginTime,
					END_DT:this.getDates(nowTime).endTime
				};
				let params2 = {
					TOKEN: this.getCookie('token'),
					OPRID: this.getCookie('oprid'),
				};
				this.setCookie('activeName',tab.name);
				if(tab.name=="1"){
					WorkflowLaunch(params2)
					.then((response) =>{
						if(response.status=="0"){
							this.jsonData = response.JsonData;
							loadingInstance1.close();	
						}
					})
					.catch(function(error) {
						console.log(error);
					});	
				}else{
					this.agencyList = [];
					FlowSelect(params)
					.then((response) =>{
						if(response.status=="0"){
							loadingInstance1.close();								
							this.agencyList = response.provinceList;
							console.log(this.agencyList)
						}
					})
					.catch(function(error) {
						console.log(error);
					});
				}
			},
			jumpDetail(eoawprcsid,trnumberr){
				 this.$router.push({path:'/approval',query:{EOAWPRCS_ID:eoawprcsid,TRANSACTION_NBR:trnumberr,OPRID:this.getCookie('oprid'),ENCRYPT:'0',DARFT:'Y',TOKEN:this.getCookie('token')}})
			},
			jumpDetail2(eoawprcsid,trnumberr){
				if(eoawprcsid == "YL_SSC_AWE_TER"){
					this.$router.push({path:'/retreatflow',query:{EOAWPRCS_ID:eoawprcsid,TRANSACTION_NBR:trnumberr,OPRID:this.getCookie('oprid'),ENCRYPT:'0',DARFT:'Y',TOKEN:this.getCookie('token')}})
				}
				if(eoawprcsid == "YL_SSC_AWE_007"){
					this.$router.push({path:'/workingprove',query:{EOAWPRCS_ID:eoawprcsid,TRANSACTION_NBR:trnumberr,OPRID:this.getCookie('oprid'),ENCRYPT:'0',DARFT:'Y',TOKEN:this.getCookie('token')}})
				}
				if(eoawprcsid == "YL_SSC_AWE_018"){
					this.$router.push({path:'/incomeprove',query:{EOAWPRCS_ID:eoawprcsid,TRANSACTION_NBR:trnumberr,OPRID:this.getCookie('oprid'),ENCRYPT:'0',DARFT:'Y',TOKEN:this.getCookie('token')}})
				}
				if(eoawprcsid == "YL_SSC_AWE_006"){
					this.$router.push({path:'/editbankaccount',query:{EOAWPRCS_ID:eoawprcsid,TRANSACTION_NBR:trnumberr,OPRID:this.getCookie('oprid'),ENCRYPT:'0',DARFT:'Y',TOKEN:this.getCookie('token')}})
				}
			},
			getDates(val){					
				let y = val.getFullYear();
				let y2 = y-1;
				let m = val.getMonth() + 1;
				let m2 = 12-(m+1);
				m = m < 10 ? '0' + m : m;
				m2 = m2 < 10 ? '0' + m2 : m2;
				let d = val.getDate();
				d = d < 10 ? ('0' + d) : d;
				return {
					beginTime:y2 + '-' + m2 + '-' + d,
					endTime:y + '-' + m + '-' + d
				}
			}
		},
		watch:{
			 active: function (val, oldVal) {
			  // 这里就可以通过 val 的值变更来确定去向
			  switch(val){
				case 'homepage':
				  this.$router.push('/');
				break;
				case 'processconter':
				  this.$router.push('/myagency');
				break;
				case 'question':
				
				break;
			  }
			}
		}
	}
</script>

<style>
	.Agency-info .el-tabs__content {
		overflow: hidden;
		overflow-y: scroll;
		position: relative;
		max-height: 73vh;
	}

	.Agency-info .Agency-search {
		width: 100%;
		position: relative;
		text-align: center;
		background: #007BFE;
	}

	.Agency-info .Agency-box .Agency-tab {
		font-weight: bolder;
		font-size: 19px;
		color: #736b6b;
		width: 100%;
		margin: auto;
		text-align: center;
		position: relative;
		top: -1px;
		background-color: #007BFE;
		z-index: 999;
	}

	.Agency-info .Agency-box .Agency-cont {
		width: 100%;
	}

	.Agency-info .Agency-box .fenge {
		width: 100%;
		border-bottom: 1px solid transparent;
		box-shadow: 0px 2px 5px #b7b3b3;
	}

	.Agency-info .Agency-box .el-button {
		width: 92.5%;
		border-radius: .2rem;
		color: #999;
		letter-spacing: 10px;
		border-radius: 5px;
		margin: .18rem 0 .2rem;
	}

	.Agency-info .Agency-box .el-tabs__nav {
		width: 100%;
	}

	.Agency-info .Agency-box .el-tabs__item {
		text-align: center;
		font-size: 16px;
		padding: 0;
		margin: 0 .18rem;
		font-weight: 100;
	}

	.Agency-info .Agency-box .el-tabs__header {
		margin: 0;
	}

	.Agency-info .Agency-box .el-tabs__nav-wrap {
		padding: 0 .4rem;
	}

	.Agency-info .Agency-box .el-tabs__content {
		background-color: #ECF1F4;
	}

	.Agency-info .Agency-box .el-tabs__item.is-active {
		border-bottom: 3px solid #FFFFFF;
	}

	.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
		margin-left: 0;
	}

	.Agency-info .Agency-box .ageny-search {
		position: relative;
		right: 0;

	}

	.Agency-info .Agency-box .el-tabs__nav-scroll {
		overflow: hidden;
		overflow-x: scroll;
	}

	.Agency-info .Agency-box .el-tabs__nav-scroll::-webkit-scrollbar {
		display: none;
	}

	.Agency-info .Agency-box .el-tabs__active-bar {
		display: none;
	}

	.Agency-info .Agency-box .rightpoint {
		position: absolute;
		right: .02rem;
		top: .23rem;
		color: #68bede;
		font-size: 15px;
	}
	.Agency-info .Agency-box .apply-box .el-icon-arrow-right {
		position: absolute;
		left: 6.5rem;
		top: .62rem;
		font-size: 26px;
		color: #b7b7b7;
		font-weight: bold;
	}

	.Agency-info .el-step__icon.is-text {
		border-radius: 50%;
		border: 1px solid;
		border-color: inherit;
		background: #ffa84f;
	}

	.Agency-info .el-step__icon-inner {
		color: #ffa84f;
	}

	.Agency-info .apply-box {
		padding: 10px;
		position: relative;
		
	}
	.Agency-info .apply-box:last-child{
		padding-bottom: 30px;
	}
	.Agency-info .applyInfo {
		background: #fff;
		padding: 15px 25px;
		text-align: left;
		font-size: 16px;
		color: #333;
		border-radius: 5px;
		font-weight: 500;
	}

	.Agency-info .applyInfo ul li {
		margin-bottom: .3rem;
	}
	.Agency-info .applyInfo ul li:first-child {
		padding-bottom: .3rem;
		border-bottom: 1px solid #eee;
		width: 7.4rem;
		margin-left: -25px;
		padding-left: 25px
	}
	.Agency-info .applyInfo .applydata {
		color: #999;
		font-size: 14px;
		font-weight: normal;
	}

	.Agency-info .yuan {
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background: #f7c538;
		position: absolute;
		left: .4rem;
		top: .52rem;
	}

	.Agency-info .lvse {
		background: green;
	}

	.Agency-info .bluelan {
		background: #0094E2;
	}

	/* 	.Agency-bottom ul li {
		width: 25%;
		float:left;
		padding: .2rem 0;
		color: #8a8a8a;
	}
	.Agency-bottom ul li img{
		width: .6rem;
		margin-bottom: .2rem;
	}
	
	
	.Agency-bottom ul .is-active {
		color: #409EFF;
	} */
	.Agency-info .newWorklow-box {
		padding: 10px 0;
	}
	.Agency-info .el-collapse-item__header{
		font-size: 16px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		padding-left: 15px;
	}
	.Agency-info .el-collapse-item__wrap{
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.Agency-info .textleft {
		text-align: left;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-size: 16px;
		font-weight: normal;
	}
	
	.Agency-info .textright {
		text-align: right;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-size: 16px;
	}
	.Agency-info .newWorklow-box .el-icon-date{
		font-size: 25px;
		color: #72b9ff;
	}
	
	
	.Agency-info .newWorklow-box .el-row{
		margin: .3rem 0;
	}
	.Agency-info .iconimg img{
		width: .52rem;
	}

	.Agency-info  .el-tabs__item{
		font-weight: 100;
		color: #fff;
	}
	.Agency-info .el-tabs__item.is-active{
		color: #FFFFFF;
		font-weight: bolder;
	}
	.Agency-info .el-collapse {
		margin-bottom: 10px;
		position: relative;
	}
	.Agency-info .fang{
		width: 5px;
		height: .94rem;
		background: #007BFE;
		position: absolute;
		top: 0;
	}
	.Agency-info .Agency-box .el-collapse-item__header.is-active{
		border-bottom: 1px solid #EEEEEE;
	}
	.Agency-info .Agency-box .applyName .el-icon-arrow-right{
		font-size: 16px;
		color: #999999;
		position: absolute;
		left: 6.8rem;
		top: .52rem;
	}

	.Agency-info .Agency-box .el-badge {
		position: absolute;
		top: -.3rem;
		right: -.36rem;
		vertical-align: middle;
		display: inline-block;
		z-index: 99999999;
		margin-left: -.3rem;
	}
	.Agency-info .Agency-box .el-tabs__item{
		position: relative;
	}
	#tab-1 .el-badge {
		display: none;
	}
	.Agency-info .Agency-box .el-badge__content {
		background-color: #f56c6c;
		border-radius: 10px;
		color: #fff;
		display: inline-block;
		font-size: 12px;
		height: 15px;
		line-height: 16px;
		padding: 0 5px;
		text-align: center;
		white-space: nowrap;
		border: none;
	}
</style>
