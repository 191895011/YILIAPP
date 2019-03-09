<template>
	<div class="workingprove-info">
		<div class="ProveMsg-box">
			<h2>{{approvalTitle}}</h2>
			<div class="ProveMsg-cont">
				<!--发起人信息-->
				<el-collapse v-model="activeNames" @change="handleChange">
					<div>
						<div class="yuan"></div>
						<el-collapse-item title="基本信息" :name="1">
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">工单号</div>
								</el-col>
								<el-col :span="14">
									<div v-html="orderNum" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">提问人</div>
								</el-col>
								<el-col :span="14">
									<div v-html="questioner" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">联系电话</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft">
										<div v-html="phones" class="grid-content  textleft"></div>
									</div>
								</el-col>
							</el-row>	
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">职位名称</div>
								</el-col>
								<el-col :span="14">
									<div v-html="position" class="grid-content  textleft "></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">公司名称</div>
								</el-col>
								<el-col :span="14">
									<div v-html="company" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">工单状态</div>
								</el-col>
								<el-col :span="14">
									<div v-html="orderStatus" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">创建用户</div>
								</el-col>
								<el-col :span="14">
									<div v-html="creator" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">创建日期/时间</div>
								</el-col>
								<el-col :span="14">
									<div v-html="creatDate" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">最后处理日期/时间</div>
								</el-col>
								<el-col :span="14">
									<div v-html="lastproTime" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">工单处理人</div>
								</el-col>
								<el-col :span="14">
									<div v-html="orderDeal" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">工单等级</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft">一般</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">工单处理人角色</div>
								</el-col>
								<el-col :span="14">
									<div v-html="dealRole" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
						</el-collapse-item>
					</div>
				</el-collapse>
				<!--证明明细-->
				<el-collapse id="waring" v-model="activeNames" @change="handleChange">
					<div>
						<div class="yuan"></div>
						<el-collapse-item title="工单详情" :name="2">
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>问题类型</div>
								</el-col>
								<el-col :span="14">
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
							<el-row :gutter="40" v-show="quesclass">
								<el-col :span="10">
									<div id="question" class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>问题分类</div>
								</el-col>
								<el-col :span="14">
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
								<el-col :span="10">
									<div id="useDetails" class="grid-content textright marleft">其他联系电话</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft textTop">
										<el-input v-model="otherPhone"  placeholder="请输入内容">
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>工单标题</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft textTop">
										<el-input v-model="orderTitle" placeholder="请输入内容">
										</el-input>
									</div>
								</el-col>
							</el-row>
							
							<el-row :gutter="40" >
								<el-col :span="10">
									<div class="grid-content  textright"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>详细描述</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft textTop textTops">
										<el-input v-model="orderDes" type="textarea" :autosize="{ minRows: 2}"  placeholder="请输入内容">
										</el-input>
									</div>
								</el-col>
							</el-row>
						</el-collapse-item>
					</div>
				</el-collapse>
				<!-- 附件上传 -->
				<el-collapse v-model="activeNames" @change="handleChange">
					<div class="fileList" id="waring22">
						<div class="yuan"></div>
						<el-collapse-item title="材料补充" :name="3">
							<el-row :gutter="40" v-for="item in fileList">
								<el-col :span="10">
									<div class="grid-content  textright">{{item.DESCR}}</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft textbottom">
										<div class="imgName"><a class="fileUrl" :href="item.FILEPATH">{{item.ATTACHUSERFILE}}</a></div>
										<el-upload class="upload-demo" style="cursor:pointer;" :ref="item.FILESEQ" action="" :http-request="httpRequest"
										 :limit="1" :on-exceed="handleExceed" :name="item.DESCR" :before-remove="beforeRemove" :auto-upload="false">
											<el-button slot="trigger" size="small" type="primary">替换附件</el-button>
										</el-upload>
									</div>
								</el-col>
							</el-row>
							<el-row :gutter="40" class="addNewfile">
								<el-col :span="10">
									<div class="grid-content  textright">添加附件</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content textleft">
										<el-button @click="addNewfile" :disabled="disabledShow" slot="trigger" size="small" type="primary"><i class="el-icon-plus"></i></el-button>
									</div>
								</el-col>
							</el-row>
							<div class="newFilehtml" style="display: none;">
								<el-row :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE1" action="" :name="newFilename" :http-request="httpRequest" :limit="1"
											 :on-exceed="handleExceed" :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>
										</div>
									</el-col>
								</el-row>
								<el-row :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename2" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE2" action="" :name="newFilename2" :http-request="httpRequest" :limit="1"
											 :on-exceed="handleExceed" :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>
										</div>
									</el-col>
								</el-row>
								<el-row :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename3" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE3" action="" :name="newFilename3" :http-request="httpRequest" :limit="1"
											 :on-exceed="handleExceed" :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>
										</div>
									</el-col>
								</el-row>
								<el-row :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename4" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE4" action="" :name="newFilename4" :http-request="httpRequest" :limit="1"
											 :on-exceed="handleExceed" :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>
										</div>
									</el-col>
								</el-row>
								<el-row :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename5" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE5" action="" :name="newFilename5" :http-request="httpRequest" :limit="1"
											 :on-exceed="handleExceed" :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>
										</div>
									</el-col>
								</el-row>
								<el-row :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename6" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE6" action="" :name="newFilename6" :http-request="httpRequest" :limit="1"
											 :on-exceed="handleExceed" :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>
										</div>
									</el-col>
								</el-row>
								<el-row :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename7" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE7" action="" :name="newFilename7" :http-request="httpRequest" :limit="1"
											 :on-exceed="handleExceed" :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>
										</div>
									</el-col>
								</el-row>
								<el-row :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename8" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE8" action="" :name="newFilename8" :http-request="httpRequest" :limit="1"
											 :on-exceed="handleExceed" :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>
										</div>
									</el-col>
								</el-row>
								<el-row :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename9" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE9" action="" :name="newFilename9" :http-request="httpRequest" :limit="1"
											 :on-exceed="handleExceed" :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>
										</div>
									</el-col>
								</el-row>
								<el-row :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename10" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE10" action="" :name="newFilename10" :http-request="httpRequest"
											 :limit="1" :on-exceed="handleExceed" :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>
										</div>
									</el-col>
								</el-row>
							</div>
						</el-collapse-item>
					</div>
				</el-collapse>
			</div>
			<div class="Bottom-box">
				<div class="bottom-btn">
					<el-button type="primary" size="medium" @click="submitInfo('Y')">保存至草稿</el-button>
					<el-button v-show="isSubimt" type="primary" size="medium" @click="submitInfo('N')">提交</el-button>
					<el-button type="primary" size="medium" @click="discard">废弃</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Valuelist from '@/assets/js/valueList'
	export default {
		name: "NewOrder",
		data() {
			return {
				approvalTitle: "工单详情信息",
				activeNames: [1, 2, 3, 4, 5],
				showToolbar: true,
				message: "请选择",
				isParty:false,
				popupVisible1: false,
				popupVisible2: false,
				quesclass:false,
				opinion:'',
				company:'',
				orderNum:'',
				questioner:'',
				phones:'',
				position:'',
				orderStatus:'',
				creator:'',
				creatDate:'',
				lastproTime:'',
				orderDeal:'',
				dealRole:'',
				orderTitle:'',
				otherPhone:'',
				orderDes:'',
				input101:'',
				input102:'',
				input103:'',
				input104:'',
				input201:'',
				input202:'',
				input203:'',
				input204:'',
				upList2: [],
				textarea2: '',
				workingproveType: '',
				dataSlots11: [{
					values: Valuelist.questionType
				}],
				dataSlots2: [{
					values: Valuelist.questionClass
				}],
				value:null,
				ReteatTime:'',
				filedata:[],
				disabledShow:false,
				newFilename:'',
				newFilename2:'',
				newFilename3:'',
				newFilename4:'',
				newFilename5:'',
				newFilename6:'',
				newFilename7:'',
				newFilename8:'',
				newFilename9:'',
				newFilename10:'',
				fileNames:'文件名',
				fileList: [],
				isSubimt: true,
				isNext: true,
				requestor:'',
				submit_dttm:'',
				examineList:[],
			}

		},
// 		created() {
// 			this.$http.post('http://1.180.3.61:8766/SSCDEV/PSIGW/RESTListeningConnector/PSFT_HR/PERSONAL.v1/', {
// 				TOKEN: 'hrssc.yili.com',
// 				OPRID: this.getCookie('oprid'),
// 			})
// 			.then((res) => {
// 				console.log(res)
// 				if(res.body.status=='0'){
// 					this.launchid = res.body.EMPLID;
// 					this.launchnames = res.body.NAME;
// 					this.launchbusiness = res.body.POSITION_DESCR;
// 					this.launchdepartment = res.body.TAX_AGENCY_DESC;
// 					this.launchcompany = res.body.DEPT_DESCR;
// 					this.launchphones = res.body.PHONE;
// 				}
// 			})
// 			let NBR = this.$route.query.TRANSACTION_NBR;
// 			if (NBR) {
// 				this.TRANSACTION_NBR = NBR;
// 				let loadingInstance = this.$loading({
// 					body: true,
// 					text: "读取中",
// 					spinner: "el-icon-loading",
// 					background: "rgba(255, 255, 255, 0.8)"
// 				});
// 				this.$http.post('http://1.180.3.61:8766/SSCDEV/PSIGW/RESTListeningConnector/PSFT_HR/FlowSelectDraft.v1/', {
// 						TOKEN: 'hrssc.yili.com',
// 						EOAWPRCS_ID: "YL_SSC_AWE_007",
// 						TRANSACTION_NBR: NBR,
// 						OPRID: this.getCookie('oprid'),
// 						ENCRYPT: "0",
// 						DARFT:'Y'
// 					})
// 					.then((response) => {
// 						if (response.status == 200) {
// 							loadingInstance.close();	
// 							console.log(response)
// 							var DATA1 = response.body.DATA[1].FIELDS;
// 							var files = response.body.FILEDATA.FILELIST;
// 							if (DATA1 != "") {
// 								this.state1 = DATA1[0].VALUE.TEXT;
// 								this.names = DATA1[1].VALUE.TEXT;
// 								this.department = DATA1[2].VALUE.TEXT;
// 								this.phones = DATA1[3].VALUE.TEXT;
// 								this.input101 = DATA1[4].VALUE.TEXT;
// 								this.input102 = DATA1[4].VALUE.VALUE;
// 								this.state2 = DATA1[6].VALUE.TEXT;
// 								this.state22 = DATA1[6].VALUE.VALUE;
// 								
// 								this.YL_DEPT_DESCR = DATA1[8].VALUE.TEXT;
// 								this.input201 = DATA1[9].VALUE.TEXT;
// 								this.input202 = DATA1[9].VALUE.VALUE;
// 							}
// 							if (files != "") {
// 								this.fileList = files
// 								console.log(this.fileList)
// 								console.log(this.fileList[0].DESCR)
// 							}
// 						}
// 					});
// 			} else {
// 				this.$http.post('http://1.180.3.61:8766/SSCDEV/PSIGW/RESTListeningConnector/PSFT_HR/TRANSACTION_NBR.v1/', {
// 						TOKEN: 'hrssc.yili.com',
// 						EOAWPRCS_ID: 'YL_SSC_AWE_007'
// 					})
// 					.then((response) => {
// 						console.log(response)
// 						if (response.status == 200) {
// 							this.mustFiles = true;
// 							if (response.body.status == '0') {
// 								this.TRANSACTION_NBR = response.body.TRANSACTION_NBR;
// 							}
// 							if (response.body.status == '1') {
// 								this.$messagebox.alert(response.body.msg).then(() => {
// 									this.$router.push('/myagency');
// 								})
// 							}
// 						}
// 					});
// 			}
// 		},
		methods: {
			addNewfile(){
				let newfileParent = document.getElementsByClassName('fileList')[0].getElementsByClassName('el-collapse-item__content')[0];
				let newFilelength = newfileParent.getElementsByClassName('addNewfilelist');
				let html = document.getElementsByClassName('newFilehtml')[0];
				if(html.children.length==0){
					this.$messagebox.alert('新附件最多上传10个');
					return false
				}
			
			    newfileParent.appendChild(html.children[0]);
			
			},
			discard(){
				this.$http.post('http://1.180.3.61:8766/SSCDEV/PSIGW/RESTListeningConnector/PSFT_HR/FLOWVOID.v1/', {
					TOKEN: 'hrssc.yili.com',
					EOAWPRCS_ID:'YL_SSC_AWE_TER',
					TRANSACTION_NBR:this.TRANSACTION_NBR,
					OPRID: this.getCookie('oprid'),
				})
				.then((res) => {
					console.log(res)
					if(res.body.status=='0'){					
						this.$router.push('/myagency');
					}
				})
			},
			submitInfo(types) {
				this.$options.methods.keepInfo.bind(this)()
				var that = this;
				if (that.isSure) {
					var params = {
						TOKEN: 'hrssc.yili.com',
						EOAWPRCS_ID: "YL_SSC_AWE_007",
						TRANSACTION_NBR: that.TRANSACTION_NBR,
						OPRID: that.getCookie('oprid'),
						DARFT: types,
						JSON_DATA: that.JSON_DATA,
						COMMENT:that.opinions
					}
					const loadingInstance2 = this.$loading({
						body: true,
						text: "提交中",
						spinner: "el-icon-loading",
						background: "rgba(255, 255, 255, 0.8)"
					});
					this.$http.post('http://1.180.3.61:8766/SSCDEV/PSIGW/RESTListeningConnector/PSFT_HR/FlowSubmit.v1/', params)
						.then(res => {
							var msg = res.body.msg;
							if (res.body.status == 0) {
								var that = this;
								if (this.isFile) {
									setTimeout(function() {
										if (that.filedata.length > 0) {
											var params = {
												"TOKEN": 'hrssc.yili.com',
												"OPRID": that.getCookie('oprid'),
												"EOAWPRCS_ID": 'YL_SSC_AWE_TER',
												"TRANSACTION_NBR": that.TRANSACTION_NBR,
												"FILEDATA": that.filedata
			
											};
											that.$http.post('http://1.180.3.61:8766/SSCDEV/PSIGW/RESTListeningConnector/PSFT_HR/FILEUPLOAD.v1/', {
													data: params,
												})
												.then(res => {
													loadingInstance2.close();
													that.$confirm(msg, '', {
															showCancelButton: false,
															type: 'success',
															center: true
														})
														.then(() => {
															if(types=="Y"){
																this.setCookie('activeName','D')
															}else{
																this.setCookie('activeName','A')
															}
															 that.$router.push('/myagency')
														})
														.catch(() => {
			
														});
												})
												.catch(error => {
													console.log(error)
												})
										}
									}, 2000)
								} else {
									loadingInstance2.close();
									that.$confirm(msg, '', {
											showCancelButton: false,
											type: 'success',
											center: true
										})
										.then(() => {
											 that.$router.push('/myagency')
										})
										.catch(() => {
			
										});
								}
							} else {
								loadingInstance2.close();
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
						VALUE: this.state1
					},
					{
						FIELDNAME: 'PHONE',
						VALUE: this.phones
					},
					{
						FIELDNAME: 'YL_USE_TYPE',
						VALUE: this.input102
					},
					{
						FIELDNAME: 'YL_SEQ_TYPE',
						VALUE: 'A'
					},
					{
						FIELDNAME: 'YL_SEAL_TYPE',
						VALUE: this.state22
					},
					{
						FIELDNAME: 'YL_DEPT_DESCR',
						VALUE: this.YL_DEPT_DESCR
					},
					{
						FIELDNAME: 'YL_GET_WAY',
						VALUE: this.input202
					},
					{
						FIELDNAME: 'ADDRESS1',
						VALUE: this.ADDRESS1
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
				let warings3 = document.getElementsByClassName('waringss');
				if(warings3&&warings3.length>0){
					for (var i = 0; i < warings3.length; i++) {
						warings3[i].style.color = "#303133";
						var inputVal2 = warings3[i].parentNode.nextElementSibling.getElementsByTagName('a')[0];
						console.log(inputVal2)
						if (!inputVal2){
							this.isSure = false;
							document.getElementById('waring22').scrollIntoView({behavior: "instant", block: "center", inline: "nearest"});
							warings3[i].style.color = "red";
							this.$messagebox.alert('必传附件为空，请上传附件');
						}else{
							this.isSure = true
							
						}
					}
				}else{
					
					this.isSure = true;
				}
				//判断新增附件状态
				let newfileboxs = document.getElementsByClassName('fileList')[0].getElementsByClassName('el-collapse-item__content')[
					0];
					console.log(newfileboxs)
				if (newfileboxs) {
					var newfilelength = newfileboxs.children;
					console.log(newfilelength.length)
					for (var i = 0; i < newfilelength.length; i++) {
						if (newfilelength[i].className == 'addNewfilelist el-row') {
							if (newfilelength[i].getElementsByTagName('textarea')[0].value == "" && newfilelength[i].getElementsByClassName(
									'el-upload-list')[0].innerHTML != "") {
								document.getElementById('waring22').scrollIntoView({
									behavior: "instant",
									block: "center",
									inline: "nearest"
								});
								this.$messagebox.alert('上传新附件时，文件名不能为空')
								this.isSure = false;
								this.isFile = false;
							}
							if (newfilelength[i].getElementsByClassName('el-upload-list')[0].innerHTML == "" && newfilelength[i].getElementsByTagName(
									'textarea')[0].value != "") {
								document.getElementById('waring22').scrollIntoView({
									behavior: "instant",
									block: "center",
									inline: "nearest"
								});
								this.$messagebox.alert('请选取要上传的新附件');
								this.isSure = false;
								this.isFile = false;
							}


						}
					}
				}
				if (this.$refs.FILE1) {
					var isfile1 = this.$refs.FILE1.uploadFiles.length > 0;
					var isfile2 = this.$refs.FILE2.uploadFiles.length > 0;
					var isfile3 = this.$refs.FILE3.uploadFiles.length > 0;
					var isfile4 = this.$refs.FILE4.uploadFiles.length > 0;
					var isfile5 = this.$refs.FILE5.uploadFiles.length > 0;
					var isfile6 = this.$refs.FILE6.uploadFiles.length > 0;
					var isfile7 = this.$refs.FILE7.uploadFiles.length > 0;
					var isfile8 = this.$refs.FILE8.uploadFiles.length > 0;
					var isfile9 = this.$refs.FILE9.uploadFiles.length > 0;
					var isfile10 = this.$refs.FILE10.uploadFiles.length > 0;
					var mustFile1 = this.$refs.mustFile1.uploadFiles.length > 0;
					if (isfile1 || isfile2 || isfile3 || isfile4 || isfile5 || isfile6 || isfile7 || isfile8 || isfile9 || isfile10) {
						this.isFile = true
					}
				}
				if (this.isFile) {
					var that = this;
					if (that.$refs.FILE1) {
						that.$refs.FILE1.submit();
						that.$refs.FILE2.submit();
						that.$refs.FILE3.submit();
						that.$refs.FILE4.submit();
						that.$refs.FILE5.submit();
						that.$refs.FILE6.submit();
						that.$refs.FILE7.submit();
						that.$refs.FILE8.submit();
						that.$refs.FILE9.submit();
						that.$refs.FILE10.submit();
					}
					if (that.$refs.FILE) {
						for (var i = 0; i < that.$refs.FILE.length; i++) {
							that.$refs.FILE[i].submit();
						}
					}
				}


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
				if (this.input102 == 'W0001') {
					this.quesclass = true
					document.getElementById('question').classList.add('waring');
				}else{
					this.quesclass = false
					document.getElementById('question').classList.remove('waring');
				}
			},
			onValuesChange2(picker, values) {
				if (values[0] > values[1]) {
					picker.setSlotValue(1, values[0].value);
				}
				this.input203 = values[0].value;
				this.input204 = values[0].type;
			},
			sureBtn2(){
				this.popupVisible2 = !this.popupVisible2;
				this.input201 = this.input203;
				this.input202 = this.input204;
			},
			handleChange() {

			},
			httpRequest(options) {
				var that = this;
				// 获取文件对象
				var file = options.file
				//判断图片类型
				var isJPG = file.type;
				if (isJPG != 'image/jpeg' && isJPG != 'image/jpg' && isJPG != 'image/png') {

					var texts = document.getElementsByClassName('fileList')[0].getElementsByClassName('el-upload-list__item-name');
					this.isSure = false;

					for (var i = 0; i < texts.length; i++) {
						if (texts[i].innerText == options.file.name) {
							texts[i].style.color = 'red';
							document.getElementById('waring22').scrollIntoView({
								behavior: "instant",
								block: "center",
								inline: "nearest"
							});
						}
					}
					this.$messagebox.alert('上传头像图片只能是 JPG/PNG/JPEG 格式!')
// 					this.$confirm('上传头像图片只能是 JPG/PNG/JPEG 格式!', '', {
// 						showCancelButton: false,
// 						type: 'warning',
// 						center: true
// 					});
					
				}
				// 判断图片大小
				var isLt2M = file.size / 1024 / 1024 < 5
				if (!isLt2M) {
					var texts = document.getElementsByClassName('fileList')[0].getElementsByClassName('el-upload-list__item-name');
					this.isSure = false;
					for (var i = 0; i < texts.length; i++) {
						if (texts[i].innerText == options.file.name) {
							texts[i].style.color = 'red';
							document.getElementById('waring22').scrollIntoView({
								behavior: "instant",
								block: "center",
								inline: "nearest"
							});
						}
					}
					this.$messagebox.alert('上传产品图片不能超过5M!')
					this.$confirm('上传产品图片不能超过5M!', '', {
						showCancelButton: false,
						type: 'warning',
						center: true
					});
				}

				// 创建一个HTML5的FileReader对象
				var reader = new FileReader();
				//创建一个img对象
				var img = new Image();
				var filename = options.filename
				if (file) {
					reader.readAsDataURL(file)
				}
				if (isJPG && isLt2M) {
					reader.onload = (e) => {
						var base64Str = reader.result.split(',')[1]
						img.src = e.target.result
						// base64地址图片加载完毕后执行
						img.onload = function() {
							// 缩放图片需要的canvas（也可以在DOM中直接定义canvas标签，这样就能把压缩完的图片不转base64也能直接显示出来）
							var canvas = document.createElement('canvas');
							var context = canvas.getContext('2d');
							// 图片原始尺寸
							var originWidth = this.width;
							var originHeight = this.height;
							// 最大尺寸限制，可通过设置宽高来实现图片压缩程度
							var maxWidth = 1000,
								maxHeight = 1000;
							// 目标尺寸
							var targetWidth = originWidth,
								targetHeight = originHeight;
							// 图片尺寸超过最大尺寸的限制
							if (originWidth > maxWidth || originHeight > maxHeight) {
								if (originWidth / originHeight > maxWidth / maxHeight) {
									// 更改宽度，按照宽度限定尺寸
									targetWidth = maxWidth;
									targetHeight = Math.round(maxWidth * (originHeight / originWidth));
								} else {
									targetHeight = maxHeight;
									targetWidth = Math.round(maxHeight * (originWidth / originHeight));
								}
							}
							//对图片进行缩放
							canvas.width = targetWidth;
							canvas.height = targetHeight;
							// 清除画布
							context.clearRect(0, 0, targetWidth, targetHeight);
							// 图片压缩
							context.drawImage(img, 0, 0, targetWidth, targetHeight);
							/*第一个参数是创建的img对象；第二三个参数是左上角坐标，后面两个是画布区域宽高*/
							//压缩后的base64文件
							var newUrl = canvas.toDataURL('image/jpeg', 0.92);
							//获取base64图片大小，返回MB数字
							var str = newUrl.replace('data:image/png;base64,', '');
							var equalIndex = str.indexOf('=');
							if (str.indexOf('=') > 0) {
								str = str.substring(0, equalIndex);
							}
							var strLength = str.length;
							var fileLength = parseInt(strLength - (strLength / 8) * 2);
							// 由字节转换为MB
							var size = "";
							size = (fileLength / (1024 * 1024)).toFixed(2);
							var sizeStr = size + ""; //转成字符串
							var index = sizeStr.indexOf("."); //获取小数点处的索引
							var dou = sizeStr.substr(index + 1, 2) //获取小数点后两位的值
							var arr2 = {
								"DESCR": options.filename,
								"FILENAME": options.file.name,
								"BASE64STRING": newUrl.split(',')[1]
							}
							console.log(arr2)
							that.filedata.push(arr2);
						}
					}
				}

			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleExceed(files, fileList) {
				this.$message.warning(`只能上传一个文件`);
			},
			beforeRemove(file, fileList) {
			}
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

	.workingprove-info .ProveMsg-box {
		padding-top: .8rem;
	}

	.workingprove-info .ProveMsg-box h2 {
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

	.workingprove-info .el-collapse-item__wrap {
		padding: 0 10px;
	}

	.workingprove-info .examineinfo .bkong {
		width: 1.3rem;
		text-align: right;
		float: left;
	}

	.workingprove-info .ProveMsg-box .textleft {
		text-align:left ;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-size: 14px;
	}

	.workingprove-info .ProveMsg-box .textright {
		text-align: left;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-size: 14px;
		color: #666666
	}
	.workingprove-info .ProveMsg-box .marleft{
		padding-left: 7px;
	}
	.workingprove-info .textTop {
		text-align: right;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-weight: bold;
		font-size: 14px;
		position: relative;
		top: -0.14rem;
	}
	.workingprove-info .textTops{
		position: relative;
		top: -0.09rem;
	}
	.workingprove-info .ProveMsg-box .textbottom {

	}

	.workingprove-info .ProveMsg-box .el-row {
		padding-top: 0.25rem;
		line-height: .35rem;
	}

	.workingprove-info .examineinfo .el-row {
		padding-top: 0.25rem;
		line-height: .5rem;
	}

	.workingprove-info .ProveMsg-box .ProveMsg-cont {
		padding: 10px;
		padding-bottom: 2rem;
	}

	.workingprove-info .ProveMsg-box .el-collapse-item__header {
		font-size: 18px;
	}

	.workingprove-info .ProveMsg-box .el-icon-title-left {
		width: .17rem;
		height: .4rem;
		background: #1CAAFE;
	}

	.workingprove-info .ProveMsg-box .navTitle {
		float: left;
		margin-top: .29rem;
		margin-right: .1rem;
	}

	.el-message-box {
		width: 80%;
	}

	.workingprove-info .ProveMsg-box .remarkinfo .el-collapse-item__wrap {
		margin-left: 2%;
		border-bottom: none;
		width: 96%;
	}

	.workingprove-info .ProveMsg-box .el-collapse-item__content {
		padding: 0.1rem 0 0.4rem;
	}

	.el-select .el-input.is-focus .el-input__inner {
		border-color: #d8d8d8;
	}

	.workingprove-info .ProveMsg-box .el-input__inner {
		width: 100%;
		height: .6rem;
		line-height: .3rem;
		padding: 0;
		font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
		border: none;
		border-bottom: 1px solid #d8d8d8;
		border-radius: 0;
	}
	.workingprove-info .ProveMsg-box .searchType .el-input__inner{
		padding-right: .6rem;
	}
	.workingprove-info .selectInput .el-input__icon {
		text-align: right;
	}

	.workingprove-info .searchIpt .el-select {
		width: 100%;
	}

	.workingprove-info .searchIpt .el-icon-search {
		font-size: 16px;
	}

	.workingprove-info .ProveMsg-box .el-upload-list__item .el-icon-upload-success {
		display: none;
	}

	.workingprove-info .ProveMsg-box .el-progress__text {
		margin-right: .5rem;
		display: none;
	}

	.workingprove-info .ProveMsg-box .el-collapse {
		border-bottom: none;
		border-top: none;
		position: relative;
		margin-bottom: 10px;
	}

	.workingprove-info .ProveMsg-box .el-collapse-item__header {
		color: #333;
		padding: 10px;
		height: .7rem;
		padding-left: 28px;
	}

	.workingprove-info .ProveMsg-box .el-collapse-item__header:last-child {
		border-bottom: 1px solid #eeee;
	}

	.workingprove-info .ProveMsg-box .el-upload-list__item .el-icon-close {
		display: inline-block;
	}

	.el-upload-list__item.is-success:focus:not(:hover) .el-icon-close-tip {
		display: none;
	}

	.workingprove-info .ProveMsg-box .el-button--small {
		font-size: 14px;
		padding: .1rem;
	}

	.workingprove-info .ProveMsg-box .examineinfo .el-row {
		font-size: 14px;
		padding: .3rem;
	}

	.workingprove-info .ProveMsg-box .examineinfo .el-row .el-col {
		border: 1px solid #67c23a;
		padding: .1rem .2rem;
		border-radius: .05rem;
		position: relative;
	}

	.workingprove-info .ProveMsg-box .navTitle-sl {
		padding: .3rem;
		font-size: 16px;
		padding-bottom: 1.5rem;
	}

	.el-select-dropdown {
		position: absolute;
		left: 3%;
	}

	.workingprove-info .ProveMsg-box .navTitle-sl .el-icon-title-left {
		width: 0.17rem;
		height: .35rem;
		background: #13CE66;
		float: left;
		margin-top: .08rem;
	}

	.workingprove-info .ProveMsg-box .examineinfo .remarks {
		float: left;
		padding: .1rem;
		font-size: 13px;
		color: #606266;
	}

	.workingprove-info .ProveMsg-box .examineinfo .kong {
		margin-left: .2rem;
	}

	.workingprove-info .ProveMsg-box .navTitle-sl {
		padding: .3rem;
		font-size: 16px;
	}

	.workingprove-info .ProveMsg-box .navTitle-sl .el-icon-title-left {
		width: 0.17rem;
		height: .35rem;
		background: #13CE66;
		float: left;
		margin-top: .08rem;
	}

	.workingprove-info .ProveMsg-box .statusImg {
		position: absolute;
		right: .3rem;
		top: 0.62rem;
	}

	.workingprove-info .ProveMsg-box .statusImg img {
		width: 1.5rem;
	}

	.workingprove-info .ProveMsg-box .test_triangle_border .popup span {
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

	.workingprove-info .ProveMsg-box .test_triangle_border .popup em {
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

	.workingprove-info .picker-toolbar-title {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		color: #000;

	}
	.workingprove-info  .imgName {
		padding-bottom: .3rem;
	}
	.workingprove-info .usi-btn-sure {
		color: #42b983;
		font-size: 14px;
	}

	.workingprove-info .usi-btn-cancel {
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

	.workingprove-info  .picker-slot {
		font-size: 16px;
	}
	.workingprove-info  .Bottom-box {
		width: 100%;
		text-align: center;
		position: fixed;
		bottom: 0;
		background-color: #FFFFFF;
		padding: 10px;
		padding-left: 0;
	}
	.workingprove-info .Bottom-box .bottom-btn {
		
	}
	.workingprove-info .el-button--medium {
		width: 29%;
		padding: 10px 0;
		font-size: 14px;
		border-radius: 4px;
	}
	
	.workingprove-info .fileList .el-row {
		padding-bottom: .25rem;
	}
	.workingprove-info .el-button--small {
		font-size: 14px;
		padding: .1rem;
	}
	
	.workingprove-info .addNewfile .el-button {
		padding: 0.04rem .48rem;
	}
	
	.workingprove-info .addNewfile .el-icon-plus {
		font-size: 18px;
		color: #fff;
	}
	
	.workingprove-info .addNewfile .textright {
		text-align: left;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-weight: bold;
		font-size: 14px;
		padding-top: .08rem;
	}
	.workingprove-info .addNewfilelist textarea.el-textarea__inner {
		border: none;
		border-bottom: 1px solid #d8d8d8;
		border-radius: 0;
		padding: 0;
		font-weight: bold;
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
</style>
