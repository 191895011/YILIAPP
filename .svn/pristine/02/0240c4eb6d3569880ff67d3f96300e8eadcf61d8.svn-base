<template>
	<div class="Agency-bottom">
		<div class="tabbar">
		  <!--Tabber-->
		  <mt-tabbar v-model="active">
			<mt-tab-item id="homepage">
			  <img slot="icon" src="@/assets/img/shou.png">
			  首页
			</mt-tab-item>
			<mt-tab-item id="processconter">
			  <img slot="icon" src="@/assets/img/liu2.png">
			  流程中心
			</mt-tab-item>
			<mt-tab-item id="question">
			  <img slot="icon" src="@/assets/img/wen.png">
			  问题咨询
			</mt-tab-item>
		  </mt-tabbar>	
		</div>		
	</div>
</template>

<script>
	export default {
		name: "AgencyBottombar",
		data() {
			return {
				active:'processconter',
			};
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
				  this.$router.push('');
				break;
			  }
			}
		}
	}
</script>

<style>
	.Agency-bottom{
		width: 100%;
		text-align: center;
		position: fixed;
		bottom:0;
		z-index: 999;
		background-color: #FFFFFF;
	}
	.Agency-bottom .mint-tab-item:nth-child(1) .mint-tab-item-label,
	.Agency-bottom .mint-tab-item:nth-child(3) .mint-tab-item-label
	{
		color: #8a8a8a;
	}
	.mint-tab-item{
		padding: 4px 0;
	}
</style>
