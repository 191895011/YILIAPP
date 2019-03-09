<template>
	<div class="Editbank-box">
		<div class="Editbank-nav">
			<router-link to="/">
				<div class="Editbank-back">
					<span class="iconfont">&#xe602;</span>
				</div>
			</router-link>
			<div class="Editbank-collection">
				<h4 class="Editbank-msgtitle">{{EditbankTitle.title}}</h4>
			</div>
			<div class="Editbank-refer">
				<router-link to="/">
					<h4 class="Editbank-submit">{{EditbankTitle.refer}}</h4>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"EditbankHeader",
		data() {
			return {
				EditbankTitle: {
					back: '',
					title: '人事系统',
					refer: '关闭'
				}
							
			};
		}
	}
</script>

<style lang="stylus" scoped>
	.Editbank-box .Editbank-nav {
		width: 100%;
		height: 1.2rem;
		position: fixed;
		top: 0;
		background-color: #FFFFFF;
		z-index: 999;
	}

	.Editbank-box .Editbank-nav .Editbank-back {
		box-sizing: border-box;
		float: left;
		width: 20%;
		height: 1.2rem;
		line-height: 1.2rem;
		padding-left: .4rem;
		font-size: 16px;
		color: #333;
	}

	.Editbank-box .Editbank-nav .Editbank-collection {
		box-sizing: border-box;
		float: left;
		width: 60%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.Editbank-box .Editbank-nav .Editbank-collection .Editbank-msgtitle {
		font-size: 20px;
		color: #666;
		text-align: center;
	}

	.Editbank-box .Editbank-nav .Editbank-refer {
		box-sizing: border-box;
		float: left;
		width: 20%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.Editbank-box .Editbank-nav .Editbank-refer .Editbank-submit {

		font-weight: 400;
		font-size: 16px;
		color: #303133;
		text-align: center;
	}

	@media screen and (max-width:321px) {
		.Editbank-box .Editbank-nav .Editbank-collection .Editbank-msgtitle {
			font-size: 18px;
		}

		.Editbank-box .Editbank-nav .Editbank-refer .Editbank-submit {
			font-size: 16px
		}
	}

	/*iPhoneX的适配*/
	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.Editbank-box .Editbank-nav {
			padding-left: constant(safe-area-inset-left);
			padding-right: constant(safe-area-inset-right);
			padding-top: constant(safe-area-inset-top);
			background-color: #FFFFFF;
		}
	}

	/*iPhone8P的适配*/
	@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
		.Editbank-box .Editbank-nav {
			background-color: #FFFFFF;
		}
	}
</style>
