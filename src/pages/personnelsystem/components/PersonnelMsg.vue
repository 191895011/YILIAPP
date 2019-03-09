<template>
	<div class="PersonnelMsg-box">
		<div class="element-box">
			<router-link to="/myagency">
				<el-row :gutter="20">
					<el-col :span="24">
						<div class="grid-content bg-purple">流程中心</div>
					</el-col>
				</el-row>
			</router-link>
			<router-link to="/workingprove">
				<el-row :gutter="20">
					<el-col :span="24">
						<div class="grid-content bg-purple">跳转到在职证明开具页</div>
					</el-col>
				</el-row>
			</router-link>
			<router-link to="/incomeprove">
				<el-row :gutter="20">
					<el-col :span="24">
						<div class="grid-content bg-purple">跳转到收入证明开具页</div>
					</el-col>
				</el-row>
			</router-link>
			<router-link to="/editbankaccount">
				<el-row :gutter="20">
					<el-col :span="24">
						<div class="grid-content bg-purple">跳转到银行账户修改页</div>
					</el-col>
				</el-row>
			</router-link>
		</div>
		<!-- <div style="width: 100%;">cookie---:{{stamp}}</div> -->
			<div class="Homepage-bottom">
			<div class="tabbar">
			  <!--Tabber-->
			  <mt-tabbar v-model="active">
				<mt-tab-item id="homepage">
				  <img slot="icon" src="@/assets/img/shou2.png">
				  首页
				</mt-tab-item>
				<mt-tab-item id="processconter">
				  <img slot="icon" src="@/assets/img/liu.png">
				  流程中心
				</mt-tab-item>
				<mt-tab-item id="question">
				  <img slot="icon" src="@/assets/img/wen.png">
				  问题咨询
				</mt-tab-item>
			  </mt-tabbar>	
			</div>		
		</div>
	</div>
</template>

<script>
	export default {
		name: 'PersonnelMsg',
		data() {
			return {
				active:'homepage',
				oprid: '',
				url: '',
				num:'',
				data:[],
				token:'',
				stamp:'',
				fileList:[]
			};
		},
		created() {
			var Request = this.GetRequest();
			var loginid = Request['loginid'];
			var stamp = Request['stamp'];
			var token = Request['token'];
			var tokens = sha1('yilihr' + loginid + stamp);
			if (tokens == token) {
				this.setCookie('token','hrssc.yili.com');
				this.setCookie('oprid',loginid);										
			}
			
			
			
			
			
// 		 
// 			if(window.location.indexOf("?") != -1){
// 				var Request = this.GetRequest();
// 				var loginid = Request['loginid'];
// 				var stamp = Request['stamp'];
// 				var token = Request['token'];
// 				var tokens = sha1('yilihr' + loginid + stamp);
// 				if (tokens == token) {
// 					this.setCookie('token','hrssc.yili.com');
// 					this.setCookie('oprid',loginid);										
// 				}
// 				else{
// 					this.$messagebox.alert('验证失败').then(() => {
// 						window.history.back()
// 					})
// 				} 
// 			}
// 			if(window.location.indexOf("?")== -1&&!this.getCookie('oprid')){
// 				this.$messagebox.alert('验证失败').then(() => {
// 					window.history.back()
// 				})
// 			}
		},
		methods: {
			GetRequest() {
				var url = window.location.href; //获取url中"?"符后的字串 
				//var url = '?loginid=10003031&stamp=123456&token=24b3af5abed21c13bd747089bc54f5bd786b4aa0';
				//var url = '?loginid=00143669&stamp=123456&token=7fcc12f09fbf0aa0cad3a99e15b48b3c09b4c0ab';
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
			      submitUpload() {
			  this.$refs.upload.submit();
			},
			handleRemove(file, fileList) {
			  console.log(file, fileList);
			},
			handlePreview(file) {
			  console.log(file);
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
			},
		 $route(to,from){
    console.log(to.path);
		}
  
		}
	}
</script>

<style>
	.PersonnelMsg-box {
		margin-top: 1.3rem;
		margin-bottom: 1.3rem;
	}

	h3 {
		color: #303133;
	}

	.PersonnelMsg-box .el-row {
		padding: .3rem 1rem;
		text-align: center;
		vertical-align: middle;

	}

	.PersonnelMsg-box .el-col {
		border-radius: 4px;
		line-height: 36px;
	}

	.PersonnelMsg-box .bg-purple-dark {
		background: #99a9bf;
	}

	.PersonnelMsg-box .bg-purple {
		background: #d3dce6;
	}

	.PersonnelMsg-box .bg-purple-light {
		background: #e5e9f2;
	}

	.PersonnelMsg-box .grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.PersonnelMsg-box .row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.PersonnelMsg-box .element-box {
		overflow: hidden;
		overflow-y: scroll;
		height: 8rem;
	}
	
	.Homepage-bottom{
		width: 100%;
		text-align: center;
		position: fixed;
		bottom:0;
		z-index: 999;
		background-color: #FFFFFF;
	}
	.Homepage-bottom .mint-tab-item:nth-child(2) .mint-tab-item-label,
	.Homepage-bottom .mint-tab-item:nth-child(3) .mint-tab-item-label
	{
		color: #8a8a8a;
	}
	
	.Homepage-bottom .mint-tab-item{
		padding: 4px 0;
	}
</style>
