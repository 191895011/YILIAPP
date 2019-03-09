<template>
	<div class="Editbankbottom-box">
		<div class="Editbankbottom-btn">
			  <el-button v-if="nextShow" @click="textingInfo()" type="primary" size="medium">下一步</el-button>
				<el-button v-if="submitShow" @click="sucSubmit()" type="primary" size="medium">提交</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name:"EditbankBottom",
		data() {
			return {
					submitShow:false,
					nextShow:true
			}
		},
		methods: {
			textingInfo(){
				this.submitShow=true;
				this.nextShow=false;
				this.$bus.$emit("changes", true);
			},
			sucSubmit(){
        this.$confirm('信息提交后将无法更改，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        })
      
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.Editbankbottom-box {
		width: 100%;
		text-align: center;
		position: fixed;
		bottom:0;
		background-color: #FFFFFF;
	}
	.Editbankbottom-box .Editbankbottom-btn {
		padding: .1rem 0 .3rem;
	}
	
	.el-button--medium{
		width: 2rem;
	}
</style>
