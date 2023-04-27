<template>
	 <view class="my-search-container" :style="{'background-color': bgcolor}">
	   <view class="search-box">
	     <!-- 使用 uni-ui 提供的搜索组件 -->
	     <uni-search-bar @input="input" :radius="100" cancelButton="none"></uni-search-bar>
	   </view>
	  </view>
</template>

<script>
	export default {
		name:"my-search",
		data() {
			return {
				props: {
				  // 背景颜色
				  bgcolor: {
				    type: String,
				    default: '#C00000'
				  },
				  // 圆角尺寸
				  radius: {
				    type: Number,
				    // 单位是 px
				    default: 18
				  }
				}
			};
		},
		onLoad() {
			const sysInfo = uni.getSystemInfoSync()
			
		},
		methods:{
			searchBoxHandler(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
.my-search-container {
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
}

.my-search-box {
  height: 36px;
  background-color: #ffffff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .placeholder {
    font-size: 15px;
    margin-left: 5px;
  }
}
</style>