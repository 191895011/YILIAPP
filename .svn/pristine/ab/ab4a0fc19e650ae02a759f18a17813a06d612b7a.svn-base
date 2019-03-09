<template>
	<div class="Approval-box">
		<div class="Approval-nav">
			<router-link to="/">
				<div class="Approval-back">
					<span class="iconfont">&#xe602;</span>
				</div>
			</router-link>
			<div class="Approval-collection">
				<h4 class="Approval-msgtitle">{{ApprovalTitle.title}}</h4>
			</div>
			<div class="Approval-refer">
				<router-link to="/">
					<h4 class="Approval-submit">{{ApprovalTitle.refer}}</h4>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ApprovalHeader",
		data() {
			return {
				ApprovalTitle: {
					back: '',
					title: '人事系统',
					refer: '关闭'

				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.Approval-box .Approval-nav {
		width: 100%;
		height: 1.2rem;
		position: fixed;
		top: 0;
		background-color: #FFFFFF;
		z-index: 999;
	}

	.Approval-box .Approval-nav .Approval-back {
		box-sizing: border-box;
		float: left;
		width: 20%;
		height: 1.2rem;
		line-height: 1.2rem;
		padding-left: .4rem;
		font-size: 16px;
		color: #333;
	}

	.Approval-box .Approval-nav .Approval-collection {
		box-sizing: border-box;
		float: left;
		width: 60%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.Approval-box .Approval-nav .Approval-collection .Approval-msgtitle {
		font-size: 20px;
		color: #666;
		text-align: center;
	}

	.Approval-box .Approval-nav .Approval-refer {
		box-sizing: border-box;
		float: left;
		width: 20%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.Approval-box .Approval-nav .Approval-refer .Approval-submit {

		font-weight: 400;
		font-size: 16px;
		color: #303133;
		text-align: center;
	}

	@media screen and (max-width:321px) {
		.Approval-box .Approval-nav .Approval-collection .Approval-msgtitle {
			font-size: 18px;
		}

		.Approval-box .Approval-nav .Approval-refer .Approval-submit {
			font-size: 16px
		}
	}

	/*iPhoneX的适配*/
	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.Approval-box .Approval-nav {
			padding-left: constant(safe-area-inset-left);
			padding-right: constant(safe-area-inset-right);
			padding-top: constant(safe-area-inset-top);
			background-color: #FFFFFF;
		}
	}

	/*iPhone8P的适配*/
	@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
		.Approval-box .Approval-nav {
			background-color: #FFFFFF;
		}
	}
</style>
