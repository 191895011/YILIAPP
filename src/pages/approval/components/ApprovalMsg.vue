<template>
	<div class="ApprovalMsg-box">
		<h2 v-show="titles">{{approvalTitle}}</h2>
		<div class="ApprovalMsg-cont">
			<!--基本信息-->
			<div class="baseinfo"  id="waring">
				<el-collapse v-for="(item,index) of wordList" v-model="activeNames" @change="handleChange" :key="index">
					<div>
						<div class="yuan"></div>
						<el-collapse-item :title="item.GROUP" :name="index">
							<div class="tableList" v-for="(tables,index) in (item.FIELD_LIST)" :key="index">
								<el-row :gutter="40" v-if="item.LEVEL==1" v-for="(tablelist,index) in tables" :key="index">
									<el-col :span="10" style="">
										<div v-if="isMast2(tablelist)" class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>{{tablelist.LABEL}}</div>
										<div v-if="!isMast2(tablelist)" class="grid-content  textright">{{tablelist.LABEL}}</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content  textleft">{{tablelist.VALUE.VALUE}}</div>
										<div v-if="isEdit2(tablelist)" class="grid-content  textleft textTop">
											<el-input type="textarea" :autosize="{ minRows: 2}" placeholder="请输入内容" v-model="itemRadio[index].value1"  :name="tablelist.FIELDNAME">
											</el-input>
										</div>
									</el-col>
								</el-row>

							</div>
							<el-row :gutter="40" v-if="item.LEVEL==2" v-for="(tablelist2,index) in (item.FIELDS)" :key="index">
								<el-col :span="10" style="">
									<div class="grid-content  textright">{{tablelist2.LABEL}}</div>
								</el-col>
								<el-col :span="24" v-if="!isEdit3(tablelist2)">
									<div class="grid-content  textleft wordDetail">
										<ul style="padding: 0 .35rem;line-height: .5rem;">
											<li v-for="(texts,index) in tablelist2.VALUE" :key="index">{{texts.R}}</li>
										</ul>
									</div>
								</el-col>
							</el-row>
							<el-row :gutter="40" v-if="item.LEVEL==0" v-for="(items,index) in (item.FIELDS)" :key="index">
								<el-col :span="10">									
									<div v-if="isMast(items)"  :index="index" :class="{'opinions':isOpinion(items),'iSdangerous':isDangerous(items),'settlTime':isSettltime(items),'iSbill':isBills(items),'iSbill2':isBills2(items),'iStest':isTest(items),'years':isYears(items),'become':isBecome(items),'interview':isInterview(items),'restraint':isRestraint(items),'restdate':isRestdate(items)}" class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>{{items.LABEL}}</div>
									<div v-if="!isMast(items)" :index="index" :class="{'opinions':isOpinion(items),'iSdangerous':isDangerous(items),'settlTime':isSettltime(items),'iSbill':isBills(items),'iSbill2':isBills2(items),'iStest':isTest(items),'years':isYears(items),'become':isBecome(items),'interview':isInterview(items),'restraint':isRestraint(items),'restdate':isRestdate(items)}" class="grid-content  textright">{{items.LABEL}}</div>
								</el-col>
								<el-col :span="14">
									<div v-if="isEdit(items)&&isSeltype(items)" class="grid-content  textleft textTop" >
										<el-input v-if="!isValue(items)" class="selectInput" :placeholder="items.VALUE.TEXT" :havedata="items.VALUE.VALUE"  v-model="itemRadio[index].value1" 
										 :name="items.FIELDNAME" :redata="itemRadio[index].value3" readonly unselectable="on">
											<i slot="suffix" @click="showPopup0(items,index)" class="el-input__icon el-icon-caret-bottom"></i>
										</el-input>
										<el-input v-if="isValue(items)" class="selectInput" :returnType="items.DS"  placeholder="请选择" v-model="itemRadio[index].value1" :name="items.FIELDNAME" :redata="itemRadio[index].value3"
										 readonly unselectable="on">
											<i slot="suffix" @click="showPopup0(items,index)" class="el-input__icon el-icon-caret-bottom"></i>
										</el-input>
											<awesome-picker
											  :ref="'picker'+index"
											  textTitle="请选择"
											  :data="data1"
											  :anchor="itemRadio[index].value4"
											  :swipeTime="1800"
											  @confirm="handlePicker0Confirm">
											</awesome-picker>
									</div>
									<div v-if="isEdit(items)&&isDatetype(items)" class="grid-content  textleft textTop">
										<div class="zhezhao"></div>
										<el-input v-if="!isValue(items)" class="selectInput"  :placeholder="items.VALUE.TEXT" :havedata="items.VALUE.VALUE" v-model="itemRadio[index].value1" :name="items.FIELDNAME" :redata="itemRadio[index].value3"
										  readonly unselectable="on">
											<i slot="suffix" @click="openpicker2(items,index)" class="el-input__icon el-icon-caret-bottom"></i>
										</el-input>
										<el-input v-if="isValue(items)" class="selectInput" placeholder="请选择" v-model="itemRadio[index].value1" :name="items.FIELDNAME" :redata="itemRadio[index].value3"
										  readonly unselectable="on">										 
											<i slot="suffix" @click="openpicker2(items,index)" class="el-input__icon el-icon-caret-bottom"></i>
										</el-input>
										<awesome-picker
										  :ref="'picker'+index"
										  textTitle="请选择"
										  type="date"
										  :anchor="anchor"
										  :swipeTime="3000"
										  @confirm="handlePicker2Confirm">
										</awesome-picker>
									</div>
									<div v-if="isEdit(items)&&isNomtype(items)" class="grid-content  textleft textTop">
										<el-input type="textarea" :autosize="{ minRows: 2}" placeholder="请输入内容" :name="items.FIELDNAME" v-model="textarea5"></el-input>
									</div>
									<div v-if="!isEdit(items)&&!isTable(items)" :class="{'probation':isProbation(items)}" class="grid-content  textleft">{{items.VALUE.TEXT}}</div>
								</el-col>
							</el-row>
						</el-collapse-item>
					</div>
				</el-collapse>
			</div>
			<!--附件信息-->
			<div class="fileList" id="waring2">
				<el-collapse v-if="fileList!=''||isNewfile=='Y'" v-model="activeNames" @change="handleChange">
					<div>
						<div class="yuan"></div>
						<el-collapse-item title="附件信息" :name="22" >
							<el-row  :gutter="40" v-for="(names,index) in fileList" v-if="isVisibles(names)" :key="index">
								<el-col :span="10">
									<div v-if="isMast(names)"  class="grid-content mustFilename textright waring2"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>{{names.DESCR}}</div>
									<div v-if="!isMast(names)" class="grid-content  textright">{{names.DESCR}}</div>
								</el-col>
								<el-col :span="14">
									<!-- <div class="grid-content  textleft">{{names.ATTACHUSERFILE}}</div> -->
									<div v-if="!isShow(names)" class="grid-content  textleft">
										<a class="fileUrl" :href="names.FILEPATH">{{names.ATTACHUSERFILE}}</a>
									</div>

									<div v-if="isShow(names)&&names.ATTACHUSERFILE==''" class="grid-content textleft">
										<el-upload class="upload-demo" style="cursor:pointer;" :ref="names.FILESEQ" action=""  :before-upload="beforeUpload"
										 :http-request="httpRequest" :on-success="handleAvatarSuccess" :limit="1" :on-exceed="handleExceed" :name="names.DESCR"
										 :before-remove="beforeRemove" :auto-upload="false">
											<el-button class="addFilebtn" slot="trigger" size="small" type="primary">添加附件</el-button>
										</el-upload>
									</div>
									<div v-if="isShow(names)&&names.ATTACHUSERFILE!=''" class="grid-content textleft">
										<div class="imgName"><a class="fileUrl" :href="names.FILEPATH">{{names.ATTACHUSERFILE}}</a></div>
										<el-upload class="upload-demo" style="cursor:pointer;" :ref="names.FILESEQ" action=""  :before-upload="beforeUpload"
										 :http-request="httpRequest" :on-success="handleAvatarSuccess" :limit="1" :on-exceed="handleExceed" :name="names.DESCR"
										 :before-remove="beforeRemove" :auto-upload="false">
											<el-button slot="trigger" size="small" type="primary">替换附件</el-button>
										</el-upload>
									</div>
									
								</el-col>
							</el-row>
							<el-row  :gutter="40" class="addNewfile" v-show="isNewfile=='Y'">
								<el-col :span="10">
									<div class="grid-content  textright">添加附件</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content textleft"><el-button  @click="addNewfile" :disabled="disabledShow" slot="trigger" size="small" type="primary"><i class="el-icon-plus"></i></el-button></div>
								</el-col>
							</el-row>
							<div class="newFilehtml" style="display: none;">
								<el-row  :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename"  type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE1"  action=""  :before-upload="beforeUpload"
											:name="newFilename" :http-request="httpRequest" :on-success="handleAvatarSuccess" :limit="1" :on-exceed="handleExceed"
											 :before-remove="beforeRemove" :auto-upload="false">											 
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>	
										</div>
									</el-col>
								</el-row>
								<el-row  :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename2" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE2"  action="" :before-upload="beforeUpload"
											 :name="newFilename2" :http-request="httpRequest" :on-success="handleAvatarSuccess" :limit="1" :on-exceed="handleExceed"
											 :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>	
										</div>
									</el-col>
								</el-row>
								<el-row  :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename3" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE3"  action=""  :before-upload="beforeUpload"
											 :name="newFilename3" :http-request="httpRequest" :on-success="handleAvatarSuccess" :limit="1" :on-exceed="handleExceed"
											 :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>	
										</div>
									</el-col>
								</el-row>								
								<el-row  :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename4" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE4"  action=""  :before-upload="beforeUpload"
											 :name="newFilename4" :http-request="httpRequest" :on-success="handleAvatarSuccess" :limit="1" :on-exceed="handleExceed"
											 :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>	
										</div>
									</el-col>
								</el-row>
								<el-row  :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename5" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE5"  action=""  :before-upload="beforeUpload"
											  :name="newFilename5" :http-request="httpRequest" :on-success="handleAvatarSuccess" :limit="1" :on-exceed="handleExceed"
											 :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>	
										</div>
									</el-col>
								</el-row>
								<el-row  :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename6" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE6"  action="" :before-upload="beforeUpload"
											 :name="newFilename6" :http-request="httpRequest" :on-success="handleAvatarSuccess" :limit="1" :on-exceed="handleExceed"
											 :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>	
										</div>
									</el-col>
								</el-row>
								<el-row  :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename7" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE7"  action=""  :before-upload="beforeUpload"
											 :name="newFilename7" :http-request="httpRequest" :on-success="handleAvatarSuccess" :limit="1" :on-exceed="handleExceed"
											 :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>	
										</div>
									</el-col>
								</el-row>
								<el-row  :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename8" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE8"  action=""  :before-upload="beforeUpload"
											 :name="newFilename8" :http-request="httpRequest" :on-success="handleAvatarSuccess" :limit="1" :on-exceed="handleExceed"
											 :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>	
										</div>
									</el-col>
								</el-row>
								<el-row  :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename9" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE9"  action=""  :before-upload="beforeUpload"
											 :name="newFilename9" :http-request="httpRequest" :on-success="handleAvatarSuccess" :limit="1" :on-exceed="handleExceed"
											 :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
											</el-upload>	
										</div>
									</el-col>
								</el-row>
								<el-row  :gutter="40" class="addNewfilelist">
									<el-col :span="10">
										<div class="grid-content  textright">
											<el-input v-model="newFilename10" type="textarea" autosize placeholder="请输入附件名"></el-input>
										</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content textleft">
											<el-upload class="upload-demo" ref="FILE10"  action=""  :before-upload="beforeUpload"
											 :name="newFilename10" :http-request="httpRequest" :on-success="handleAvatarSuccess" :limit="1" :on-exceed="handleExceed"
											 :before-remove="beforeRemove" :auto-upload="false">
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
			<!--流程图-->
			<el-collapse v-show="isExamineShow=='Y'" class="examineinfo" v-model="activeNames" @change="handleChange">
				<div>
					<div class="yuan"></div>
					<el-collapse-item title="审批步骤" :name="44">
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
						<el-row v-for="(parsons,index) in examineList"  :key="index">
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
						<div id='opinions' class="navTitle-sl" v-show="isApper">
							<div class="title-name opinionsCont">
								<i class="el-collapse-item__arrow el-icon-title-left"></i>
								<i>审批意见</i>
							</div>
							<div>
								<el-input v-model="opinions" type="textarea" :autosize="{ minRows: 2, maxRows: 3}" placeholder="请输入内容">
								</el-input>
							</div>
						</div>
					</el-collapse-item>
				</div>
			</el-collapse>
		</div>
		<div class="Bottom-box">
			<div class="bottom-btn" v-show="isApper">
				<el-button v-if="buttonArry.length==1" v-for="(btns,index) in buttonArry"  :name="btns.ACTION" @click="agreeSubmit(btns.ACTION)" type="primary"
				 size="medium1" :key="index">{{btns.BTN_LABLE}}</el-button>
				<el-button v-if="buttonArry.length==2" v-for="(btns,index) in buttonArry" :name="btns.ACTION" @click="agreeSubmit(btns.ACTION)" type="primary"
				 size="medium2" :key="index">{{btns.BTN_LABLE}}</el-button>
				<el-button v-if="buttonArry.length==3" v-for="(btns,index) in buttonArry"  :name="btns.ACTION" @click="agreeSubmit(btns.ACTION)" type="primary"
				 size="medium3" :key="index">{{btns.BTN_LABLE}}</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import { AWEAPPROVAL, FILEUPLOAD, AWEACTION } from "@/api/index.js";
	export default {
		name: "ApprovalMsg",
		data() {
			return {
				approvalTitle:"",
				value: null,
				value1: null,
				startDate: new Date('1993/1/1'),
				endDate: new Date('2030/12/31'),
				activeNames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22, 44],
				upList: [],
				requestor:'',
				submit_dttm:'',
				COMMENTS:'',
				wordList: [],
				fileList: [],
				baseurl: [],
				isExamineShow: '',
				examineList: [],
				textarea: '',
				itemRadio: [],
				itemRadio22: "",
				itemRadio23: "",
				itemRadio33: false,
				textarea5: '',
				input222: '',
				input333: '',
				input444: '',
				dataModel: false,
				radioPopup: '',
				dateSlots: [],
				postArr: [],
				isApper: false,
				isDisabled: false,
				isSure:false,
				isFile:false,
				titles:false,
				isSuccessed:false,
				buttonArry: [],
				opinions: '',
				filenames: [],
				fileurls: [],
				filedata: [],
				indexs:'',
				anchor: [],
				data1:[],
				data2:[],
				anchor2:[],
				anchor3:[],
				reArray:[],
				reArray2:[],
				disabledShow:false,
				isDisabled2:false,
				isNewfile:'',
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
				loginid:'',
				istoken:'',
				eoawprcsid:'',
				transaction:'',
				encrypt:'',
				urlss:'',
				isThisval:false,
				isThisval2:false,
				isThisval3:false,
				isThisval4:false,
				isThisval42:false,
			}
		},
		mounted() {
			this.urlss = window.location.href;
			var Request = this.GetRequest();
			this.loginid = Request['OPRID'];
			this.istoken = Request['TOKEN'];
			this.eoawprcsid = Request['EOAWPRCS_ID'];
			this.transaction = Request['TRANSACTION_NBR'];
			this.encrypt = Request['ENCRYPT'];	
			let loadingInstance1 = this.$loading({
				body: true,
				text: "读取中",
				spinner: "el-icon-loading",
				background: "rgba(255, 255, 255, 0.8)"
			});

		
			let that = this;
			let params = {
				TOKEN: this.istoken,
				OPRID: this.loginid,
				EOAWPRCS_ID: this.eoawprcsid,
				TRANSACTION_NBR: this.transaction,
				ENCRYPT:this.encrypt
			};
			AWEAPPROVAL(params).then(res=> {
				loadingInstance1.close();
				if (res.MESSAGE != "") {
					var longs = res.MESSAGE.length;
					this.$messagebox.alert('<div style="text-align:left">'+res.MESSAGE[0].TEXT.replace(/\n/g,"<br>")+'</div>').then(action => {
						if (longs == 1) {
							return false
						}
						this.$messagebox.alert('<div style="text-align:left">'+res.MESSAGE[1].TEXT.replace(/\n/g,"<br>")+'</div>').then(action => {
							if (longs == 2) {
								return false
							}
							this.$messagebox.alert('<div style="text-align:left">'+res.MESSAGE[2].TEXT.replace(/\n/g,"<br>")+'</div>').then(action => {
								if (longs == 3) {
									return false
								}
								this.$messagebox.alert('<div style="text-align:left">'+res.MESSAGE[3].TEXT.replace(/\n/g,"<br>")+'</div>').then(action => {
									if (longs == 4) {
										return false
									}
									this.$messagebox.alert('<div style="text-align:left">'+res.MESSAGE[4].TEXT.replace(/\n/g,"<br>")+'</div>').then(action => {

									});
								});
							});
						});
					});
				}
				console.log(res);

				if (res.APPR_STATUS == "Y") {
					this.isApper = true;
				} else {
					this.isApper = false;
				}
				this.titles = true;
				this.approvalTitle = res.TITLE;
				this.wordList = res.DATA;
				this.fileList = res.FILEDATA.FILELIST;
				this.examineList = res.WORKFLOW.echain;
				this.isExamineShow = res.WORKFLOW.SHOW;
				this.buttonArry = res.BUTTON;
				this.isNewfile = res.FILEDATA.CANUPLOAD;
				this.submit_dttm = res.WORKFLOW.submit_dttm;
				this.COMMENTS = res.WORKFLOW.COMMENTS;
				this.requestor = res.WORKFLOW.requestor;
				setTimeout(function(){
					
					let wordlowType = that.eoawprcsid;
					let objR = document.getElementsByClassName('years')[0];
					let objOpinion = document.getElementsByClassName('opinions')[0];
					let objBecome = document.getElementsByClassName('become')[0];
					let objTest = document.getElementsByClassName('iStest')[0];
					let objBill = document.getElementsByClassName('iSbill')[0];
					let objBill2 = document.getElementsByClassName('iSbill2')[0];
					let objSetltime = document.getElementsByClassName('settlTime')[0];
					let objDangerous = document.getElementsByClassName('iSdangerous')[0];				
					let objInterview = document.getElementsByClassName('interview')[0];
					let objRestraint = document.getElementsByClassName('restraint')[0];
					let objRestdate = document.getElementsByClassName('restdate')[0];
 					var iSinterview = document.getElementsByClassName('interview')[0];
					
					let objB = document.getElementsByClassName('bottom-btn')[0].getElementsByTagName('button');
					if(wordlowType=='YL_SSC_AWE_020'){
						var btnlong = document.getElementsByClassName('el-button');
						for(var i=0;i<btnlong.length;i++){
							console.log(btnlong.length)
							if(btnlong.length==3){
								btnlong[i].classList.add('btnstyle')
							}else{
								btnlong[i].classList.remove('btnstyle')	
							}
						}
					}
					//离退流程
					if(iSinterview&&wordlowType=='YL_SSC_AWE_TER'){
						let isVals = iSinterview.parentNode.nextElementSibling.getElementsByTagName('input')[0].placeholder;
						for(var i=0;i<objB.length;i++){
							if(isVals=="留任"){
								if(objB[i].name=='APV'||objB[i].name=='PSH'){
									objB[i].style.visibility="hidden"
								}else{
									objB[i].innerHTML = "流程结束"
								}
																							
							}
							if(isVals=="离职"){
								objB[i].style.visibility="visible"
								if(objB[i].name!='APV'&&objB[i].name!='PSH'){
									objB[i].innerHTML = "不同意"
								}
							}
						}
					}
					if(objRestraint&&wordlowType=='YL_SSC_AWE_TER'){
						var values = objRestraint.parentNode.nextElementSibling.getElementsByTagName('input')[0].placeholder;
						if(values=="否"){
							objRestdate.parentNode.parentNode.style.display = 'none';
							objRestdate.getElementsByTagName('i')[0].style.visibility = 'hidden'
							objRestdate.classList.remove('waring');
							
						}
						if(values=="是"){
							objRestdate.parentNode.parentNode.style.display = 'block';
							objRestdate.getElementsByTagName('i')[0].style.visibility = 'visible';
							objRestdate.classList.add('waring');
						}								
 					}					
					//试用期转正流程
					if(objOpinion&&wordlowType=='YL_SSC_AWE_PRC'){
						let objBecomedate =objBecome.parentNode.nextElementSibling.getElementsByClassName('zhezhao')[0];
						let valueTexts = objOpinion.parentNode.nextElementSibling.getElementsByTagName('input')[0].placeholder;
						let mastBtn = objBecome.getElementsByTagName('i')[0];
						let probation = document.getElementsByClassName('probation')[0].innerHTML;
						let mustFilename = document.getElementsByClassName('mustFilename');
						let str4 = that.getNextDate(probation,1);
						console.log(valueTexts)
						if(valueTexts=="同意按期转正"||valueTexts=="不同意转正"){
							objBecomedate.style.visibility="visible";
							objBecomedate.innerHTML= str4;
							mastBtn.style.visibility="hidden";
							objBecome.classList.remove('waring');
						}else{
							objBecomedate.style.visibility="hidden";
							mastBtn.style.visibility="visible";
							objBecome.classList.add('waring');
						}
						if(valueTexts=="不同意转正"){
							for(var i=0;i<mustFilename.length;i++){
								mustFilename[i].classList.remove('waring2');
								mustFilename[i].getElementsByTagName('i')[0].style.visibility = 'hidden'
								
							}
						}
					}
					//劳动合同续签流程
					if(objR&&wordlowType=='YL_SSC_AWE_020'){
						let isVals2 = objR.parentNode.nextElementSibling.getElementsByTagName('input')[0].placeholder;
						for(var i=0;i<objB.length;i++){
							if(isVals2!=" "&&isVals2!="请选择"){
								if(objB[i].name=='APVW'||objB[i].name=='REF'){
									objB[i].style.visibility="hidden"
								}	
							}else{
								objB[i].style.visibility="visible"
							}
					
						}			
					}
					
				})
				
			})
			.catch(function(error) {
				console.log(error);
			});


			var len = 50;
			for (var i = 0; i < len; i++) {
				var nums = {
					value1: '',
					value2: false,
					value3: '',
					value4:[]
				};
				this.itemRadio.push(nums);
			}

		},
		methods: {
			addNewfile(){
				let newfileParent = document.getElementsByClassName('fileList')[0].getElementsByClassName('el-collapse-item__content')[0];
				let newFilelength = newfileParent.getElementsByClassName('addNewfilelist');
				let html = document.getElementsByClassName('newFilehtml')[0];
				console.log(html.children.length)
				console.log(newFilelength[0].childNodes)
				if(html.children.length==0){
					this.$messagebox.alert('新附件最多上传10个');
					return false
				}

			    newfileParent.appendChild(html.children[0]);

			},
			GetRequest() {
				var url = window.location.href; //获取url中"?"符后的字串 
				//var url = '?loginid=10003031&stamp=123456&token=24b3af5abed21c13bd747089bc54f5bd786b4aa0';
				var theRequest = new Object();
				var strs = [];
				if (url.indexOf("?") != -1) {
					var str = url.substr(url.indexOf("?")+1);
					strs = str.split("&");
					for (var i = 0; i < strs.length; i++) {
						theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
					}
				}
				return theRequest;
			},

			agreeSubmit(types) {
				let arr1 = [];
				let wordlowType = this.eoawprcsid;
				arr1.length = 0;
				if(wordlowType!="YL_SSC_AWE_020"){
					
					if(types=="DNY"||types=="PSH"){
						var opinionsCont = document.getElementsByClassName('opinionsCont')[0];
						opinionsCont.style.color = "#303133";
						if(this.opinions.length==0){
							document.getElementById("opinions").scrollIntoView();						
							opinionsCont.style.color = "red";
							this.isSure = false;
							this.$messagebox.alert('请填写审批意见');
						}else{
							this.isSure = true
						}
						
					}
					else{
						let warings = document.getElementsByClassName('waring');
						let warings2 = document.getElementsByClassName('waring2');
						if(warings.length>0){
							for (var i = 0; i < warings.length; i++) {
								warings[i].style.color = "#303133";
								var inputVal = warings[i].parentNode.nextElementSibling.getElementsByTagName('input');
								if (inputVal[0].value == ''&&(inputVal[0].placeholder=="请选择"||inputVal[0].placeholder=="请输入内容"||inputVal[0].placeholder=="")) {
									this.isSure = false;
									document.getElementById('waring').scrollIntoView({behavior: "instant", block: "center", inline: "nearest"});
									warings[i].style.color = "red";
									this.$messagebox.alert('必填内容不能为空，请认真填写');
									return false
								}else{
									this.isSure = true
								}
							}
						}else{
							this.isSure = true
						}
						console.log(warings2)
						if(warings2&&warings2.length>0){
							for (var i = 0; i < warings2.length; i++) {
								warings2[i].style.color = "#303133";
								var inputVal2 = warings2[i].parentNode.nextElementSibling.getElementsByTagName('a')[0];
								console.log(inputVal2)
								if (!inputVal2){
									this.isSure = false;
									document.getElementById('waring2').scrollIntoView({behavior: "instant", block: "center", inline: "nearest"});
									warings2[i].style.color = "red";
									this.$messagebox.alert('必传附件为空，请上传附件');
								}else{
									this.isSure = true
									
								}
							}
						}else{
							
							this.isSure = true;
						}
						
					}
				}
				
				if(this.$refs.FILE){
					console.log('有替换按钮')
					
					for(var i=0;i<this.$refs.FILE.length;i++){
						if(this.$refs.FILE[i].uploadFiles.length>0){
							console.log("有要替换的文件")
							this.isFile = true
						}
					}
				}
				if(this.$refs.FILE1){
					var isfile1 = this.$refs.FILE1.uploadFiles.length>0;
					var isfile2 = this.$refs.FILE2.uploadFiles.length>0;
					var isfile3 = this.$refs.FILE3.uploadFiles.length>0;
					var isfile4 = this.$refs.FILE4.uploadFiles.length>0;
					var isfile5 = this.$refs.FILE5.uploadFiles.length>0;
					var isfile6 = this.$refs.FILE6.uploadFiles.length>0;
					var isfile7 = this.$refs.FILE7.uploadFiles.length>0;
					var isfile8 = this.$refs.FILE8.uploadFiles.length>0;
					var isfile9 = this.$refs.FILE9.uploadFiles.length>0;
					var isfile10 = this.$refs.FILE10.uploadFiles.length>0;
					if(isfile1||isfile2||isfile3||isfile4||isfile5||isfile6||isfile7||isfile8||isfile9||isfile10){
						console.log('有新附件要传')
						this.isFile = true
					}
				}

				var numTypes = document.getElementsByClassName('baseinfo');
				var numbers = numTypes[0].getElementsByTagName('input');
				var numbers2 = numTypes[0].getElementsByTagName('textarea');
				for (var i = 0; i < numbers.length; i++) {
					if (numbers[i].value != '') {
						if(numbers[i].getAttribute('redata')!=""){						
							var obj1 = {
								FIELDNAME: numbers[i].name,
								VALUE: numbers[i].getAttribute('redata')
							}
							arr1.push(obj1)
						}
						else{
							var obj1 = {
								FIELDNAME: numbers[i].name,
								VALUE: numbers[i].value
							}
							arr1.push(obj1)
						}
						
					}
					if(numbers[i].value == ''){
						if(numbers[i].placeholder=="请选择"||numbers[i].placeholder=="请输入内容"){
							var obj1 = {
								FIELDNAME: numbers[i].name,
								VALUE: numbers[i].value
							}
							arr1.push(obj1)
						}else{
							var obj1 = {
								FIELDNAME: numbers[i].name,
								VALUE: numbers[i].getAttribute('havedata')
							}
							arr1.push(obj1)
						}	

					}
				}
				
				for (var i = 0; i < numbers2.length; i++) {
					var obj2 = {
						FIELDNAME: numbers2[i].name,
						VALUE: numbers2[i].value
					}
					arr1.push(obj2)
				}
				console.log("没有必传"+this.isSure);
				console.log(arr1)

				var that = this;
				if(that.$refs.FILE1){
					console.log('触发新附件上传事件')
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
					console.log(that.filedata)
					console.log(that.$refs)
				}
				if(that.$refs.FILE){
					console.log('触发替换上传事件')
					console.log(that.filedata)
					for (var i = 0; i < that.$refs.FILE.length; i++) {
						that.$refs.FILE[i].submit();
						console.log('调用替换上传事件')
					}							
				}
				let newfileboxs = document.getElementsByClassName('fileList')[0].getElementsByClassName('el-collapse-item__content')[0];
				if(newfileboxs){
					var newfilelength = newfileboxs.children;
					for(var i=0;i<newfilelength.length;i++){
						if(newfilelength[i].className=='addNewfilelist el-row'){
							if (newfilelength[i].getElementsByTagName('textarea')[0].value == "" && newfilelength[i].getElementsByClassName(
									'el-upload-list')[0].innerHTML != "") {
								document.getElementById('waring2').scrollIntoView({behavior: "instant", block: "center", inline: "nearest"});
								this.$confirm('上传新附件时，文件名不能为空','',{
									showCancelButton:false,
									type:'warning',
									center:true
								});	
								this.isSure = false;
								this.isFile = false;
							}
							if (newfilelength[i].getElementsByClassName('el-upload-list')[0].innerHTML == "" && newfilelength[i].getElementsByTagName(
									'textarea')[0].value != "") {
								document.getElementById('waring2').scrollIntoView({behavior: "instant", block: "center", inline: "nearest"});
								this.$confirm('请选取要上传的新附件','',{
									showCancelButton:false,
									type:'warning',
									center:true
								});	
								this.isSure = false;
								this.isFile = false;
							}
							
						
						}
					}
				}
				if(this.isSure){
					console.log("要传文件哦"+this.isFile);

					var params66 = {
						TOKEN: this.istoken,
						OPRID: this.loginid,
						EOAWPRCS_ID: this.eoawprcsid,
						TRANSACTION_NBR: this.transaction,
						ACTION: types,
						COMMENT: this.opinions,
						UPDATE_DATA: arr1,
						ENCRYPT:this.encrypt
					}
					const loadingInstance2 = this.$loading({
						body: true,
						text: "提交中",
						spinner: "el-icon-loading",
						background: "rgba(255, 255, 255, 0.8)"
					});
					AWEACTION(params66).then(res => {
						console.log(res.status)
						console.log(res.msg)
						var msg = res.msg;
						if(res.status=='0'){
						var that = this;
						if(this.isFile) {
							console.log("提交数据成功，开始调图片接口")

							setTimeout(function() {		
								console.log(that.filedata.length);
								if(that.filedata.length>0){
									var params = {
										data:{
											"TOKEN": that.istoken,
											"OPRID": that.loginid,
											"EOAWPRCS_ID": that.eoawprcsid,
											"TRANSACTION_NBR": that.transaction,
											"FILEDATA": that.filedata
										}				
									};
									FILEUPLOAD(params).then(res => {
											console.log("调用上传接口成功")
											loadingInstance2.close();
											 that.$confirm(msg, '',{
												showCancelButton:false,
												type:'success',
												center:true
											})				
											.then(() => {
												window.location.reload()
											})
											.catch(() => {
												
											});
										})
										.catch(error => {
											console.log(error)
										})
								}
	
					
							}, 2000)
						}else{
							loadingInstance2.close();
							 this.$confirm(msg, '',{
								showCancelButton:false,
								type:'success',
								center:true
							})					
							.then(() => {
								window.location.reload()
							})
							.catch(() => {

							});
						}							
						
						
					}else{
									loadingInstance2.close();			
									this.$confirm(msg,'',{
										showCancelButton:false,
										type:'warning',
										center:true
									}).then(action => {
									
									});
								}
								

							})
					.catch(error => {
						console.log(error)
					})					
				}
			},
			handleChange(val) {

			},
			isVisibles(names) {
				return names.VISIBLE == "Y"
			},
			isShow(names) {
				return names.ISUPLOAD == "Y"
			},
			isEdit(items) {
				return items.EDIT == "Y"
			},
			isEdit2(tablelist) {
				return tablelist.EDIT == "Y"
			},
			isEdit3(tablelist2) {
				return tablelist2.EDIT == "Y"
			},
			isTable(items) {
				return items.FIELDTYPE == "TABLE"
			},
			isSeltype(items) {
				return items.FIELDTYPE == "SELECTED"
			},
			isDatetype(items) {
				return items.FIELDTYPE == "DATE"
			},
			isWords(items) {
				return items.FIELDTYPE == "M"
			},
			isNomtype(items) {
				return items.FIELDTYPE == ""
			},
			isMast(items) {
				return items.REQUIRED == "Y"
			},
			isMast2(tablelist) {
				return tablelist.REQUIRED == "Y"
			},
			isYears(items){
				return items.FIELDNAME =="YL_CONT_EMPL_YEAR"
			},
			isBecome(items){
				return items.FIELDNAME =="ACTION_DATE"
			},
			isOpinion(items){
				return items.FIELDNAME == "YL_APRV_OPINION"
			},
			isProbation(items){
				return items.FIELDNAME =="GC_PRB_PRD_DT"
			},
			isInterview(items){
				return items.FIELDNAME =="YL_RESULT"
			},
			isRestraint(items){
				return items.FIELDNAME =="YESNO_DROPDOWN2"
			},
			isRestdate(items){
				return items.FIELDNAME =="YL_LIMIT_MONTH"
			},
			isTest(items){
				return items.FIELDNAME =="YL_YESNO5"
			},
			isBills(items){
				return items.FIELDNAME =="YESNO_DROPDOWN"
			},
			isBills2(items){
				return items.FIELDNAME =="YL_YESNO7"
			},
			isSettltime(items){
				return items.FIELDNAME =="END_DT"
			},
			isDangerous(items){
				return items.FIELDNAME =="YL_FLAG1"
			},
			isValue(items) {
				return items.VALUE.VALUE.replace(/^\s+|\s+$/gm, '') == "";
			},
		    getNextDate(date,day) {  
			  var dd = new Date(date);
			  dd.setDate(dd.getDate() + day);
			  var y = dd.getFullYear();
			  var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
			  var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
			  return y + "-" + m + "-" + d;
			},
			showPopup0(items,index){			
				this.reArray.length=0;
				this.indexs = index;
				var arr = [];
				var wordlowType = this.eoawprcsid;
				var objTest = document.getElementsByClassName('iStest')[0];
				var objDangerous = document.getElementsByClassName('iSdangerous')[0];	
				var objRestraint = document.getElementsByClassName('restraint')[0];
				var objBill = document.getElementsByClassName('iSbill')[0];
				var objBill2 = document.getElementsByClassName('iSbill2')[0];
				if(objTest&&wordlowType=="YL_SSC_AWE_TER"){
						var indexs3 = objTest.getAttribute('index');	
						if(index == indexs3){
							 this.isThisval = true
						}else{
							 this.isThisval = false
						}
				}
				if(objDangerous&&wordlowType=="YL_SSC_AWE_XFR"){
						var indexs4 = objDangerous.getAttribute('index');	
						if(index == indexs4){
							 this.isThisval2 = true
						}else{
							 this.isThisval2 = false
						}					
				}
				
				if(objRestraint&&wordlowType=="YL_SSC_AWE_TER"){
						var indexs5 = objRestraint.getAttribute('index');	
						if(index == indexs5){
							 this.isThisval3 = true
						}else{
							 this.isThisval3 = false
						}					
				}
				
				if(objBill&&wordlowType=='YL_SSC_AWE_XFR'){
						var indexs6 = objBill.getAttribute('index');
						if(index == indexs6){
							 this.isThisval4 = true
						}else{
							 this.isThisval4 = false
						}	
				}
				if(objBill2&&wordlowType=='YL_SSC_AWE_XFR'){
						var indexs62 = objBill2.getAttribute('index');
						if(index == indexs62){
							 this.isThisval42 = true
						}else{
							 this.isThisval42 = false
						}	
				}
				for(var i=0;i<items.DS.length;i++){
					arr.push(items.DS[i].TEXT)
					this.reArray.push(items.DS[i].VALUE)					
				}
				this.data1 = [arr];

				this.$refs['picker'+index][0].show();
			},
			handlePicker0Confirm(v){
				console.log(this.$refs)
				this.itemRadio[this.indexs].value4 = v;			
				this.value = v ? JSON.stringify(v) : null;
				let objarea = JSON.parse(this.value);
				this.itemRadio[this.indexs].value1 = objarea[0].value;
				this.itemRadio[this.indexs].value3 = this.reArray[objarea[0].index];
				 
				let wordlowType = this.eoawprcsid;
				let objR = document.getElementsByClassName('years')[0];
				let objBecome = document.getElementsByClassName('become')[0];
				let objTest = document.getElementsByClassName('iStest')[0];
				let objBill = document.getElementsByClassName('iSbill')[0];
				let objBill2 = document.getElementsByClassName('iSbill2')[0];
				let objSetltime = document.getElementsByClassName('settlTime')[0];
				let objDangerous = document.getElementsByClassName('iSdangerous')[0];				
				let objInterview = document.getElementsByClassName('interview')[0];
				let objRestraint = document.getElementsByClassName('restraint')[0];
				let objRestdate = document.getElementsByClassName('restdate')[0];
				let objB = document.getElementsByClassName('bottom-btn')[0].getElementsByTagName('button');

				if(objR&&wordlowType=='YL_SSC_AWE_020'){
					for(var i=0;i<objB.length;i++){
						if(objarea[0].value!=" "){
							if(objB[i].name=='APVW'||objB[i].name=='REF'){
								objB[i].style.visibility="hidden"
							}	
						}else{
							objB[i].style.visibility="visible"
						}

					}			
				}
				if(objBill&&wordlowType=='YL_SSC_AWE_XFR'){
					let indexs4 = objBill.getAttribute('index');
					setTimeout(()=>{		
						if(this.$refs['picker'+indexs4][0].anchor.length>0){
							let values4 = this.$refs['picker'+indexs4][0].anchor[0].value;
							if(values4=="是"&&this.isThisval4){
								this.$messagebox.alert('请您在调动前办结费用报销')
							}
						}	
					},10)	
				}
				if(objBill2&&wordlowType=='YL_SSC_AWE_XFR'){
					let indexs42 = objBill2.getAttribute('index');
					setTimeout(()=>{		
						if(this.$refs['picker'+indexs42][0].anchor.length>0){
							let values42 = this.$refs['picker'+indexs42][0].anchor[0].value;
							if(values42=="是"&&this.isThisval42){
								this.$messagebox.alert('请您在调动前办结费用报销')
							}
						}	
					},10)	
				}
				if(objDangerous&&wordlowType=='YL_SSC_AWE_XFR'){
					let indexs6 = objDangerous.getAttribute('index');
					setTimeout(()=>{										
						if(this.$refs['picker'+indexs6][0].anchor.length>0){
							let values6 = this.$refs['picker'+indexs6][0].anchor[0].value;
							if(values6=="是"&&this.isThisval2){
								this.$messagebox.alert('已完成职业健康体检报告审核')
							}
						
						}
					},10)	
					
				}
				
				
				if(objBecome&&wordlowType=='YL_SSC_AWE_PRC'){
					let objBecomedate =objBecome.parentNode.nextElementSibling.getElementsByClassName('zhezhao')[0];
					let mastBtn = objBecome.getElementsByTagName('i')[0];
					let probation = document.getElementsByClassName('probation')[0].innerHTML;
					let mustFilename = document.getElementsByClassName('mustFilename');
					let str4 = this.$options.methods.getNextDate(probation,1);
					if(objarea[0].value=="同意按期转正"||objarea[0].value=="不同意转正"){
						console.log(1)
						objBecomedate.style.visibility="visible";
						objBecomedate.innerHTML= str4;
						mastBtn.style.visibility="hidden";
						objBecome.classList.remove('waring');
					}else{
						objBecomedate.style.visibility="hidden";
						mastBtn.style.visibility="visible";
						objBecome.classList.add('waring');
					}
					if(objarea[0].value=="不同意转正"){
						for(var i=0;i<mustFilename.length;i++){
							mustFilename[i].classList.remove('waring2');
							mustFilename[i].getElementsByTagName('i')[0].style.visibility = 'hidden'
							
						}
					}else{
						for(var i=0;i<mustFilename.length;i++){
							mustFilename[i].classList.add('waring2');
							mustFilename[i].getElementsByTagName('i')[0].style.visibility = 'visible'
							
						}
					}
				}
				if(objInterview&&wordlowType=='YL_SSC_AWE_TER'){
					
					let indexs2 = objInterview.getAttribute('index');
					setTimeout(()=>{
						if(this.$refs['picker'+indexs2][0].anchor.length>0){		
							let values2 = this.$refs['picker'+indexs2][0].anchor[0].value;	
							for(var i=0;i<objB.length;i++){
								if(values2=="留任"){
									if(objB[i].name=='APV'||objB[i].name=='PSH'){
										objB[i].style.visibility="hidden"
									}else{
										objB[i].innerHTML = "流程结束"
									}
																							
								}
								if(values2=="离职"){
									objB[i].style.visibility="visible"
									if(objB[i].name!='APV'&&objB[i].name!='PSH'){
										objB[i].innerHTML = "不同意"
									}
								}
							}
						}
						if(objRestraint&&wordlowType=='YL_SSC_AWE_TER'){
							let indexs = objRestraint.getAttribute('index');
							if(this.$refs['picker'+indexs][0].anchor.length>0){	
								let values = this.$refs['picker'+indexs][0].anchor[0].value;
								if(values=="否"&&this.isThisval3){
									objRestdate.parentNode.parentNode.style.display = 'none';
									objRestdate.getElementsByTagName('i')[0].style.visibility = 'hidden'
									objRestdate.classList.remove('waring');
									
								}
								if(values=="是"&&this.isThisval3){
									objRestdate.parentNode.parentNode.style.display = 'block';
									objRestdate.getElementsByTagName('i')[0].style.visibility = 'visible';
									objRestdate.classList.add('waring');
								}
							}	
						}
	
					},10)	
				}
				
				if(wordlowType=='YL_SSC_AWE_TER'&&objTest){

				  	let indexs3 = objTest.getAttribute('index');		
						setTimeout(()=>{
							if(this.$refs['picker'+indexs3][0].anchor.length>0){
								let values3 = this.$refs['picker'+indexs3][0].anchor[0].value;
								console.log(this.$refs['picker'+indexs3][0].display)
								if(values3=="是"&&this.isThisval){
										this.$messagebox.alert('已完成职业健康体检报告审核')
								}
						
						}
						},10)	
				}
			},
			openpicker2 (items,index) {
				let str = items.VALUE.VALUE;
				if(str!=""){
					let arr = str.split('-');
					let Y = arr[0]+"年";
					let M = parseInt(arr[1])+"月";
					let D = parseInt(arr[2])+"日";
					this.anchor=[{"value":Y},{"value":M},{"value":D}]
				}
				this.indexs = index;		
				this.$refs['picker'+index][0].show();
			},
			handlePicker2Confirm (v) {
			    this.value = v ? JSON.stringify(v) : null;
			    let objarea = JSON.parse(this.value);				
				let str =  parseInt(objarea[0].value) + '-' + parseInt(objarea[1].value) + '-' + parseInt(objarea[2].value);
			    let dd = new Date(str.replace(/-/g,'/'));
				console.log(dd)
				let y = dd.getFullYear();
				let m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
				let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
				this.itemRadio[this.indexs].value1 = y + "-" + m + "-" + d;
			
			},
			handleConfirm(picker, values) {
				console.log(picker.getValues()[0].value)
			},
			httpRequest(options) {
				console.log(options)
				var that = this;
				// 获取文件对象
				var file = options.file
				//判断图片类型
				var isJPG = file.type;
				console.log( file.type )
				if (isJPG!='image/jpeg'&&isJPG!='image/jpg'&&isJPG!='image/png') {
				
					var texts = document.getElementsByClassName('fileList')[0].getElementsByClassName('el-upload-list__item-name'); 
					this.isSure = false;
					
					for(var i=0;i<texts.length;i++){
						if(texts[i].innerText==options.file.name){
							texts[i].style.color = 'red';
							document.getElementById('waring2').scrollIntoView({behavior: "instant", block: "center", inline: "nearest"});
						}
					}
					this.$confirm('上传头像图片只能是 JPG/PNG/JPEG 格式!','',{
						showCancelButton:false,
						type:'warning',
						center:true
					});	

					console.log(this.isSure)
				}
				// 判断图片大小
				var isLt2M = file.size / 1024 / 1024 < 5
				if (!isLt2M) {	
					var texts = document.getElementsByClassName('fileList')[0].getElementsByClassName('el-upload-list__item-name'); 
					this.isSure = false;
					for(var i=0;i<texts.length;i++){
						if(texts[i].innerText==options.file.name){
							texts[i].style.color = 'red';
							document.getElementById('waring2').scrollIntoView({behavior: "instant", block: "center", inline: "nearest"});
						}
					}										
					this.$confirm('上传产品图片不能超过5M!','',{
						showCancelButton:false,
						type:'warning',
						center:true
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
							// console.log(newUrl);

							// this.dialogImageUrl = newUrl;

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
								"DESCR":options.filename,
								"FILENAME": options.file.name,
								"BASE64STRING": newUrl.split(',')[1]
							}
							that.filedata.push(arr2);
							console.log(that.filedata)
						}
					}
				}

			},

			beforeUpload(file) {

			},
			handleAvatarSuccess(file) {
				console.log(file);
			},
			handleExceed(files, fileList) {
				this.$message.warning(`只能上传一个文件`);
			},
			beforeRemove(file, fileList) {
				
			},
		}
	}
</script>

<style>
	.ApprovalMsg-box {
		padding-top: .8rem;
		padding-bottom: 1.3rem;
	}

	.ApprovalMsg-box h2 {
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

	.ApprovalMsg-box .el-collapse-item__wrap {
		padding: 0 10px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.ApprovalMsg-box .textleft {
		text-align: left;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-size: 14px;
	}

	.ApprovalMsg-box .textright {
		text-align: left;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-size: 14px;
		color: #666666;
	}

	.ApprovalMsg-box .textTop {
		text-align: right;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		color: #666666;
		font-size: 14px;
		position: relative;
		top: -0.1rem;
	}

	.ApprovalMsg-box .el-row {
		padding-top: 0.25rem;
		line-height: .35rem;
	}
	 .ApprovalMsg-box .fileList .el-row {
		/* border-bottom: 1px solid #badcff; */
		padding-bottom: .25rem;
	}
	.ApprovalMsg-box .examineinfo .el-row {
		padding-top: 0.25rem;
		line-height: .5rem;
	}

	.ApprovalMsg-box .ApprovalMsg-cont {
		padding: 10px;
		padding-bottom: 1rem;
	}

	.ApprovalMsg-box .el-collapse-item__header {
		font-size: 18px;
	}

	.ApprovalMsg-box .el-icon-title-left {
		width: .17rem;
		height: .4rem;
		background: #1CAAFE;
	}

	.ApprovalMsg-box .el-input__inner {
		width: 100%;
		height: .6rem;
		line-height: .3rem;
		padding: 0;
		font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
		border: none;
		border-bottom: 1px solid #d8d8d8;
		border-radius: 0;
	}

	.ApprovalMsg-box .navTitle {
		float: left;
		margin-top: .29rem;
		margin-right: .1rem;
	}

	.el-message-box {
		width: 80%;
	}

	.ApprovalMsg-box .el-upload-list__item .el-icon-upload-success {
		display: none;
	}

	.ApprovalMsg-box .el-progress__text {
		margin-right: .5rem;
		display: none;
	}

	.ApprovalMsg-box .el-collapse {
		border-bottom: none;
		border-top: none;
		position: relative;
		margin-bottom: 10px;
	}

	.ApprovalMsg-box .tableList {
		border-bottom: 1px solid #84b9ef;
		padding: .3rem .1rem;
	}

	.ApprovalMsg-box .tableList:last-child {
		border: none;
	}

	.ApprovalMsg-box .el-collapse-item__header {
		color: #007BFE;
		padding: 10px;
		height: .7rem;
		padding-left: 28px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	.ApprovalMsg-box .el-collapse-item__header:last-child {
		border-bottom: 1px solid #eee;
	}

	.ApprovalMsg-box .el-upload-list__item .el-icon-close {
		display: inline-block;
	}

	.el-upload-list__item.is-success:focus:not(:hover) .el-icon-close-tip {
		display: none;
	}

	.ApprovalMsg-box .el-button--small {
		font-size: 14px;
		padding: .1rem;
	}

	.ApprovalMsg-box .examineinfo .el-row {
		font-size: 14px;
		padding: .3rem;
	}

	.ApprovalMsg-box .examineinfo .el-row .el-col {
		border: 1px solid #67c23a;
		padding: .1rem .2rem;
		border-radius: .05rem;
		position: relative;
	}

	.ApprovalMsg-box .examineinfo .remarks {
		float: left;
		padding: .1rem;
		font-size: 13px;
		color: #606266;
	}

	.ApprovalMsg-box .examineinfo .kong {
		margin-left: .2rem;
	}

	.ApprovalMsg-box .examineinfo .bkong {
		width: 1.3rem;
		text-align: right;
		float: left;
	}

	.ApprovalMsg-box .navTitle-sl {
		padding: .3rem;
		font-size: 16px;
	}

	.ApprovalMsg-box .navTitle-sl .el-icon-title-left {
		width: 0.17rem;
		height: .35rem;
		background: #13CE66;
		float: left;
		margin-top: .08rem;
	}

	.ApprovalMsg-box .statusImg {
		position: absolute;
		right: .3rem;
		top: 0.62rem;
	}

	.ApprovalMsg-box .statusImg img {
		width: 1.5rem;
	}

	.ApprovalMsg-box .test_triangle_border .popup span {
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

	.ApprovalMsg-box .test_triangle_border .popup em {
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

	.ApprovalMsg-box .selectInput .el-input__icon {
		width: 4.8rem;
		text-align: right;
	}

	.ApprovalMsg-box .el-input__icon {
		line-height: normal;
	}

	.ApprovalMsg-box .ProveMsg-box .test_triangle_border .popup em {
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

	.ApprovalMsg-box .picker-toolbar-title {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		height: 40px;
		line-height: 40px;
		font-size: 16px;

	}

	.ApprovalMsg-box .usi-btn-cancel,
	.ApprovalMsg-box .usi-btn-sure {
		color: #FF6600
	}

	.el-button--success {
		color: #fff;
		background-color: #409EFF;
		border-color: #409EFF;
	}

	.Bottom-box {
		width: 100%;
		text-align: center;
		position: fixed;
		bottom: 0;
		background-color: #FFFFFF;
	}

	.Bottom-box .bottom-btn {
		padding: .1rem 0 .3rem;
	}

	.el-button--medium1 {
		width: 93%;
		padding: 10px 20px;
		font-size: 14px;
		border-radius: 4px;
	}

	.el-button--medium2 {
		width: 45%;
		padding: 10px 20px;
		font-size: 14px;
		border-radius: 4px;
	}

	.el-button--medium3 {
		width: 29%;
		padding: 10px 0;
		font-size: 14px;
		border-radius: 4px;
	}
	.ApprovalMsg-box .wordDetail li{
		text-indent: .5rem;
	}
	.ApprovalMsg-box .wordDetail li:first-child{
		text-indent: 0rem;
	}
	.ApprovalMsg-box input::-webkit-input-placeholder{
		color:#303133;
	}
	.ApprovalMsg-box input::-moz-placeholder{   /* Mozilla Firefox 19+ */
		color:#303133;
	}
	.ApprovalMsg-box input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
		color:#303133;
	}
	.ApprovalMsg-box input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
		color:#303133;
	}
	.mint-msgbox-message{
		overflow-y: scroll;
		max-height: 6rem;
	}
	.ApprovalMsg-box  .imgName {
		padding-bottom: .3rem;
	}
	.ApprovalMsg-box .addNewfile .el-icon-plus{
		font-size: 18px;
		color: #fff;
	}
	.ApprovalMsg-box .addNewfile .el-button{
		padding: 0.04rem .48rem;
	}
	.ApprovalMsg-box  .addNewfile .textright {
		text-align: right;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		color: #666666;
		font-size: 14px;
		padding-top: .08rem;
	}
	.ApprovalMsg-box  textarea.el-textarea__inner{
		padding: 5px 2px;
	}
	.ApprovalMsg-box .addNewfilelist textarea.el-textarea__inner {
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
	.ApprovalMsg-box .Bottom-box .bottom-btn .btnstyle {
		height:1rem;
		line-height: 1.2;
		white-space:pre-wrap;
	}
	 .ApprovalMsg-box .zhezhao {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 99;
		background: #fff;
		visibility: hidden;
		text-align: left;
		width: 100%;
		padding: .12rem 0 .25rem;
		font-weight: normal;
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
</style>
