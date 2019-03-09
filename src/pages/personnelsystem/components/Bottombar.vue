<template>
	<div class="Homepage-bottom">
		<div class="tabbar">
		  <!--Tabber-->
		  <mt-tabbar v-model="active">
			<mt-tab-item id="homepage">
			  <img slot="icon" src="@/assets/img/shou2.png">
			  首页
			</mt-tab-item>
			<mt-tab-item id="processconter">
			  <img slot="icon" src="@/assets/img/liu.png">
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
		name: "ComBottombar",
		data() {
			return {
				active:'homepage',
				tokens:'',
				oprids:''
			};
		},
		created() {
			var that = this
			setTimeout(()=>{
				this.$bus.$on("changes",function(data){
					console.log(data);
				  that.tokens = data[0].token;
				  that.oprids = data[0].oprid;
				});				
			},1000)
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
	.Homepage-bottom{
		width: 100%;
		text-align: center;
		position: fixed;
		bottom:0;
		z-index: 999;
		background-color: #FFFFFF;
	}
	.Homepage-bottom .mint-tab-item:nth-child(2) .mint-tab-item-label,
	.Homepage-bottom .mint-tab-item:nth-child(3) .mint-tab-item-label
	{
		color: #8a8a8a;
	}

	.Homepage-bottom .mint-tab-item{
		padding: 4px 0;
	}
</style>
