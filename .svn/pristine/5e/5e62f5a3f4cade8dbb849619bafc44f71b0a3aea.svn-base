<template>
	<div class="workingprove-box">
		<div class="workingprove-nav">
			<router-link to="/">
				<div class="workingprove-back">
					<span class="iconfont">&#xe602;</span>
				</div>
			</router-link>
			<div class="workingprove-collection">
				<h4 class="workingprove-msgtitle">{{workingproveTitle.title}}</h4>
			</div>
			<div class="workingprove-refer">
				<router-link to="/">
					<h4 class="workingprove-submit">{{workingproveTitle.refer}}</h4>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "WorkingHeader",
		data() {
			return {
				workingproveTitle: {
					back: '',
					title: '人事系统',
					refer: '关闭'

				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.workingprove-box .workingprove-nav {
		width: 100%;
		height: 1.2rem;
		position: fixed;
		top: 0;
		background-color: #FFFFFF;
		z-index: 999;
	}

	.workingprove-box .workingprove-nav .workingprove-back {
		box-sizing: border-box;
		float: left;
		width: 20%;
		height: 1.2rem;
		line-height: 1.2rem;
		padding-left: .4rem;
		font-size: 16px;
		color: #333;
	}

	.workingprove-box .workingprove-nav .workingprove-collection {
		box-sizing: border-box;
		float: left;
		width: 60%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.workingprove-box .workingprove-nav .workingprove-collection .workingprove-msgtitle {
		font-size: 20px;
		color: #666;
		text-align: center;
	}

	.workingprove-box .workingprove-nav .workingprove-refer {
		box-sizing: border-box;
		float: left;
		width: 20%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.workingprove-box .workingprove-nav .workingprove-refer .workingprove-submit {

		font-weight: 400;
		font-size: 16px;
		color: #303133;
		text-align: center;
	}

	@media screen and (max-width:321px) {
		.workingprove-box .workingprove-nav .workingprove-collection .workingprove-msgtitle {
			font-size: 18px;
		}

		.workingprove-box .workingprove-nav .workingprove-refer .workingprove-submit {
			font-size: 16px
		}
	}

	/*iPhoneX的适配*/
	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.workingprove-box .workingprove-nav {
			padding-left: constant(safe-area-inset-left);
			padding-right: constant(safe-area-inset-right);
			padding-top: constant(safe-area-inset-top);
			background-color: #FFFFFF;
		}
	}

	/*iPhone8P的适配*/
	@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
		.workingprove-box .workingprove-nav {
			background-color: #FFFFFF;
		}
	}
</style>
