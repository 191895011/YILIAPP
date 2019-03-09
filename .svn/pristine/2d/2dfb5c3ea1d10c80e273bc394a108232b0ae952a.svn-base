<template>
	<div class="workingprove-info">
		<div class="ProveMsg-box">
			<h2>{{approvalTitle}}</h2>
			<div class="ProveMsg-cont">
				<!--发起人信息-->
				<el-collapse v-model="activeNames" @change="handleChange">
					<div>
						<div class="yuan"></div>
						<el-collapse-item title="发起人信息" :name="1">
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">员工ID</div>
								</el-col>
								<el-col :span="14">
									<div v-html="launchid" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">员工姓名</div>
								</el-col>
								<el-col :span="14">
									<div v-html="launchnames" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">员工电话</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft">
										<div v-html="launchphones" class="grid-content  textleft"></div>
									</div>
								</el-col>
							</el-row>	
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">发起人所在单位</div>
								</el-col>
								<el-col :span="14">
									<div v-html="launchcompany" class="grid-content  textleft "></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">发起人所在部门</div>
								</el-col>
								<el-col :span="14">
									<div v-html="launchdepartment" class="grid-content  textleft"></div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright">发起人所属职务</div>
								</el-col>
								<el-col :span="14">
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
						<el-collapse-item title="在职证明申请" :name="2">
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright  waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>开具人ID</div>
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
									<div class="grid-content  textright marleft">开具人姓名</div>
								</el-col>
								<el-col :span="14">
									<div v-html="names" class="grid-content  textleft">李文豪</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright marleft">开具人所在部门</div>
								</el-col>
								<el-col :span="14">
									<div v-html="department" class="grid-content  textleft">奶粉销售部鲁豫大区鲁南区域</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>开具人电话</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft textTop">
										<el-input v-model="phones" placeholder="请输入电话号码">
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>证明用途</div>
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
							<el-row :gutter="40" v-show="useDetail">
								<el-col :span="10">
									<div id="useDetails" class="grid-content  textright"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>用途详述</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft textTop">
										<el-input v-model="YL_SEQ_USE" placeholder="请输入内容">
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright marleft">证明类型</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft">公司模板</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright  waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>公章类型</div>
								</el-col>
								<el-col :span="14">
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
								<el-col :span="10">
									<div class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>申请数量(份)</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft textTop">
										<el-input v-model="COUNT1" placeholder="请输入内容">
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>主送单位</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft textTop">
										<el-input v-model="YL_DEPT_DESCR" placeholder="请输入内容">
										</el-input>
									</div>
								</el-col>
							</el-row>
							<el-row :gutter="40">
								<el-col :span="10">
									<div class="grid-content  textright waring"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>接收方式</div>
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
							<el-row :gutter="40" v-show="address">
								<el-col :span="10">
									<div id="addresss" class="grid-content  textright"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>领取地址</div>
								</el-col>
								<el-col :span="14">
									<div class="grid-content  textleft textTop">
										<el-input v-model="ADDRESS1" placeholder="请输入内容">
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
						<el-collapse-item title="附件信息" :name="3">
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
							<div v-show="mustFiles">
								<el-row :gutter="40" v-show="isWorktable1">
									<el-col :span="10">
										<div id="isWorktable1" class="grid-content  textright"><i style="color: red;font-size: 18px;margin-top: .2rem;position: relative;top: .1rem;">*</i>请上传护照扫描件</div>
									</el-col>
									<el-col :span="14">
										<div class="grid-content  textleft textbottom">
											<el-upload class="upload-demo" style="cursor:pointer;" ref="mustFile1" action="" :http-request="httpRequest"
											 :limit="1" :on-exceed="handleExceed" :name="fileNames1" :before-remove="beforeRemove" :auto-upload="false">
												<el-button slot="trigger" size="small" type="primary">添加附件</el-button>
											</el-upload>
										</div>
									</el-col>
								</el-row>
							</div>
							<el-row :gutter="40" class="addNewfile">
								<el-col :span="10">
									<div class="grid-content  textright">其他附件</div>
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
				<el-collapse class="examineinfo" v-model="activeNames" @change="handleChange">
					<div>
						<div class="yuan"></div>
						<el-collapse-item title="提交备注" :name="5">
							<div class="yuan"></div>
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
		name: "ProveMsg",
		data() {
			return {
				approvalTitle: "在职证明开具",
				activeNames: [1, 2, 3, 5, 6],
				showToolbar: true,
				message: "请选择",
				isParty:false,
				dialogTableVisible:false,
				dialogTableVisible2:false,
				popupVisible: false,
				popupVisible1: false,
				popupVisible2: false,
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
				upList2: [],
				textarea2: '',
				workingproveType: '',
				dataSlots2: [{
					values: Valuelist.ReceiveType
				}],
				dataSlots11: [{
					values: Valuelist.proveUse
				}],
				state1: '',
				state2:'',
				state22:'',
				value:null,
				ReteatTime:'',
				anchor:[],
				gridData:[],
				gridData2:[],
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
				mustFiles:false,
				isWorktable1:false,
				fileNames1: '工作交接表',
				fileNames2: '签字版离职申请扫描件',
				fileNames3: '辞退公告',
				fileNames4: '辞退补偿金审批表',
				isSubimt: false,
				isNext: true,
				requestor:'',
				submit_dttm:'',
				COMMENTS:'',
				examineList:[],
				useDetail:false,
				address:false,
				ADDRESS1:'',
				COUNT1:'',
				YL_SEQ_TYPE:'',
				YL_SEAL_TYPE:'',
				YL_DEPT_DESCR:'',
				YL_USE_TYPE:'',
				YL_SEQ_USE:'',
				bankCont:'',
				sealCont:''
			}

		},
		created() {
			PERSONAL().then(res => {
				console.log(res)
				if(res.status=='0'){
					this.launchid = res.EMPLID;
					this.launchnames = res.NAME;
					this.launchbusiness = res.POSITION_DESCR;
					this.launchdepartment = res.TAX_AGENCY_DESC;
					this.launchcompany = res.DEPT_DESCR;
					this.launchphones = res.PHONE;
				}
			})
			let NBR = this.$route.query.TRANSACTION_NBR;
			if (NBR) {
				this.TRANSACTION_NBR = NBR;
				let params1 = {
						EOAWPRCS_ID: "YL_SSC_AWE_007",
						TRANSACTION_NBR: NBR,
						ENCRYPT: "0",
						DARFT:'Y'
					};
					FlowSelectDraft(params1).then(res => {
						console.log(res)
						var DATA1 = res.DATA[1].FIELDS;
						var files = res.FILEDATA.FILELIST;
						if (DATA1 != "") {
							this.state1 = DATA1[0].VALUE.TEXT;
							this.names = DATA1[1].VALUE.TEXT;
							this.department = DATA1[2].VALUE.TEXT;
							this.phones = DATA1[3].VALUE.TEXT;
							this.input101 = DATA1[4].VALUE.TEXT;
							this.input102 = DATA1[4].VALUE.VALUE;
							this.state2 = DATA1[6].VALUE.TEXT;
							this.state22 = DATA1[6].VALUE.VALUE;
							this.COUNT1 = DATA1[7].VALUE.TEXT;
							this.YL_DEPT_DESCR = DATA1[8].VALUE.TEXT;
							this.input201 = DATA1[9].VALUE.TEXT;
							this.input202 = DATA1[9].VALUE.VALUE;
						}
						if (files != "") {
							this.fileList = files
							console.log(this.fileList)
							console.log(this.fileList[0].DESCR)
						}
					});
			} else {
				let params2 = {
					EOAWPRCS_ID: 'YL_SSC_AWE_007'
				}
				TRANSACTION_NBR(params2).then(res => {
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
				let params3 = {
					EOAWPRCS_ID:'YL_SSC_AWE_007',
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
							EOAWPRCS_ID: "YL_SSC_AWE_007",
							TRANSACTION_NBR: this.TRANSACTION_NBR,
							DARFT: types,
							JSON_DATA: this.JSON_DATA,
							COMMENT:this.opinions
						};
						EchainPreView(params4,this.isFile).then(res => {
							var msg = res.msg;
							if(res.status=='0'){
								console.log(res)
								this.workflowShow = true;
								this.requestor = res.WORKFLOW.requestor;
								this.submit_dttm = res.WORKFLOW.submit_dttm;
								this.COMMENTS = res.WORKFLOW.COMMENTS;
								this.examineList = res.WORKFLOW.echain;
								if(this.isFile){
									setTimeout(function() {
										if (that.filedata.length > 0) {
											var params5 = {
												data:{
													"TOKEN": 'hrssc.yili.com',
													"OPRID": that.getCookie('oprid'),
													"EOAWPRCS_ID": 'YL_SSC_AWE_007',
													"TRANSACTION_NBR": that.TRANSACTION_NBR,
													"FILEDATA": that.filedata
												}
											};
											FILEUPLOAD(params5).then(res => {

											})
										}
									}, 2000)
								}
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
					let params6 = {
						EOAWPRCS_ID: "YL_SSC_AWE_007",
						TRANSACTION_NBR: that.TRANSACTION_NBR,
						DARFT: types,
						JSON_DATA: that.JSON_DATA,
						COMMENT:that.opinions
					};

						FlowSubmit(params6,this.isFile).then(res => {
							var msg = res.msg;
							if (res.status == '0') {
								var that = this;
								if (this.isFile) {
									setTimeout(function() {
										if (that.filedata.length > 0) {
											var params7 = {
												data:{
													"TOKEN": 'hrssc.yili.com',
													"OPRID": that.getCookie('oprid'),
													"EOAWPRCS_ID": 'YL_SSC_AWE_007',
													"TRANSACTION_NBR": that.TRANSACTION_NBR,
													"FILEDATA": that.filedata	
												}
											};
											FILEUPLOAD(params7).then(res => {
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
											})
											.catch(error => {
												console.log(error)
											})
										}
									}, 2000)
								} else {
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
						FIELDNAME: 'COUNT1',
						VALUE: this.COUNT1
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
				if (this.$refs.FILE) {
					for (var i = 0; i < this.$refs.FILE.length; i++) {
						if (this.$refs.FILE[i].uploadFiles.length > 0) {
							this.isFile = true
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
					if (isfile1 || isfile2 || isfile3 || isfile4 || isfile5 || isfile6 || isfile7 || isfile8 || isfile9 || isfile10||mustFile1) {
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
						that.$refs.mustFile1.submit();
					}
					if (that.$refs.FILE) {
						for (var i = 0; i < that.$refs.FILE.length; i++) {
							that.$refs.FILE[i].submit();
						}
					}
				}


			},
			editShow(row,_index){
				this.state1 = row.emplid;
				this.names = row.name;
				this.department = row.position;
				this.phones = row.phone;
				this.dialogTableVisible = false;
				this.bankCont='';
			},
			editShow2(row,_index){
				console.log(row)
				this.state22 = row.seal_cd;
				this.state2 = row.sealdescr;
				this.dialogTableVisible2 = false;
				this.sealCont = '';
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
				if (this.input102 == 'B') {
					this.isWorktable1 = true;
					document.getElementById('isWorktable1').classList.add('waringss');
				}else{
					this.isWorktable1 = false;
					document.getElementById('isWorktable1').classList.remove('waringss');
				}
				if(this.input102 == 'O'){
					this.useDetail = true
					document.getElementById('useDetails').classList.add('waring');
				}else{
					this.useDetail = false
					document.getElementById('useDetails').classList.remove('waring');
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
				if (this.input202 == 'B') {
					this.address = true
					document.getElementById('addresss').classList.add('waring');
				}else{
					this.address = false
					document.getElementById('addresss').classList.remove('waring');
				}
			},
			handleIconClick1() {
				if(this.bankCont!=''){
					let params8 = {
						SECURITY:'T',
						DATA_TYPE:'EMPLOYEE',
						KEYWORDS:this.bankCont
					 };
					Magnifier(params8).then(res=> {
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
				if(this.sealCont!=''){
					let params9 = {
						SECURITY:'N',
						DATA_TYPE:'SEAL',
						KEYWORDS:this.sealCont
					 };
					Magnifier(params9).then(res=> {
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
		margin-bottom: 1.3rem;
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
		color: #666666;
		font-size: 14px;
	}
	.workingprove-info .ProveMsg-box .marleft{
		padding-left: 7px;
	}
	.workingprove-info .textTop {
		text-align: right;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		color: #666666;
		font-size: 14px;
		position: relative;
		top: -0.14rem;
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
		color: #666666;
		font-size: 14px;
		padding-top: .08rem;
	}
	.workingprove-info .addNewfilelist textarea.el-textarea__inner {
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
