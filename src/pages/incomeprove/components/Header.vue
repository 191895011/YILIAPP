<template>
	<div class="incomeprove-box">
		<div class="incomeprove-nav">
			<router-link to="/">
				<div class="incomeprove-back">
					<span class="iconfont">&#xe602;</span>
				</div>
			</router-link>
			<div class="incomeprove-collection">
				<h4 class="incomeprove-msgtitle">{{incomeproveTitle.title}}</h4>
			</div>
			<div class="incomeprove-refer">
				<router-link to="/">
					<h4 class="incomeprove-submit">{{incomeproveTitle.refer}}</h4>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "IncomeHeader",
		data() {
			return {
				incomeproveTitle: {
					back: '',
					title: '人事系统',
					refer: '关闭'

				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.incomeprove-box .incomeprove-nav {
		width: 100%;
		height: 1.2rem;
		position: fixed;
		top: 0;
		background-color: #FFFFFF;
		z-index: 999;
	}

	.incomeprove-box .incomeprove-nav .incomeprove-back {
		box-sizing: border-box;
		float: left;
		width: 20%;
		height: 1.2rem;
		line-height: 1.2rem;
		padding-left: .4rem;
		font-size: 16px;
		color: #333;
	}

	.incomeprove-box .incomeprove-nav .incomeprove-collection {
		box-sizing: border-box;
		float: left;
		width: 60%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.incomeprove-box .incomeprove-nav .incomeprove-collection .incomeprove-msgtitle {
		font-size: 20px;
		color: #666;
		text-align: center;
	}

	.incomeprove-box .incomeprove-nav .incomeprove-refer {
		box-sizing: border-box;
		float: left;
		width: 20%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.incomeprove-box .incomeprove-nav .incomeprove-refer .incomeprove-submit {

		font-weight: 400;
		font-size: 16px;
		color: #303133;
		text-align: center;
	}

	@media screen and (max-width:321px) {
		.incomeprove-box .incomeprove-nav .incomeprove-collection .incomeprove-msgtitle {
			font-size: 18px;
		}

		.incomeprove-box .incomeprove-nav .incomeprove-refer .incomeprove-submit {
			font-size: 16px
		}
	}

	/*iPhoneX的适配*/
	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.incomeprove-box .incomeprove-nav {
			padding-left: constant(safe-area-inset-left);
			padding-right: constant(safe-area-inset-right);
			padding-top: constant(safe-area-inset-top);
			background-color: #FFFFFF;
		}
	}

	/*iPhone8P的适配*/
	@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
		.incomeprove-box .incomeprove-nav {
			background-color: #FFFFFF;
		}
	}
</style>
