<template>
	<div class="EditbankMsg-info">
		<div class="ProveMsg-box">
			<h2>{{approvalTitle}}</h2>
			<div class="ProveMsg-cont">		
				<!--银行明细-->
				<el-collapse id="waring" v-model="activeNames" @change="handleChange">
					<div>
						<div class="yuan"></div>
						<el-collapse-item title="银行明细" :name="1">
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright  waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>员工ID</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft searchIpt textTop">
										<el-input class="searchId" v-model="state1" placeholder="请输入内容" readonly unselectable="on">
											<i class="el-icon-search el-input__icon"
											 slot="suffix" style="font-size: 20px;line-height: 0;" @click="dialogTableVisible=true"></i>
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-dialog title="员工列表" :visible.sync="dialogTableVisible" :fullscreen="true">
							 <el-input v-model="bankCont" placeholder="请输入内容" style="width: 70%;border:1px solid #d8d8d8;margin:.5rem 1.2rem;">
								<i class="el-icon-search el-input__icon"
								  slot="suffix" style="font-size: 20px;line-height: 0;" @click="handleIconClick1"></i>
							 </el-input>
							  <el-table :data="gridData" style="width: 100%" height="550">
								<el-table-column type="expand">
								  <template slot-scope="props">
									<el-form label-position="left" inline class="demo-table-expand">
									  <el-form-item label="员工ID">
										<span>{{ props.row.emplid }}</span>
									  </el-form-item>
									  <el-form-item label="员工姓名">
										<span>{{ props.row.name }}</span>
									  </el-form-item>
									  <el-form-item label="政治面貌">
										<span>{{ props.row.yl_political }}</span>
									  </el-form-item>
									  <el-form-item label="电话">
										<span>{{ props.row.phone }}</span>
									  </el-form-item>
									  <el-form-item label="所属部门">
										<span>{{ props.row.dept }}</span>
									  </el-form-item>
									  <el-form-item label="职务名称">
										<span>{{ props.row.position }}</span>
									  </el-form-item>
									</el-form>
								  </template>
								</el-table-column>
								<el-table-column property="emplid" label="员工ID" width="90"></el-table-column>
								<el-table-column property="name" label="员工姓名" width="175"></el-table-column>
								
								<el-table-column  label="操作"  width="60">
									<template slot-scope="scope">
									    <el-button type="primary" size="small" @click='editShow(scope.row,scope.$index)'>选择</el-button>
									</template>
								</el-table-column>
							  </el-table>
							</el-dialog>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content textrigh marleft">员工姓名</div>
								</el-col>
								<el-col :span="14">
									<div v-html="names" class="grid-content  textleft">李文豪</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content textright marleft">账户ID</div>
								</el-col>
								<el-col :span="14">
									<div v-html="accoutid" class="grid-content  textleft">1</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content textright marleft">状态</div>
								</el-col>
								<el-col :span="14">
									<div v-html="perstatus" :name="perstatus2" class="grid-content  textleft">有效</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright  waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>国家/地区代码</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft searchIpt textTop">
										<el-input class="searchType" v-model="input101" placeholder="请输入内容" :name="input102" readonly unselectable="on">
											<i class="el-icon-search el-input__icon"
											 slot="suffix" style="font-size: 20px;line-height: 0;" @click="dialogTableVisible2=true"></i>
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-dialog title="国家/地区代码列表" :visible.sync="dialogTableVisible2" :fullscreen="true">
								    <el-input v-model="countryType" placeholder="请输入内容" style="width: 70%;border:1px solid #d8d8d8;margin:.5rem 1.2rem;">
									<i class="el-icon-search el-input__icon"
									  slot="suffix" style="font-size: 20px;line-height: 0;" @click="handleIconClick2"></i>
									</el-input>
								  <el-table :data="gridData2" style="width: 100%" height="550">
									<el-table-column property="type" label="国家/地区" width="90"></el-table-column>
									<el-table-column property="value" label="描述" width="220"></el-table-column>
									<el-table-column  label="操作"  width="60">
										<template slot-scope="scope">
											<el-button type="primary" size="small" @click='editShow2(scope.row,scope.$index)'>选择</el-button>
										</template>
									</el-table-column>
								  </el-table>
							</el-dialog>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright  waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>银行分行ID</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft searchIpt textTop">
										<el-input class="searchType" v-model="input201" placeholder="请输入内容" :name="input202" readonly unselectable="on">
											<i class="el-icon-search el-input__icon"
											 slot="suffix" style="font-size: 20px;line-height: 0;" @click="dialogTableVisible3=true"></i>
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-dialog title="银行分行ID列表" :visible.sync="dialogTableVisible3" :fullscreen="true">
							  <el-input v-model="bankId" placeholder="请输入内容" style="width: 70%;border:1px solid #d8d8d8;margin:.5rem 1.2rem;">
							    <i class="el-icon-search el-input__icon"
							      slot="suffix" style="font-size: 20px;line-height: 0;" @click="handleIconClick3"></i>
							  </el-input>
							  <el-table :data="gridData3" style="width: 100%" height="550">
								<el-table-column property="branch_cd" label="银行分行ID" width="90"></el-table-column>
								<el-table-column property="branch_descr" label="描述" width="220"></el-table-column>
								<el-table-column  label="操作" width="60">
									<template slot-scope="scope">
									    <el-button type="primary" size="small" @click='editShow3(scope.row,scope.$index)'>选择</el-button>
									</template>
								</el-table-column>
							  </el-table>
							</el-dialog>
<!-- 							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">银行名称</div>
								</el-col>
								<el-col :span="14">
									<div v-html="bankname" class="grid-content  textleft">建设</div>
								</el-col>
							</el-row> -->
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>账号</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft textTop">
										<el-input v-model="accoutNum" placeholder="请输入账号">
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content textright marleft">账户名称</div>
								</el-col>
								<el-col :span="14">
									<div v-html="accountname" class="grid-content  textleft">张</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright  waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>货币代码</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft searchIpt textTop">
										<el-input class="searchType" v-model="input301" placeholder="请输入内容" :name="input302" readonly unselectable="on">
											<i class="el-icon-search el-input__icon"
											 slot="suffix" style="font-size: 20px;line-height: 0;" @click="dialogTableVisible4=true"></i>
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-dialog title="货币代码列表" :visible.sync="dialogTableVisible4" :fullscreen="true">
							  <el-input v-model="moneyType"  placeholder="请输入内容" style="width: 70%;border:1px solid #d8d8d8;margin:.5rem 1.2rem;">
							    <i class="el-icon-search el-input__icon"
								  slot="suffix" style="font-size: 20px;line-height: 0;" @click="handleIconClick4"></i>
							  </el-input>
							  <el-table :data="gridData4" style="width: 100%" height="550">
								<el-table-column property="type" label="货币代码" width="90"></el-table-column>
								<el-table-column property="value" label="描述" width="220"></el-table-column>
								<el-table-column  label="操作" width="60">
									<template slot-scope="scope">
									    <el-button type="primary" size="small" @click='editShow4(scope.row,scope.$index)'>选择</el-button>
									</template>
								</el-table-column>
							  </el-table>
							</el-dialog>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright  waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>州/省</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft searchIpt textTop">
										<el-input class="searchType" v-model="input401" placeholder="请输入内容" :name="input402" readonly unselectable="on">
											<i class="el-icon-search el-input__icon"
											 slot="suffix" style="font-size: 20px;line-height: 0;" @click="handleIconClick5"></i>
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-dialog title="州/省列表" :visible.sync="dialogTableVisible5" :fullscreen="true">
							  <el-table :data="gridData5" style="width: 100%" height="650">
								<el-table-column property="id" label="州/省ID" width="90"></el-table-column>
								<el-table-column property="value" label="描述" width="220"></el-table-column>
								<el-table-column  label="操作" width="60">
									<template slot-scope="scope">
									    <el-button type="primary" size="small" @click='editShow5(scope.row,scope.$index)'>选择</el-button>
									</template>
								</el-table-column>
							  </el-table>
							</el-dialog>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright  waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>城市</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft searchIpt textTop">
										<el-input class="searchType" v-model="input501" placeholder="请输入内容" :name="input502" readonly unselectable="on">
											<i class="el-icon-search el-input__icon"
											 slot="suffix" style="font-size: 20px;line-height: 0;" @click="handleIconClick6"></i>
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-dialog title="城市列表" :visible.sync="dialogTableVisible6" :fullscreen="true">
							  <el-table :data="gridData6" style="width: 100%" height="650">
								<el-table-column property="id" label="城市ID" width="90"></el-table-column>
								<el-table-column property="value" label="描述" width="220"></el-table-column>
								<el-table-column  label="操作"  width="60">
									<template slot-scope="scope">
									    <el-button type="primary" size="small" @click='editShow6(scope.row,scope.$index)'>选择</el-button>
									</template>
								</el-table-column>
							  </el-table>
							</el-dialog>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content textright marleft">汇入行CNAPS号(银联号)</div>
								</el-col>
								<el-col :span="14">
									<div v-html="GC_CNAPS_ACCT_NBR" class="grid-content  textleft">123</div>
								</el-col>
							</el-row>
						</el-collapse-item>
					</div>
				</el-collapse>			
				<!--流程列表-->
				<el-collapse v-show="workflowShow" class="examineinfo" v-model="activeNames" @change="handleChange">
					<div>
						<div class="yuan"></div>
						<el-collapse-item title="审批步骤" :name="6">
							<el-row>
								<el-col :span="24">
									<div class="test_triangle_border">
										<div class="popup">
											<span><em></em></span>
										</div>
									</div>
									<div><span class="bkong">发起人:</span><span class="kong"></span><span v-html="requestor"></span></div>
									<div><span class="bkong">发起角色:</span><span class="kong"></span>发起者</div>
									<div><span class="bkong">状态:</span><span class="kong"></span>已完成</div>
									<div><span class="bkong">发起时间:</span><span class="kong"></span><span v-html="submit_dttm"></span></div>
									<div><span class="bkong">备注:</span><span class="kong"></span><span v-html="COMMENTS"></span></div>
									<div  class="statusImg"><img src="@/assets/img/stara.png" alt=""></div>
								</el-col>
							</el-row>
							<el-row v-for="parsons in examineList">
								<el-col :span="24">
									<div class="test_triangle_border">
										<div class="popup">
											<span><em></em></span>
										</div>
									</div>
									<div><span class="bkong">审批人:</span><span class="kong"></span>{{parsons.approver_nm}}</div>
									<div><span class="bkong">审批角色:</span><span class="kong">{{parsons.rolename}}</span></div>
									<div><span class="bkong">状态:</span><span class="kong">{{parsons.status}}</span></div>
									<div><span class="bkong">审批时间:</span><span class="kong">{{parsons.datetime}}</span></div>
									<div><span class="bkong">审批意见:</span><span class="kong">{{parsons.comments}}</span></div>
									<div v-if="parsons.status=='待决'" class="statusImg"><img src="@/assets/img/eing.png" alt=""></div>
									<div v-if="parsons.status=='已批准'" class="statusImg"><img src="@/assets/img/eyes.png" alt=""></div>
									<div v-if="parsons.status=='已拒绝'" class="statusImg"><img src="@/assets/img/eno.png" alt=""></div>
									<div v-if="parsons.status=='未发送'" class="statusImg"><img src="@/assets/img/ewei.png" alt=""></div>
								</el-col>
				
							</el-row>
						</el-collapse-item>
					</div>
				</el-collapse>
				<el-collapse class="examineinfo" v-model="activeNames" @change="handleChange">
					<div>
						<div class="yuan"></div>
						<el-collapse-item title="提交备注" :name="5">
							<div id='opinions' class="navTitle-sl">
								<div>
									<el-input v-model="opinions" type="textarea" :autosize="{ minRows: 3, maxRows: 5}" placeholder="请输入内容">
									</el-input>
								</div>
							</div>
						</el-collapse-item>
					</div>
				</el-collapse>
				<div class="grid-content  textleft" style="line-height: .6rem;">
					<p>注意：请点击"下一步"查看审批路径，如果路径正确，再点击"提交"按钮提交流程。如果路径不正确，将不会出现提交按钮，不能提交流程，请登陆“共享平台首页-问题咨询中心”提交问题工单或拨打人力共享客服热线
						400-816-7808进行问题反馈。</p>
					
				</div>
			</div>
			<div class="Bottom-box">
				<div class="bottom-btn">
					<el-button type="primary" size="medium" @click="submitInfo('Y')">保存至草稿</el-button>
					<el-button v-show="isNext" type="primary" size="medium" @click="nextBtn('Y')">下一步</el-button>
					<el-button v-show="isSubimt" type="primary" size="medium" @click="submitInfo('N')">提交</el-button>
					<el-button type="primary" size="medium" @click="discard">废弃</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Valuelist from '@/assets/js/valueList'
	import { PERSONAL, FlowSelectDraft, TRANSACTION_NBR, FLOWVOID, EchainPreView, LOCATION, FlowSubmit, Magnifier, Change_Account,PayRoll_Period} from "@/api/index.js"
	export default {
		name: "EditbankMsg",
		data() {
			return {
				approvalTitle: "银行账户修改",
				activeNames: [1, 2, 3, 5, 6],
				showToolbar: true,
				message: "请选择",
				isParty:false,
				dialogTableVisible:false,
				dialogTableVisible2:false,
				dialogTableVisible3:false,
				dialogTableVisible4:false,
				dialogTableVisible5:false,
				dialogTableVisible6:false,
				workflowShow: false,
				opinions:'',
				input101:'',
				input102:'',
				input301:'',
				input302:'',
				input201:'',
				input202:'',
				input401:'',
				input402:'',
				input501:'',
				input502:'',
				upList2: [],
				textarea2: '',
				EditbankMsgType: '',
				state1: '',
				state2:'',
				state22:'',
				value:null,
				ReteatTime:'',
				anchor:[],
				gridData:[],
				gridData2:[],
				gridData3:[],
				gridData4:[],
				gridData5:[],
				gridData6:[],
				filedata:[],
				disabledShow:false,
				fileNames:'文件名',
				fileList: [],
				mustFiles:false,
				isWorktable1:false,
				isSubimt: false,
				isNext: true,
				requestor:'',
				submit_dttm:'',
				COMMENTS:'',
				examineList:[],
				names:'',
				accoutid:'',
				perstatus:'',
				perstatus2:'',
				phones:'',
				bankname:'',
				accountname:'',
				accoutNum:'',
				GC_CNAPS_ACCT_NBR:'',
				bankCont:'',
				countryType:'',
				bankId:'',
				moneyType:'',
				province:'',
				citys:''
			}

		},
		created() {
			let NBR = this.$route.query.TRANSACTION_NBR;
			if (NBR) {
				this.TRANSACTION_NBR = NBR;
				let params1 = {
						EOAWPRCS_ID: "YL_SSC_AWE_006",
						TRANSACTION_NBR: NBR,
						ENCRYPT: "0",
						DARFT:'Y'
					};
					FlowSelectDraft(params1).then(res => {	
						console.log(res)
						var DATA1 = res.DATA[0].FIELDS;
						if (DATA1 != "") {
							this.state1 = DATA1[0].VALUE.TEXT;
							this.names =  DATA1[6].VALUE.TEXT;
							this.accoutid = DATA1[1].VALUE.TEXT;
							this.perstatus = DATA1[2].VALUE.TEXT;
							this.perstatus2 = DATA1[2].VALUE.VALUE;
							this.input101 = DATA1[3].VALUE.TEXT;
							this.input102 = DATA1[3].VALUE.VALUE;
							this.input201 = DATA1[4].VALUE.TEXT;
							this.input202 = DATA1[4].VALUE.VALUE;
							this.input301 = DATA1[7].VALUE.TEXT;
							this.input302 = DATA1[7].VALUE.VALUE;
							this.input401 = DATA1[8].VALUE.TEXT;
							this.input402 = DATA1[8].VALUE.VALUE;
							this.input501 = DATA1[9].VALUE.TEXT;
							this.input502 = DATA1[9].VALUE.VALUE;
							this.accountname = DATA1[6].VALUE.TEXT;
							this.accoutNum = DATA1[5].VALUE.TEXT;
							this.GC_CNAPS_ACCT_NBR = DATA1[10].VALUE.TEXT;
						}
					});
			} else {
				let params2 = {
						TRANSACTION_NBR:'',
						EMPLID:''
					};
					Change_Account(params2).then(res => {
						console.log(res)
						if (res.status == '0') {
							this.TRANSACTION_NBR = res.TRANSACTION_NBR;
							this.state1 = res.jsonData.EMPLID;
							this.names = res.jsonData.ACCOUNT_NAME;
							this.accoutid = res.jsonData.ACCOUNT_ID;
							this.perstatus = res.jsonData.EFF_STATUS.TEXT;
							this.perstatus2 = res.jsonData.EFF_STATUS.VALUE;
							this.input101 = res.jsonData.COUNTRY_CD.TEXT;
							this.input102 = res.jsonData.COUNTRY_CD.VALUE;
							this.input201 = res.jsonData.BRANCH_EC_CD.TEXT;
							this.input202 = res.jsonData.BRANCH_EC_CD.VALUE;
							this.input301 = res.jsonData.CURRENCY_CD.TEXT;
							this.input302 = res.jsonData.CURRENCY_CD.VALUE;
							this.input401 = res.jsonData.STATE.TEXT;
							this.input402 = res.jsonData.STATE.VALUE;
							this.input501 = res.jsonData.CITY.VALUE;
							this.input502 = res.jsonData.CITY.TEXT;
							this.accountname = res.jsonData.ACCOUNT_NAME;
							this.accoutNum = res.jsonData.ACCOUNT_EC_ID;
							this.GC_CNAPS_ACCT_NBR = res.jsonData.GC_CNAPS_ACCT_NBR;
						}
						if (res.status == '1') {
							this.$messagebox.alert(res.msg).then(() => {
								this.$router.push('/myagency');
							})
						}
					});
			}
		},
		methods: {
			discard(){
				let params3 = {
					EOAWPRCS_ID:'YL_SSC_AWE_TER',
					TRANSACTION_NBR:this.TRANSACTION_NBR,
				};
				FLOWVOID(params3).then(res => {
					console.log(res)
					if(res.status=='0'){					
						this.$router.push('/myagency');
					}
				})
			},
			nextBtn(types){
				this.$options.methods.keepInfo.bind(this)()
				console.log(this.JSON_DATA)
				if (this.isSure) {
					this.isNext = false;
					this.isSubimt = true;
						var that = this;
						let params4 = {
							EOAWPRCS_ID: "YL_SSC_AWE_006",
							TRANSACTION_NBR: this.TRANSACTION_NBR,
							DARFT: types,
							JSON_DATA: this.JSON_DATA,
							COMMENT:this.opinions
						};
						EchainPreView(params4).then(res => {
							var msg = res.msg;
							if(res.status==0){
								console.log(res)
								this.workflowShow = true;
								this.requestor = res.WORKFLOW.requestor;
								this.submit_dttm = res.WORKFLOW.submit_dttm;
								this.COMMENTS = res.WORKFLOW.COMMENTS;
								this.examineList = res.WORKFLOW.echain;
							}else{
								this.$confirm(msg,'',{
									showCancelButton:false,
									type:'warning',
									center:true
								}).then(action => {
								
								});
							}
						})
					

				}
			},
			submitInfo(types) {
				this.$options.methods.keepInfo.bind(this)();
				if(types=="Y"){
					this.setCookie('activeName','D')
				}else{
					this.setCookie('activeName','A')
				}
				var that = this;
				if (that.isSure) {
					var params5 = {
						EOAWPRCS_ID: "YL_SSC_AWE_006",
						TRANSACTION_NBR: that.TRANSACTION_NBR,
						DARFT: types,
						JSON_DATA: that.JSON_DATA,
						COMMENT:that.opinions
					};
					FlowSubmit(params5).then(res => {
						var msg = res.msg;
						if (res.status == 0) {
							var that = this;
							that.$confirm(msg, '', {
								showCancelButton: false,
								type: 'success',
								center: true
							})
							.then(() => {

								 that.$router.push('/myagency')
							})
						} else {
							that.$confirm(msg, '', {
								showCancelButton: false,
								type: 'warning',
								center: true
							}).then(action => {
		
							});
						}
					})
				}
			},
			keepInfo(){
				//判断必填项
				this.JSON_DATA = [
					{
						FIELDNAME: 'EMPLID',
						VALUE: this.state1
					},
					{
						FIELDNAME: 'ACCOUNT_ID',
						VALUE: this.accoutid
					},
					{
						FIELDNAME: 'COUNTRY_CD',
						VALUE: this.input102
					},
					{
						FIELDNAME: 'BANK_CD',
						VALUE: '1000'
					},
					{
						FIELDNAME: 'BRANCH_EC_CD',
						VALUE: this.input202
					},
					{
						FIELDNAME: 'ACCOUNT_EC_ID',
						VALUE: this.accoutNum
					},
					{
						FIELDNAME: 'CURRENCY_CD',
						VALUE: this.input302
					},
					{
						FIELDNAME: 'ACCOUNT_NAME',
						VALUE: this.accountname
					},
					{
						FIELDNAME: 'STATE',
						VALUE: this.input402
					},
					{
						FIELDNAME: 'CITY',
						VALUE: this.input502
					},
					{
						FIELDNAME: 'GC_CNAPS_ACCT_NBR',
						VALUE: this.GC_CNAPS_ACCT_NBR
					},
					{
						FIELDNAME: 'ACCOUNT_NAME_AC',
						VALUE: 'N'
					},
					{
						FIELDNAME: 'EFF_STATUS',
						VALUE: this.perstatus2
					},
				]
				let warings = document.getElementById('waring').getElementsByClassName('waring');
				if (warings.length > 0) {
					for (var i = 0; i < warings.length; i++) {
						warings[i].style.color = "#303133";
						var inputVal = warings[i].parentNode.nextElementSibling.getElementsByTagName('input');
						if (inputVal[0].value == '') {
							this.isSure = false;
							document.getElementById('waring').scrollIntoView({
								behavior: "instant",
								block: "center",
								inline: "nearest"
							});
							warings[i].style.color = "red";
							this.$messagebox.alert('必填内容不能为空，请认真填写');
							return false
						} else {
							this.isSure = true
						}
					}
				}

			},
			editShow(row,_index){
				let params6 = {
					TRANSACTION_NBR:this.TRANSACTION_NBR,
					EMPLID: row.emplid
				};
				Change_Account(params6).then(res => {
					if (res.status == '0') {
						this.TRANSACTION_NBR = res.TRANSACTION_NBR;
						this.state1 = res.jsonData.EMPLID;
						this.names = res.jsonData.ACCOUNT_NAME;
						this.accoutid = res.jsonData.ACCOUNT_ID;
						this.perstatus = res.jsonData.EFF_STATUS.TEXT;
						this.perstatus2 = res.jsonData.EFF_STATUS.VALUE;	
						this.input101 = res.jsonData.COUNTRY_CD.TEXT;
						this.input102 = res.jsonData.COUNTRY_CD.VALUE;
						this.input201 = res.jsonData.BRANCH_EC_CD.TEXT;
						this.input202 = res.jsonData.BRANCH_EC_CD.VALUE;
						this.input301 = res.jsonData.CURRENCY_CD.TEXT;
						this.input302 = res.jsonData.CURRENCY_CD.VALUE;
						this.input401 = res.jsonData.STATE.TEXT;
						this.input402 = res.jsonData.STATE.VALUE;
						this.input501 = res.jsonData.CITY.VALUE;
						this.input502 = res.jsonData.CITY.TEXT;
						this.accountname = res.jsonData.ACCOUNT_NAME;
						this.accoutNum = res.jsonData.ACCOUNT_EC_ID;
						this.GC_CNAPS_ACCT_NBR = res.jsonData.GC_CNAPS_ACCT_NBR;				
						this.state1 = row.emplid;
						this.names = row.name;
						this.dialogTableVisible = false;
						this.bankCont='';
					}
				})
			},
			editShow2(row,_index){
				this.input101 = row.value;
				this.input102 = row.type;
				this.dialogTableVisible2 = false;
				this.moneyType = '';
				this.input201 = '';
				this.input401 = '';
				this.input501 = '';
			},
			editShow3(row,_index){
				this.input201 = row.branch_descr;
				this.input202 = row.branch_cd;
				this.dialogTableVisible3 = false;
				this.bankId = '';
			},
			editShow4(row,_index){
				this.input301 = row.value;
				this.input302 = row.type;
				this.dialogTableVisible4 = false;
				this.moneyType = '';
			},			
			editShow5(row,_index){
				this.input401 = row.value;
				this.input402 = row.id;
				this.dialogTableVisible5 = false;
				this.input501 = '';
			},
			editShow6(row,_index){
				this.input501 = row.value;
				this.input502 = row.id;
				this.dialogTableVisible6 = false;
			},
			handleIconClick1() {
				if(this.bankCont!=''){
					let params7 = {
						SECURITY:'T',
						DATA_TYPE:'EMPLOYEE',
						KEYWORDS:this.bankCont
					 };
					 Magnifier(params7).then(res => {
						var arr1 =[];
						if(res.jsonData!=""){
							arr1.push(res.jsonData);
							this.gridData = arr1[0];
						}else{
							this.$confirm('未匹配到对应员工ID，请认真输入', '', {
								confirmButtonText: '确定',
								showCancelButton:false,
								type: 'warning',
								center: true
							}).then(() => {
								 this.bankCont='';
							})
						}
							
					 }); 
				}else{
					this.$confirm('请输入员工ID或姓名的关键字再进行搜索', '', {
						confirmButtonText: '确定',
						showCancelButton:false,
						type: 'warning',
						center: true
					})
				}

			},
			handleIconClick2() {
				var loadingInstance11 = this.$loading({
					body: true,
					text: "搜索中",
					spinner: "el-icon-loading",
					background: "rgba(255, 255, 255, 0.8)"
				});
				setTimeout(()=>{
					loadingInstance11.close();
					 var keyWord = this.countryType;
      
				var fruitList =this.$options.methods.searchByIndexOf.bind(this)(keyWord, Valuelist.countryType);
					console.log(fruitList)
					this.gridData2 = fruitList
				},1000)
			},
			handleIconClick4() {
				var loadingInstance11 = this.$loading({
					body: true,
					text: "搜索中",
					spinner: "el-icon-loading",
					background: "rgba(255, 255, 255, 0.8)"
				});
				setTimeout(()=>{
					loadingInstance11.close();
					 var keyWord = this.moneyType;
      
				var fruitList =this.$options.methods.searchByIndexOf.bind(this)(keyWord, Valuelist.moneyType);
					console.log(fruitList)
					this.gridData4 = fruitList
				},1000)
			},
		    handleIconClick3(){
				if(this.bankId!=''){
					if(this.input102=='CHN'){
						let params8 = { 
							SECURITY:'N',
							DATA_TYPE:'BANK_CD',
							KEYWORDS:this.bankId
						 };
						Magnifier(params8).then(res => {
							var arr1 =[];
							if(res.jsonData!=""){
								arr1.push(res.jsonData);
								this.gridData3 = arr1[0];
							}else{
								this.$alert('未匹配到对应的银行ID，请重新输入', '提示', {
									confirmButtonText: '确定',
									showCancelButton:false,
									type: 'warning',
									center: true
								}).then(() => {
									
								})
							}
						 }); 
					}else{
						this.$alert('目前只支持国内银行的查询', '提示', {
							confirmButtonText: '确定',
							showCancelButton:false,
							type: 'warning',
							center: true
						}).then(() => {
							
						})
					}
				}else{
					this.$confirm('请输入银行分行ID或名称的关键字，再进行搜索', '', {
						confirmButtonText: '确定',
						showCancelButton:false,
						type: 'warning',
						center: true
					})	
				}
			},
			handleIconClick5(){
				if(this.input102=='CHN'){
					LOCATION().then(res => {
						this.dialogTableVisible5 = true;	 
						console.log(res)
						var arr1 =[];
						if(res.provinceList!=""){
							arr1.push(res.provinceList);
							this.gridData5 = arr1[0];
						}else{
							this.$alert('未匹配到对应的州/省ID或名称，请重新输入', '提示', {
								confirmButtonText: '确定',
								showCancelButton:false,
								type: 'warning',
								center: true
							}).then(() => {
								
							})
						}
					}); 
				}else{
					this.$alert('目前只支持国内省市的查询', '提示', {
						confirmButtonText: '确定',
						showCancelButton:false,
						type: 'warning',
						center: true
					}).then(() => {
						
					})	
				}
			},
			handleIconClick6(){
				if(this.input102=='CHN'){
					LOCATION().then(res => {
						this.dialogTableVisible6 = true;	 
						var arr1 =[];
						if(res.provinceList!=""){
							arr1=res.provinceList;
							console.log(arr1)
							for(var i=0;i<arr1.length;i++){
								if(this.input402 == arr1[i].id){
									console.log(arr1[i].id)
									this.gridData6 = arr1[i].cityList
								}
							}
							console.log(this.gridData6)
						}else{
							this.$alert('未匹配到对应的州/省ID或名称，请重新输入', '提示', {
								confirmButtonText: '确定',
								showCancelButton:false,
								type: 'warning',
								center: true
							}).then(() => {
								
							})
						}
							
					 }); 
				}else{
					this.$alert('目前只支持国内省市的查询', '提示', {
						confirmButtonText: '确定',
						showCancelButton:false,
						type: 'warning',
						center: true
					}).then(() => {
						
					})	
				}
			},
			searchByIndexOf(keyWord, list){
				if(!(list instanceof Array)){
					return ;
				}
				var len = list.length;
				var arr = [];
				for(var i=0;i<len;i++){
					//如果字符串中不包含目标字符会返回-1
					if(list[i].value.indexOf(keyWord)>=0||list[i].type.indexOf(keyWord)>=0){
						arr.push(list[i]);
					}
				}
				return arr;
			},
			handleChange() {

			},
		}

	}
</script>

<style>
	.my-autocomplete li {
		line-height: normal;
		padding: 7px;
	}

	.el-autocomplete-suggestion {
		border-radius: 0;
	}

	.my-autocomplete .name {
		text-overflow: ellipsis;
		overflow: hidden
	}

	.my-autocomplete .addr {
		color: #b4b4b4;
		font-size: 13px;
		margin-top: -0.05rem;
	}

	.el-autocomplete {
		width: 100%;
	}

	.my-autocomplete .highlighted .addr {
		color: #ddd;
	}

	.el-autocomplete-suggestion li {
		white-space: normal;
	}

	.EditbankMsg-info .ProveMsg-box {
		padding-top: .8rem;
		padding-bottom: 1.3rem;
	}

	.EditbankMsg-info .ProveMsg-box h2 {
		font-weight: bolder;
		font-size: 19px;
		color: #FFF;
		width: 100%;
		margin: auto;
		position: fixed;
		top: 0rem;
		background-color: #007BFE;
		z-index: 999;
		padding: 0.2rem .2rem;
	}

	.EditbankMsg-info .el-collapse-item__wrap {
		padding: 0 10px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.EditbankMsg-info .examineinfo .bkong {
		width: 1.3rem;
		text-align: right;
		float: left;
	}

	.EditbankMsg-info .ProveMsg-box .textleft {
		text-align:left ;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-size: 14px;
	}

	.EditbankMsg-info .ProveMsg-box .textright {
		text-align: left;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-size: 14px;
		color: #666666
	}
	.EditbankMsg-info .ProveMsg-box .marleft{
		padding-left: 7px;
	}
	.EditbankMsg-info .textTop {
		text-align: right;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		color: #666666;
		font-size: 14px;
		position: relative;
		top: -0.14rem;
	}
	.EditbankMsg-info .ProveMsg-box .textbottom {

	}

	.EditbankMsg-info .ProveMsg-box .el-row {
		padding-top: 0.25rem;
		line-height: .35rem;
	}

	.EditbankMsg-info .examineinfo .el-row {
		padding-top: 0.25rem;
		line-height: .5rem;
	}

	.EditbankMsg-info .ProveMsg-box .ProveMsg-cont {
		padding: 10px;
	}

	.EditbankMsg-info .ProveMsg-box .el-collapse-item__header {
		font-size: 18px;
	}

	.EditbankMsg-info .ProveMsg-box .el-icon-title-left {
		width: .17rem;
		height: .4rem;
		background: #1CAAFE;
	}

	.EditbankMsg-info .ProveMsg-box .navTitle {
		float: left;
		margin-top: .29rem;
		margin-right: .1rem;
	}

	.el-message-box {
		width: 80%;
	}

	.EditbankMsg-info .ProveMsg-box .remarkinfo .el-collapse-item__wrap {
		margin-left: 2%;
		border-bottom: none;
		width: 96%;
	}

	.EditbankMsg-info .ProveMsg-box .el-collapse-item__content {
		padding: 0.1rem 0 0.4rem;
	}

	.el-select .el-input.is-focus .el-input__inner {
		border-color: #d8d8d8;
	}

	.EditbankMsg-info .ProveMsg-box .el-input__inner {
		width: 100%;
		height: .6rem;
		line-height: .3rem;
		padding: 0;
		font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
		border: none;
		border-bottom: 1px solid #d8d8d8;
		border-radius: 0;
	}
	.EditbankMsg-info .ProveMsg-box .searchType .el-input__inner{
		padding-right: .6rem;
	}
	.EditbankMsg-info .selectInput .el-input__icon {
		text-align: right;
	}

	.EditbankMsg-info .searchIpt .el-select {
		width: 100%;
	}

	.EditbankMsg-info .searchIpt .el-icon-search {
		font-size: 16px;
	}

	.EditbankMsg-info .ProveMsg-box .el-upload-list__item .el-icon-upload-success {
		display: none;
	}

	.EditbankMsg-info .ProveMsg-box .el-progress__text {
		margin-right: .5rem;
		display: none;
	}

	.EditbankMsg-info .ProveMsg-box .el-collapse {
		border-bottom: none;
		border-top: none;
		position: relative;
		margin-bottom: 10px;
	}

	.EditbankMsg-info .ProveMsg-box .el-collapse-item__header {
		color: #333;
		padding: 10px;
		height: .7rem;
		padding-left: 28px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	.EditbankMsg-info .ProveMsg-box .el-collapse-item__header:last-child {
		border-bottom: 1px solid #eeee;
	}

	.EditbankMsg-info .ProveMsg-box .el-upload-list__item .el-icon-close {
		display: inline-block;
	}

	.el-upload-list__item.is-success:focus:not(:hover) .el-icon-close-tip {
		display: none;
	}

	.EditbankMsg-info .ProveMsg-box .el-button--small {
		font-size: 14px;
		padding: .1rem;
	}

	.EditbankMsg-info .ProveMsg-box .examineinfo .el-row {
		font-size: 14px;
		padding: .3rem;
	}

	.EditbankMsg-info .ProveMsg-box .examineinfo .el-row .el-col {
		border: 1px solid #67c23a;
		padding: .1rem .2rem;
		border-radius: .05rem;
		position: relative;
	}

	.EditbankMsg-info .ProveMsg-box .navTitle-sl {
		padding: .3rem;
		font-size: 16px;
		padding-bottom: 1.5rem;
	}

	.el-select-dropdown {
		position: absolute;
		left: 3%;
	}

	.EditbankMsg-info .ProveMsg-box .navTitle-sl .el-icon-title-left {
		width: 0.17rem;
		height: .35rem;
		background: #13CE66;
		float: left;
		margin-top: .08rem;
	}

	.EditbankMsg-info .ProveMsg-box .examineinfo .remarks {
		float: left;
		padding: .1rem;
		font-size: 13px;
		color: #606266;
	}

	.EditbankMsg-info .ProveMsg-box .examineinfo .kong {
		margin-left: .2rem;
	}

	.EditbankMsg-info .ProveMsg-box .navTitle-sl {
		padding: .3rem;
		font-size: 16px;
	}

	.EditbankMsg-info .ProveMsg-box .navTitle-sl .el-icon-title-left {
		width: 0.17rem;
		height: .35rem;
		background: #13CE66;
		float: left;
		margin-top: .08rem;
	}

	.EditbankMsg-info .ProveMsg-box .statusImg {
		position: absolute;
		right: .3rem;
		top: 0.62rem;
	}

	.EditbankMsg-info .ProveMsg-box .statusImg img {
		width: 1.5rem;
	}

	.EditbankMsg-info .ProveMsg-box .test_triangle_border .popup span {
		display: block;
		width: 0;
		height: 0;
		border-width: .15rem .2rem .15rem 0;
		border-style: solid;
		border-color: transparent #67c23a transparent transparent;
		position: absolute;
		top: 15%;
		left: 0;
		/* 三角形居中显示 */
		margin-left: -10px;
		/* 三角形居中显示 */
	}

	.EditbankMsg-info .ProveMsg-box .test_triangle_border .popup em {
		display: block;
		width: 0;
		height: 0;
		border-width: .15rem .2rem .15rem 0;
		border-style: solid;
		border-color: transparent #fff transparent transparent;
		position: absolute;
		top: -.15rem;
		left: 2px;
	}

	.EditbankMsg-info .picker-toolbar-title {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		color: #000;

	}
	.EditbankMsg-info  .imgName {
		padding-bottom: .3rem;
	}
	.EditbankMsg-info .usi-btn-sure {
		color: #42b983;
		font-size: 14px;
	}

	.EditbankMsg-info .usi-btn-cancel {
		color: #999;
		font-size: 14px;
	}

	.el-message-box__wrapper {
		width: 100%;
		height: 100%;
	}

	.mint-popup-bottom {
		width: 100%
	}

	.EditbankMsg-info  .picker-slot {
		font-size: 16px;
	}
	.EditbankMsg-info  .Bottom-box {
		width: 100%;
		text-align: center;
		position: fixed;
		bottom: 0;
		background-color: #FFFFFF;
		padding: 10px;
		padding-left: 0;
	}
	.EditbankMsg-info .Bottom-box .bottom-btn {
		
	}
	.EditbankMsg-info .el-button--medium {
		width: 29%;
		padding: 10px 0;
		font-size: 14px;
		border-radius: 4px;
	}
	
	.EditbankMsg-info .fileList .el-row {
		padding-bottom: .25rem;
	}
	.EditbankMsg-info .el-button--small {
		font-size: 14px;
		padding: .1rem;
	}
	
	.EditbankMsg-info .addNewfile .el-button {
		padding: 0.04rem .48rem;
	}
	
	.EditbankMsg-info .addNewfile .el-icon-plus {
		font-size: 18px;
		color: #fff;
	}
	
	.EditbankMsg-info .addNewfile .textright {
		text-align: right;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		color: #666666;
		font-size: 14px;
		padding-top: .08rem;
	}
	.EditbankMsg-info .addNewfilelist textarea.el-textarea__inner {
		border: none;
		border-bottom: 1px solid #d8d8d8;
		border-radius: 0;
		padding: 0;
		color: #666666;
		font-size: 14px;
		text-align: right;
		color: #303133;
		margin-top: .05rem;
	}
	.el-dialog{
		width: 98%;
	}
	.el-dialog__body{
		padding: 0;
	}
	  .demo-table-expand {
	    font-size: 0;
	  }
	  .demo-table-expand label {
	    width: 70px;
	    color: #99a9bf;
	  }
	  .demo-table-expand .el-form-item {
	    margin-right: 0;
	    margin-bottom: 0;
	    width: 100%;
	  }
	  .el-form-item__content {
	    line-height: 40px;
	    position: relative;
	    font-size: 14px;
	    word-break: normal;
	    width: 4rem;
	    display: block;
	    white-space: pre-wrap;
	    word-wrap: break-word;
	    overflow: hidden;
	}
	.yuan{
		width: 11px;
		height: 11px;
		background: #007BFE;
		border-radius: 50%;
		position: absolute;
		top: .43rem;
		left: 10px;
	}
	.el-textarea__inner{
		padding: 0;
	}
	.el-textarea__inner:hover{
		border-color: #eee;
	}
		.el-dialog.is-fullscreen {
		overflow: hidden;
	}
	.el-table--scrollable-x .el-table__body-wrapper {
		overflow: hidden;
		overflow-y:auto;
	}
	.el-dialog__wrapper{
		overflow: hidden;
	}
</style>
