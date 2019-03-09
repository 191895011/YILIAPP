<template>
	<div class="Bottom-box">
		<div class="bottom-btn" v-show="isOriginHei">
			  <el-button type="primary" @click="agreeSubmit" :disabled="isDisabled"   size="medium">同意</el-button>
			  <el-button type="primary" @click="refuseSubmit" size="medium">拒绝</el-button>
			  <el-button type="primary" size="medium">退回发起人</el-button>
		</div>
	</div>

</template>

<script>
	export default {
		name: "ApprovalBottom",
		data() {
			return {
				screenHeight: document.body.clientHeight,// 这里是给到了一个默认值 （这个很重要），
				originHeight: document.body.clientHeight,//默认高度在watch里拿来做比较
				isOriginHei:true,
				isDisabled:false,
				ApprovalTitle: {
					apv: '同意',
					dny: '拒绝',
					returns: '退回发起人'
				},
			}
		},
		mounted () {

		},
		methods: {
			agreeSubmit() {
				this.$bus.$emit("changes", true);
				
				this.isDisabled = true;
				setTimeout(() => {
				  this.isDisabled = false
				}, 3000);
					
			},
			refuseSubmit(){
				this.$bus.$emit("changes", false);
			}
		},
		beforeDestroy() {
		    //组件销毁前需要解绑事件。否则会出现重复触发事件的问题
		    this.$bus.$off("changes");
		}
		
	}
</script>

<style lang="stylus" scoped>
	.Bottom-box {
		width: 100%;
		text-align: center;
		position: fixed;
		bottom:0;
		background-color: #FFFFFF;
	}
	.Bottom-box .bottom-btn {
		padding: .1rem 0 .3rem;
	}
	.el-button--medium{
		width: 2rem;
	}
</style>
