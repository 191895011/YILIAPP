<template>
	<div class="Agency-box">
		<div class="Agency-nav">
			<router-link to="/">
				<div class="Agency-back">
					<span class="iconfont"></span>
				</div>
			</router-link>
			<div class="Agency-collection">
				<h4 class="Agency-msgtitle">{{AgencyTitle.title}}</h4>
			</div>
			<div class="Agency-refer">
				<router-link to="/">
					<h4 class="Agency-submit"></h4>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AgencyHeader",
		data() {
			return {
				AgencyTitle: {
					back: '',
					title: '流程中心',
					refer: '关闭'

				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.Agency-box .Agency-nav {
		width: 100%;
		height: 1.2rem;
		position: fixed;
		top: 0;
		background-color: #FFFFFF;
		z-index: 999;
	}

	.Agency-box .Agency-nav .Agency-back {
		box-sizing: border-box;
		float: left;
		width: 20%;
		height: 1.2rem;
		line-height: 1.2rem;
		padding-left: .4rem;
		font-size: 16px;
		color: #333;
	}

	.Agency-box .Agency-nav .Agency-collection {
		box-sizing: border-box;
		float: left;
		width: 60%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.Agency-box .Agency-nav .Agency-collection .Agency-msgtitle {
		font-size: 20px;
		color: #666;
		text-align: center;
	}

	.Agency-box .Agency-nav .Agency-refer {
		box-sizing: border-box;
		float: left;
		width: 20%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.Agency-box .Agency-nav .Agency-refer .Agency-submit {

		font-weight: 400;
		font-size: 16px;
		color: #303133;
		text-align: center;
	}

	@media screen and (max-width:321px) {
		.Agency-box .Agency-nav .Agency-collection .Agency-msgtitle {
			font-size: 18px;
		}

		.Agency-box .Agency-nav .Agency-refer .Agency-submit {
			font-size: 16px
		}
	}

	/*iPhoneX的适配*/
	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.Agency-box .Agency-nav {
			padding-left: constant(safe-area-inset-left);
			padding-right: constant(safe-area-inset-right);
			padding-top: constant(safe-area-inset-top);
			background-color: #FFFFFF;
		}
	}

	/*iPhone8P的适配*/
	@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
		.Agency-box .Agency-nav {
			background-color: #FFFFFF;
		}
	}
</style>
