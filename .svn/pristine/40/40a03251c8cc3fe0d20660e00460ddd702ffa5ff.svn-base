<template>
	<div class="SearchMsg-info">
		<div class="Search-box">
			<h2>{{approvalTitle}}</h2>
			<div class="Search-cont">
				<div>
					<el-row :gutter="20">
						<el-col :span="6">
							<div class="grid-content  textright textbottom">关键字</div>
						</el-col>
						<el-col :span="18">
							<div class="grid-content  textleft">
								<el-input placeholder="请输入内容">
								</el-input>
							</div>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="6">
							<div class="grid-content  textright textbottom">发起时间</div>
						</el-col>
						<el-col :span="18">
							<div class="grid-content  textleft">
								<el-input class="selectInput" placeholder="开始日期" v-model="inputs" readonly unselectable="on">
									<i slot="suffix" @click="openpicker1" class="el-input__icon el-icon-date"></i>
								</el-input><span style="position: relative;top: .04rem;font-size: 14px;">至</span>
								<el-input class="selectInput" placeholder="结束日期" v-model="inpute" readonly unselectable="on">
									<i slot="suffix" @click="openpicker2" class="el-input__icon el-icon-date"></i>
								</el-input>
							</div>
							<awesome-picker
							  ref="pickerdata1"
							  textTitle="请选择"
							  type="date"
							  :anchor="anchor1"
							  :swipeTime="3000"
							  @confirm="handlePicker1Confirm">
							</awesome-picker>
							<awesome-picker
							  ref="pickerdata2"
							  textTitle="请选择"
							  type="date"
							  :anchor="anchor2"
							  :swipeTime="3000"
							  @confirm="handlePicker2Confirm">
							</awesome-picker>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
		<div class="Search-bottom">
			<div class="bottom-btn">
				<el-button  type="primary"  size="medium">搜索</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SearchMsg",
		data() {
			return {
				approvalTitle: "搜索",
				inputs:'',
				inpute:'',
				anchor1:[],
				anchor2:[]
			}
		},

		methods: {
			openpicker1() {
				this.$refs.pickerdata1.show();
			},

			openpicker2 () {		
				this.$refs.pickerdata2.show();
			},
			handlePicker1Confirm (v) {
			  this.value = v ? JSON.stringify(v) : null;
			  let objarea = JSON.parse(this.value);				
			  this.inputs = parseInt(objarea[0].value) + '-' + parseInt(objarea[1].value) + '-' + parseInt(objarea[2].value)
			},
			handlePicker2Confirm (v) {
			  this.value = v ? JSON.stringify(v) : null;
			  let objarea = JSON.parse(this.value);				
			  this.inpute = parseInt(objarea[0].value) + '-' + parseInt(objarea[1].value) + '-' + parseInt(objarea[2].value)
			},
		}

	}
</script>

<style>
	.SearchMsg-info .Search-box {
		background: #FFFFFF;
		min-height: 100vh;
	}

	.SearchMsg-info .Search-box h2 {
		font-weight: bolder;
		font-size: 19px;
		color: #FFF;
		width: 100%;
		margin: auto;
		background-color: #007BFE;
		z-index: 999;
		padding: 0.2rem .2rem;
	}

	.SearchMsg-info .Search-box .textleft {
		text-align: left;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-size: 14px;
		border-bottom: 1px solid #eee;
	}

	.SearchMsg-info .Search-box .textright {
		text-align: right;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		font-weight: bold;
		font-size: 14px;
	}

	.SearchMsg-info .Search-box .textbottom {
		position: relative;
		top: 0.2rem;
	}

	.SearchMsg-info .Search-box .el-row {
		padding-top: 0.25rem;
		line-height: .35rem;
	}

	.SearchMsg-info .examineinfo .el-row {
		padding-top: 0.25rem;
		line-height: .5rem;
	}

	.SearchMsg-info .Search-box .Search-cont {
		width: 100%;
		margin: 1.2rem auto 0;
	}

	.SearchMsg-info .el-collapse-item__wrap {
		width: 98%;
		margin-left: 1%;
	}

	.el-select .el-input.is-focus .el-input__inner {
		border-color: #d8d8d8;
	}

	.SearchMsg-info .Search-box .el-input__inner {
		width: 100%;
		height: .7rem;
		line-height: .3rem;
		padding: 0 5px;
		font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
		border: none;
		border-radius: 0;
	}
	.SearchMsg-info .selectInput{
		width: 45%;
	}
	.SearchMsg-info .selectInput .el-input__icon {
		width: 2.5rem;
		text-align: right;
		line-height: 0rem;
	}
	.Search-bottom {
		width: 100%;
		text-align: center;
		position: fixed;
		bottom:0;
		background-color: #FFFFFF;
	}
	.Search-bottom .bottom-btn {
		padding: .1rem 0 .3rem;
	}
	.Search-bottom .el-button--medium{
		width:90%;
	}
	
	.SearchMsg-info .Search-box .pt-submit{
		color: #0000FF;
	}
	
</style>
