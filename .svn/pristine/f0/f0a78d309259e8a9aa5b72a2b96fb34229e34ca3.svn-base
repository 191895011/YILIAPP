<template>
	<div class="Search-box">
		<div class="Search-nav">
			<router-link to="/myagency">
				<div class="Search-back">
					<span class="iconfont">&#xe602;</span>
				</div>
			</router-link>
			<div class="Search-collection">
				<h4 class="Search-msgtitle">{{SearchTitle.title}}</h4>
			</div>
			<div class="Search-refer">
				<router-link to="/myagency">
					<h4 class="Search-submit">{{SearchTitle.refer}}</h4>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SearchHeader",
		data() {
			return {
				SearchTitle: {
					back: '',
					title: '我的待办',
					refer: '关闭'

				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.Search-box .Search-nav {
		width: 100%;
		height: 1.2rem;
		position: fixed;
		top: 0;
		background-color: #FFFFFF;
		z-index: 999;
	}

	.Search-box .Search-nav .Search-back {
		box-sizing: border-box;
		float: left;
		width: 20%;
		height: 1.2rem;
		line-height: 1.2rem;
		padding-left: .4rem;
		font-size: 16px;
		color: #333;
	}

	.Search-box .Search-nav .Search-collection {
		box-sizing: border-box;
		float: left;
		width: 60%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.Search-box .Search-nav .Search-collection .Search-msgtitle {
		font-size: 20px;
		color: #666;
		text-align: center;
	}

	.Search-box .Search-nav .Search-refer {
		box-sizing: border-box;
		float: left;
		width: 20%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.Search-box .Search-nav .Search-refer .Search-submit {

		font-weight: 400;
		font-size: 16px;
		color: #303133;
		text-align: center;
	}

	@media screen and (max-width:321px) {
		.Search-box .Search-nav .Search-collection .Search-msgtitle {
			font-size: 18px;
		}

		.Search-box .Search-nav .Search-refer .Search-submit {
			font-size: 16px
		}
	}

	/*iPhoneX的适配*/
	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.Search-box .Search-nav {
			padding-left: constant(safe-area-inset-left);
			padding-right: constant(safe-area-inset-right);
			padding-top: constant(safe-area-inset-top);
			background-color: #FFFFFF;
		}
	}

	/*iPhone8P的适配*/
	@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
		.Search-box .Search-nav {
			background-color: #FFFFFF;
		}
	}
</style>
