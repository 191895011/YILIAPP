<template>
	<div class="IncomeProve-info">
		<div class="ProveMsg-box">
			<h2>{{approvalTitle}}</h2>
			<div class="ProveMsg-cont">
				<!--发起人信息-->
				<el-collapse v-model="activeNames" @change="handleChange">
					<div>
						<div class="yuan"></div>
						<el-collapse-item title="发起人信息" :name="1">
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright">员工ID</div>
								</el-col>
								<el-col :span="15">
									<div v-html="launchid" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright">员工姓名</div>
								</el-col>
								<el-col :span="15">
									<div v-html="launchnames" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright">员工电话</div>
								</el-col>
								<el-col :span="15">
									<div class="grid-content  textleft">
										<div v-html="launchphones" class="grid-content  textleft"></div>
									</div>
								</el-col>
							</el-row>	
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright">发起人所在单位</div>
								</el-col>
								<el-col :span="15">
									<div v-html="launchcompany" class="grid-content  textleft "></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright">发起人所在部门</div>
								</el-col>
								<el-col :span="15">
									<div v-html="launchdepartment" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright">发起人所属职务</div>
								</el-col>
								<el-col :span="15">
									<div v-html="launchbusiness" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
						</el-collapse-item>
					</div>
				</el-collapse>
				<!--证明明细-->
				<el-collapse id="waring" v-model="activeNames" @change="handleChange">
					<div>
						<div class="yuan"></div>
						<el-collapse-item title="收入证明申请" :name="2">
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright marleft">证明类型</div>
								</el-col>
								<el-col :span="15">
									<div class="grid-content  textleft">公司模板</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>收入类型</div>
								</el-col>
								<el-col :span="15">
									<div class="grid-content  textleft textTop" @click="popupVisible1=true">
										<el-input class="selectInput" placeholder="请选择" v-model="input101" :name="input102" readonly unselectable="on">
											<i slot="suffix" class="el-input__icon el-icon-caret-bottom"></i>
										</el-input>
									</div>
									        <mt-popup v-model="popupVisible1" closeOnClickModal="true" position="bottom">
										                <mt-picker :slots="dataSlots11" @change="onValuesChange1" showToolbar value-key="value">
											                    <div class="picker-toolbar-title">
												                        <div class="usi-btn-cancel" @click="popupVisible1=!popupVisible1">取消</div>
												                        <div class="">{{message}}</div>
												                        <div class="usi-btn-sure" @click="sureBtn11">确定</div>
												                </div>
											             </mt-picker>
										     </mt-popup>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright  waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>公章类型</div>
								</el-col>
								<el-col :span="15">
									<div class="grid-content  textleft searchIpt textTop">
										<el-input class="searchType" v-model="state2" placeholder="请输入内容" :name="state22" readonly unselectable="on">
											<i class="el-icon-search el-input__icon"
											 slot="suffix" style="font-size: 20px;line-height: 0;" @click="dialogTableVisible2=true"></i>
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-dialog title="公章列表" :visible.sync="dialogTableVisible2" :fullscreen="true">
							    <el-input v-model="sealCont" placeholder="请输入公司名称的关键字" style="width: 70%;border:1px solid #d8d8d8;margin:.5rem 1.2rem;">
								  <i class="el-icon-search el-input__icon"
									 slot="suffix" style="font-size: 20px;line-height: 0;" @click="handleIconClick2"></i>
								</el-input>
							  <el-table :data="gridData2" style="width: 100%" height="550">
								<el-table-column property="seal_cd" label="公章类型" width="90"></el-table-column>
								<el-table-column property="sealdescr" label="描述" width="220"></el-table-column>
								<el-table-column  label="操作" width="60">
									<template slot-scope="scope">
									    <el-button type="primary" size="small" @click='editShow2(scope.row,scope.$index)'>选择</el-button>
									</template>
								</el-table-column>
							  </el-table>
							</el-dialog>
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>申请数量(份)</div>
								</el-col>
								<el-col :span="15">
									<div class="grid-content  textleft textTop">
										<el-input v-model="COUNT1" placeholder="请输入内容">
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="9">
									<div id="incomTime" class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>收入期间</div>
								</el-col>
								<el-col :span="7" style="padding-right: 5px;">
									<div class="grid-content  textleft searchIpt textTop starTime">
										<el-input class="searchId" v-model="state1" placeholder="开始日期">
											<i class="el-icon-search el-input__icon"
											 slot="suffix" style="font-size: 20px;line-height: 0;" @click="handleIconClick1"></i>
										</el-input>
									</div>
								</el-col>
								<el-col :span="1" style="padding: 0;">
									<div class="grid-content  textleft">至</div>
								</el-col>
								<el-col :span="7" style="padding-left: 5px;">
									<div class="grid-content  textleft searchIpt textTop endTime">
										<el-input class="searchId" v-model="state3" placeholder="结束日期">
											<i class="el-icon-search el-input__icon"
											 slot="suffix" style="font-size: 20px;line-height: 0;" @click="handleIconClick3"></i>
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-dialog title="期间列表" :visible.sync="dialogTableVisible" :fullscreen="true">
							  <el-table :data="gridData" style="width: 100%" height="650">
								<el-table-column property="CAL_PRD_ID" label="期间ID" width="110"></el-table-column>
								<el-table-column property="CAL_PRD_DESCR" label="描述" width="200"></el-table-column>
								<el-table-column  label="操作"  width="60">
									<template slot-scope="scope">
									    <el-button type="primary" size="small" @click='editShow(scope.row,scope.$index)'>选择</el-button>
									</template>
								</el-table-column>
							  </el-table>
							</el-dialog>
							<el-dialog title="期间列表" :visible.sync="dialogTableVisible3" :fullscreen="true">
							  <el-table :data="gridData3" style="width: 100%" height="650">
								<el-table-column property="CAL_PRD_ID" label="期间ID" width="110"></el-table-column>
								<el-table-column property="CAL_PRD_DESCR" label="描述" width="200"></el-table-column>
								<el-table-column  label="操作" width="60">
									<template slot-scope="scope">
									    <el-button type="primary" size="small" @click='editShow3(scope.row,scope.$index)'>选择</el-button>
									</template>
								</el-table-column>
							  </el-table>
							</el-dialog>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright marleft">累计收入(元)</div>
								</el-col>
								<el-col :span="15">
									<div v-html="YL_AMT" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>是否需要工资条凭证</div>
								</el-col>
								<el-col :span="15">
									<div class="grid-content  textleft textTop" @click="popupVisible3=true">
										<el-input class="selectInput" placeholder="请选择" v-model="input301" :name="input302" readonly unselectable="on">
											<i slot="suffix" class="el-input__icon el-icon-caret-bottom"></i>
										</el-input>
									</div>
									        <mt-popup v-model="popupVisible3" closeOnClickModal="true" position="bottom">
										                <mt-picker :slots="dataSlots3" @change="onValuesChange3" showToolbar value-key="value">
											                    <div class="picker-toolbar-title">
												                        <div class="usi-btn-cancel" @click="popupVisible3=!popupVisible3">取消</div>
												                        <div class="">{{message}}</div>
												                        <div class="usi-btn-sure" @click="sureBtn3">确定</div>
												                </div>
											             </mt-picker>
										     </mt-popup>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="9">
									<div class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>接收方式</div>
								</el-col>
								<el-col :span="15">
									<div class="grid-content  textleft textTop" @click="popupVisible2=true">
										<el-input class="selectInput" placeholder="请选择" v-model="input201" :name="input202" readonly unselectable="on">
											<i slot="suffix" class="el-input__icon el-icon-caret-bottom"></i>
										</el-input>
									</div>
									        <mt-popup v-model="popupVisible2" closeOnClickModal="true" position="bottom">
										                <mt-picker :slots="dataSlots2" @change="onValuesChange2" showToolbar value-key="value">
											                    <div class="picker-toolbar-title">
												                        <div class="usi-btn-cancel" @click="popupVisible2=!popupVisible2">取消</div>
												                        <div class="">{{message}}</div>
												                        <div class="usi-btn-sure" @click="sureBtn2">确定</div>
												                </div>
											             </mt-picker>
										     </mt-popup>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="9">
									<div id="useDetails" class="grid-content  textright"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>证明用途</div>
								</el-col>
								<el-col :span="15">
									<div class="grid-content  textleft textTop">
										<el-input v-model="YL_PURPOSE_DESCR" placeholder="请输入内容">
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-row :gutter="40" v-show="address">
								<el-col :span="9">
									<div id="addresss" class="grid-content  textright"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>领取地址</div>
								</el-col>
								<el-col :span="15">
									<div class="grid-content  textleft textTop">
										<el-input v-model="ADDRESS100" placeholder="请输入内容">
										</el-input>
									</div>
								</el-col>
							</el-row>
						</el-collapse-item>
					</div>
				</el-collapse>
				<el-collapse class="examineinfo" v-model="activeNames" @change="handleChange">
					<div>
						<div class="yuan"></div>
						<el-collapse-item title="提交备注" :name="5">

							<div id='opinions' class="navTitle-sl" v-show="isApper">
								<div>
									<el-input v-model="opinions" type="textarea" :autosize="{ minRows: 3, maxRows: 5}" placeholder="请输入内容">
									</el-input>
								</div>
							</div>
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
				<div class="grid-content  textleft" style="line-height: .6rem;color: #666666;">
					<p>注意：请点击"下一步"查看审批路径，如果路径正确，再点击"提交"按钮提交流程。如果路径不正确，将不会出现提交按钮，不能提交流程，请登陆“共享平台首页-问题咨询中心”提交问题工单或拨打人力共享客服热线
						400-816-7808进行问题反馈。</p>
				</div>
			</div>
			<div class="Bottom-box">
				<div class="bottom-btn" v-show="isApper">
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
	import { PERSONAL, FlowSelectDraft, TRANSACTION_NBR, FLOWVOID, EchainPreView, FILEUPLOAD, FlowSubmit, Magnifier, Select_Person_PayRoll,PayRoll_Period} from "@/api/index.js"
	export default {
		name: "IncomeProve",
		data() {
			return {
				approvalTitle: "收入证明开具",
				activeNames: [1, 2, 3, 5, 6],
				showToolbar: true,
				message: "请选择",
				isParty:false,
				dialogTableVisible:false,
				dialogTableVisible2:false,
				dialogTableVisible3:false,
				popupVisible: false,
				popupVisible1: false,
				popupVisible2: false,
				popupVisible3: false,
				workflowShow: false,
				isApper:true,
				opinions:'',
				launchid:'',
				launchnames:'',
				launchbusiness:'',
				launchdepartment:'',
				launchcompany:'',
				launchphones:'',
				names:'',
				department:'',
				phones:'',
				input101:'',
				input102:'',
				input103:'',
				input104:'',
				input201:'',
				input202:'',
				input203:'',
				input204:'',
				input301:'',
				input302:'',
				input303:'',
				input304:'',
				upList2: [],
				textarea2: '',
				IncomeProveType: '',
				dataSlots2: [{
					values: Valuelist.ReceiveType
				}],
				dataSlots3: [{
					values: Valuelist.isPay
				}],
				dataSlots11: [{
					values: Valuelist.Incomtype
				}],
				state1: '',
				state2:'',
				state3:'',
				state22:'',
				value:null,
				ReteatTime:'',
				anchor:[],
				gridData:[],
				gridData2:[],
				gridData3:[],
				filedata:[],
				disabledShow:false,
				isSubimt: false,
				isNext: true,
				requestor:'',
				submit_dttm:'',
				COMMENTS:'',
				examineList:[],
				useDetail:false,
				address:false,
				COUNT1:'',
				YL_AMT:'',
				YL_PURPOSE_DESCR:'',
				ADDRESS100:'',
				sealCont:''
				

			}

		},
		created() {
			PERSONAL().then(res => {
				this.launchid = res.EMPLID;
				this.launchnames = res.NAME;
				this.launchbusiness = res.POSITION_DESCR;
				this.launchdepartment = res.TAX_AGENCY_DESC;
				this.launchcompany = res.DEPT_DESCR;
				this.launchphones = res.PHONE;
			})
			let NBR = this.$route.query.TRANSACTION_NBR;
			if (NBR) {
				this.TRANSACTION_NBR = NBR;
				let params2 = {
					EOAWPRCS_ID: "YL_SSC_AWE_018",
					TRANSACTION_NBR: NBR,
					ENCRYPT: "0",
					DARFT:'Y'
				};
				FlowSelectDraft(params2).then(res => {
					var DATA1 = res.DATA[0].FIELDS;
					var DATA2 = res.DATA[1].FIELDS;
					var files = res.FILEDATA.FILELIST;
					if (DATA1 != "") {
						this.state1 = DATA1[3].VALUE.TEXT;
						this.state3 = DATA1[4].VALUE.TEXT;
						this.input101 = DATA2[0].VALUE.TEXT;
						this.input102 = DATA2[0].VALUE.VALUE;
						this.state2 = DATA1[1].VALUE.TEXT;
						this.state22 = DATA1[1].VALUE.VALUE;
						this.COUNT1 = DATA1[2].VALUE.TEXT;
						this.input301 = DATA2[2].VALUE.TEXT;
						this.input302 = DATA2[2].VALUE.VALUE;
						this.YL_AMT = DATA2[1].VALUE.TEXT;
						this.input201 = DATA1[5].VALUE.TEXT;
						this.input202 = DATA1[5].VALUE.VALUE;
						this.YL_PURPOSE_DESCR = DATA1[6].VALUE.TEXT;
						this.ADDRESS100 =  DATA1[7].VALUE.TEXT;
						if(this.input202=='B'){
							this.address = true;
						}
					}
				});
			} else {
				let params3 = {
					EOAWPRCS_ID: 'YL_SSC_AWE_018'
				};
				TRANSACTION_NBR(params3).then(res => {
					console.log(res)
					this.mustFiles = true;
					if (res.status == '0') {
						this.TRANSACTION_NBR = res.TRANSACTION_NBR;
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
				let params4 = {
					EOAWPRCS_ID:'YL_SSC_AWE_018',
					TRANSACTION_NBR:this.TRANSACTION_NBR,
				};
				FLOWVOID(params4).then(res => {
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
					let params5 = {
						EOAWPRCS_ID: "YL_SSC_AWE_018",
						TRANSACTION_NBR: this.TRANSACTION_NBR,
						DARFT: types,
						JSON_DATA: this.JSON_DATA,
						COMMENT:this.opinions
					};
					EchainPreView(params5).then(res => {
						var msg = res.msg;
						if(res.status=='0'){
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
				this.$options.methods.keepInfo.bind(this)()
				if(types=="Y"){
					this.setCookie('activeName','D')
				}else{
					this.setCookie('activeName','A')
				}
				var that = this;
				if (that.isSure) {
					var params7 = {
						EOAWPRCS_ID: "YL_SSC_AWE_018",
						TRANSACTION_NBR: that.TRANSACTION_NBR,
						DARFT: types,
						JSON_DATA: that.JSON_DATA,
						COMMENT:that.opinions
					}
					FlowSubmit(params7).then(res => {
						var msg = res.msg;
						if (res.status == '0') {
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
					.catch(error => {
						console.log(error)
					})
				}
			},
			keepInfo(){
				//判断必填项
				this.JSON_DATA = [
					{
						FIELDNAME: 'EMPLID',
						VALUE: this.launchid
					},
					{
						FIELDNAME: 'PHONE',
						VALUE: this.launchphones
					},
					{
						FIELDNAME: 'YL_INCOME_TEMP',
						VALUE: 'A'
					},
					{
						FIELDNAME: 'YL_SEAL_TYPE',
						VALUE: this.state22
					},
					{
						FIELDNAME: 'YL_INCOME_TYPE',
						VALUE: this.input102
					},
					{
						FIELDNAME: 'COUNT1',
						VALUE: this.COUNT1
					},
					{
						FIELDNAME: 'GC_CAL_PRD_BGN',
						VALUE: this.state1
					},
					{
						FIELDNAME: 'GC_CAL_PRD_END',
						VALUE: this.state3
					},
					{
						FIELDNAME: 'YL_GET_WAY',
						VALUE: this.input202
					},
					{
						FIELDNAME: 'YESNO_DROPDOWN',
						VALUE: this.input302
					},
					{
						FIELDNAME: 'YL_AMT',
						VALUE: this.YL_AMT
					},
					{
						FIELDNAME: 'YL_PURPOSE_DESCR',
						VALUE: this.YL_PURPOSE_DESCR
					},
					{
						FIELDNAME: 'ADDRESS100',
						VALUE: this.ADDRESS100
					},

				]
				let warings = document.getElementById('waring').getElementsByClassName('waring');
				if (warings.length > 0) {
					for (var i = 0; i < warings.length; i++) {
						warings[i].style.color = "#303133";
						var inputVal = warings[i].parentNode.nextElementSibling.getElementsByTagName('input')[0];
						if (inputVal.value == '') {
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
				let starTime = document.getElementsByClassName('starTime')[0].getElementsByTagName('input')[0];
				let endTime = document.getElementsByClassName('endTime')[0].getElementsByTagName('input')[0];
				let incomTime = document.getElementById('incomTime');
				incomTime.style.color = "#303133";
				if (starTime.value == ''||endTime.value == '') {
					this.isSure = false;
					document.getElementById('waring').scrollIntoView({
						behavior: "instant",
						block: "center",
						inline: "nearest"
					});
					incomTime.style.color = "red";
					this.$messagebox.alert('收入期间的开始或结束日期不能为空');
					return false
				} else {
					this.isSure = true
				}
			},
			editShow(row,_index){
				this.state1 = row.CAL_PRD_ID;
				this.dialogTableVisible = false;
				if(new Date(this.state1)>new Date(this.state3)){
					this.$messagebox.alert('开始日期不能大于结束日期','提示')
					.then(()=>{
						this.state1 = ''
					})
				}
				if(this.state3!=''){
					this.$options.methods.searchPay.bind(this)()
				}
			},
			editShow3(row,_index){
				this.state3 = row.CAL_PRD_ID;
				this.dialogTableVisible3 = false;
				if(new Date(this.state1)>new Date(this.state3)){
					this.$messagebox.alert('结束日期必须大于开始日期','提示')
					.then(()=>{
						this.state3 = ''
					})
				}
				if(this.state1!=''){
					this.$options.methods.searchPay.bind(this)()
				}
			},		
			editShow2(row,_index){
				console.log(row)
				this.state22 = row.seal_cd;
				this.state2 = row.sealdescr;
				this.dialogTableVisible2 = false;
				this.sealCont = '';
			},
			searchPay(){
				let params9 = {
					GC_CAL_PRD_BGN:this.state1,
					GC_CAL_PRD_END:this.state3,
					YL_INCOME_TYPE:'A',
				};
				Select_Person_PayRoll(params9).then(res => {
					console.log(res)
					if(res.status=='0'){
						this.YL_AMT = res.YL_AMT
					}
				})
			},
			openpicker2() {
				this.$refs.pickerDate.show();
			},
			onValuesChange1(picker, values) {
				if (values[0] > values[1]) {
					picker.setSlotValue(1, values[0].value);
				}
				this.input103 = values[0].value;
				this.input104 = values[0].type;
			},
			sureBtn11(){
				this.popupVisible1 = !this.popupVisible1;
				this.input101 = this.input103;
				this.input102 = this.input104;
			},
			onValuesChange2(picker, values) {
				if (values[0] > values[1]) {
					picker.setSlotValue(1, values[0].value);
				}
				this.input203 = values[0].value;
				this.input204 = values[0].type;
			},
			onValuesChange3(picker, values) {
				if (values[0] > values[1]) {
					picker.setSlotValue(1, values[0].value);
				}
				this.input303 = values[0].value;
				this.input304 = values[0].type;
			},
			sureBtn2(){
				this.popupVisible2 = !this.popupVisible2;
				this.input201 = this.input203;
				this.input202 = this.input204;
				if (this.input202 == 'B') {
					this.address = true
					document.getElementById('addresss').classList.add('waring');
				}else{
					this.address = false
					document.getElementById('addresss').classList.remove('waring');
				}
			},
			sureBtn3(){
				this.popupVisible3 = !this.popupVisible3;
				this.input301 = this.input303;
				this.input302 = this.input304;
			},
			handleIconClick1() {
				let params10 = {PRD_TYPE:'018'};
				PayRoll_Period(params10).then(res=> {
					var arr1 =[];
					if(res.JsonData!=""){
						this.dialogTableVisible = true;
						arr1.push(res.JsonData);
						this.gridData = arr1[0];
					}else{
						this.$confirm('未匹配到对应期间ID，请认真输入', '', {
							confirmButtonText: '确定',
							showCancelButton:false,
							type: 'warning',
							center: true
						}).then(() => {
							 this.state1='';
						})
					}
						
				 }); 
			},			
			handleIconClick3() {
				let params11 = {PRD_TYPE:'018'};
				PayRoll_Period(params11).then(res=> {
					var arr1 =[];
					if(res.JsonData!=""){
						this.dialogTableVisible3 = true;
						arr1.push(res.JsonData);
						this.gridData3 = arr1[0];
					}else{
						this.$confirm('未匹配到对应期间ID，请认真输入', '', {
							confirmButtonText: '确定',
							showCancelButton:false,
							type: 'warning',
							center: true
						}).then(() => {
							 this.state3='';
						})
					}
						
				 }); 
			},
			handleIconClick2() {
				if(this.sealCont!=''){
					let params12 = {
						SECURITY:'N',
						DATA_TYPE:'SEAL',
						KEYWORDS:this.sealCont
					 };
					Magnifier(params12).then(res=> {
						var arr1 =[];
						if(res.jsonData!=""){
							this.dialogTableVisible2 = true;
							arr1.push(res.jsonData);
							this.gridData2 = arr1[0];
						}else{
							this.$confirm('未匹配到对应的公章类型，请认真输入', '', {
								confirmButtonText: '确定',
								showCancelButton:false,
								type: 'warning',
								center: true
							}).then(() => {
								 this.sealCont='';
							})
						}
							
					 }); 
				}else{
					this.$confirm('请输入公司名称的关键字再进行搜索', '', {
						confirmButtonText: '确定',
						showCancelButton:false,
						type: 'warning',
						center: true
					})
				}
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

	.IncomeProve-info .ProveMsg-box {
		padding-top: .8rem;
		margin-bottom: 1.3rem;
	}

	.IncomeProve-info .ProveMsg-box h2 {
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

	.IncomeProve-info .el-collapse-item__wrap {
		padding: 0 10px;
	}

	.IncomeProve-info .examineinfo .bkong {
		width: 1.3rem;
		text-align: right;
		float: left;
	}

	.IncomeProve-info .ProveMsg-box .textleft {
		text-align:left ;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-size: 14px;
	}

	.IncomeProve-info .ProveMsg-box .textright {
		text-align: left;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		color: #666666;
		font-size: 14px;
	}
	.IncomeProve-info .ProveMsg-box .marleft{
		padding-left: 7px;
	}
	.IncomeProve-info .textTop {
		text-align: right;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		color: #666666;
		font-size: 14px;
		position: relative;
		top: -0.14rem;
	}
	.IncomeProve-info .ProveMsg-box .textbottom {

	}

	.IncomeProve-info .ProveMsg-box .el-row {
		padding-top: 0.25rem;
		line-height: .35rem;
	}

	.IncomeProve-info .examineinfo .el-row {
		padding-top: 0.25rem;
		line-height: .5rem;
	}

	.IncomeProve-info .ProveMsg-box .ProveMsg-cont {
		padding: 10px;
	}

	.IncomeProve-info .ProveMsg-box .el-collapse-item__header {
		font-size: 18px;
	}

	.IncomeProve-info .ProveMsg-box .el-icon-title-left {
		width: .17rem;
		height: .4rem;
		background: #1CAAFE;
	}

	.IncomeProve-info .ProveMsg-box .navTitle {
		float: left;
		margin-top: .29rem;
		margin-right: .1rem;
	}

	.el-message-box {
		width: 80%;
	}

	.IncomeProve-info .ProveMsg-box .remarkinfo .el-collapse-item__wrap {
		margin-left: 2%;
		border-bottom: none;
		width: 96%;
	}

	.IncomeProve-info .ProveMsg-box .el-collapse-item__content {
		padding: 0.1rem 0 0.4rem;
	}

	.el-select .el-input.is-focus .el-input__inner {
		border-color: #d8d8d8;
	}

	.IncomeProve-info .ProveMsg-box .el-input__inner {
		width: 100%;
		height: .6rem;
		line-height: .3rem;
		padding: 0;
		font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
		border: none;
		border-bottom: 1px solid #d8d8d8;
		border-radius: 0;
	}
	.IncomeProve-info .ProveMsg-box .searchType .el-input__inner{
		padding-right: .6rem;
	}
	.IncomeProve-info .selectInput .el-input__icon {
		text-align: right;
	}

	.IncomeProve-info .searchIpt .el-select {
		width: 100%;
	}

	.IncomeProve-info .searchIpt .el-icon-search {
		font-size: 16px;
	}

	.IncomeProve-info .ProveMsg-box .el-upload-list__item .el-icon-upload-success {
		display: none;
	}

	.IncomeProve-info .ProveMsg-box .el-progress__text {
		margin-right: .5rem;
		display: none;
	}

	.IncomeProve-info .ProveMsg-box .el-collapse {
		border-bottom: none;
		border-top: none;
		position: relative;
		margin-bottom: 10px;
	}

	.IncomeProve-info .ProveMsg-box .el-collapse-item__header {
		color: #333;
		padding: 10px;
		height: .7rem;
		padding-left: 28px;
	}

	.IncomeProve-info .ProveMsg-box .el-collapse-item__header:last-child {
		border-bottom: 1px solid #eeee;
	}

	.IncomeProve-info .ProveMsg-box .el-upload-list__item .el-icon-close {
		display: inline-block;
	}

	.el-upload-list__item.is-success:focus:not(:hover) .el-icon-close-tip {
		display: none;
	}

	.IncomeProve-info .ProveMsg-box .el-button--small {
		font-size: 14px;
		padding: .1rem;
	}

	.IncomeProve-info .ProveMsg-box .examineinfo .el-row {
		font-size: 14px;
		padding: .3rem;
	}

	.IncomeProve-info .ProveMsg-box .examineinfo .el-row .el-col {
		border: 1px solid #67c23a;
		padding: .1rem .2rem;
		border-radius: .05rem;
		position: relative;
	}

	.IncomeProve-info .ProveMsg-box .navTitle-sl {
		padding: .3rem;
		font-size: 16px;
		padding-bottom: 1.5rem;
	}

	.el-select-dropdown {
		position: absolute;
		left: 3%;
	}

	.IncomeProve-info .ProveMsg-box .navTitle-sl .el-icon-title-left {
		width: 0.17rem;
		height: .35rem;
		background: #13CE66;
		float: left;
		margin-top: .08rem;
	}

	.IncomeProve-info .ProveMsg-box .examineinfo .remarks {
		float: left;
		padding: .1rem;
		font-size: 13px;
		color: #606266;
	}

	.IncomeProve-info .ProveMsg-box .examineinfo .kong {
		margin-left: .2rem;
	}

	.IncomeProve-info .ProveMsg-box .navTitle-sl {
		padding: .3rem;
		font-size: 16px;
	}

	.IncomeProve-info .ProveMsg-box .navTitle-sl .el-icon-title-left {
		width: 0.17rem;
		height: .35rem;
		background: #13CE66;
		float: left;
		margin-top: .08rem;
	}

	.IncomeProve-info .ProveMsg-box .statusImg {
		position: absolute;
		right: .3rem;
		top: 0.62rem;
	}

	.IncomeProve-info .ProveMsg-box .statusImg img {
		width: 1.5rem;
	}

	.IncomeProve-info .ProveMsg-box .test_triangle_border .popup span {
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

	.IncomeProve-info .ProveMsg-box .test_triangle_border .popup em {
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

	.IncomeProve-info .picker-toolbar-title {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		color: #000;

	}
	.IncomeProve-info  .imgName {
		padding-bottom: .3rem;
	}
	.IncomeProve-info .usi-btn-sure {
		color: #42b983;
		font-size: 14px;
	}

	.IncomeProve-info .usi-btn-cancel {
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

	.IncomeProve-info  .picker-slot {
		font-size: 16px;
	}
	.IncomeProve-info  .Bottom-box {
		width: 100%;
		text-align: center;
		position: fixed;
		bottom: 0;
		background-color: #FFFFFF;
		padding: 10px;
		padding-left: 0;
	}
	.IncomeProve-info .Bottom-box .bottom-btn {
		
	}
	.IncomeProve-info .el-button--medium {
		width: 29%;
		padding: 10px 0;
		font-size: 14px;
		border-radius: 4px;
	}
	
	.IncomeProve-info .fileList .el-row {
		padding-bottom: .25rem;
	}
	.IncomeProve-info .el-button--small {
		font-size: 14px;
		padding: .1rem;
	}
	
	.IncomeProve-info .addNewfile .el-button {
		padding: 0.04rem .48rem;
	}
	
	.IncomeProve-info .addNewfile .el-icon-plus {
		font-size: 18px;
		color: #fff;
	}
	
	.IncomeProve-info .addNewfile .textright {
		text-align: left;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		color: #666666;
		font-size: 14px;
		padding-top: .08rem;
	}
	.IncomeProve-info .addNewfilelist textarea.el-textarea__inner {
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
