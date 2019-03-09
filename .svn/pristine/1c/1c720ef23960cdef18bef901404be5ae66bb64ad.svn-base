<template>
	<div class="Personnel-box">
		<div class="Personnel-nav">
			<div class="Personnel-collection">
				<h4 class="Personnel-msgtitle">{{PersonnelTitle.title}}</h4>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: "PersonnelHeader",
		data() {
			return {
				PersonnelTitle: {
					title: '人事系统'			
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.Personnel-box .Personnel-nav {
		width: 100%;
		height: 1.2rem;
		position: fixed;
		top: 0;
		background-color: #FFFFFF;
		z-index: 999;
	}

	.Personnel-box .Personnel-nav .Personnel-collection {
		box-sizing: border-box;
		float: left;
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.Personnel-box .Personnel-nav .Personnel-collection .Personnel-msgtitle {
		font-size: 20px;
		color: #666;
		text-align: center;
	}



	@media screen and (max-width:321px) {
		.Personnel-box .Personnel-nav .Personnel-collection .Personnel-msgtitle {
			font-size: 18px;
		}
	}

	/*iPhoneX的适配*/
	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.Personnel-box .Personnel-nav {
			padding-left: constant(safe-area-inset-left);
			padding-right: constant(safe-area-inset-right);
			padding-top: constant(safe-area-inset-top);
			background-color: #FFFFFF;
		}
	}

	/*iPhone8P的适配*/
	@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
		.Personnel-box .Personnel-nav {
			background-color: #FFFFFF;
		}
	}
</style>
