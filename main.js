
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import { $http } from '@escook/request-miniprogram'
Vue.config.productionTip = false
uni.$http = $http
$http.baseUrl = 'https://www.uinav.com'

//请求拦截器
$http.beforeRequest = function (options){
	uni.showLoading({
		title: '数据加载中'
	})
}
//响应拦截器
$http.afterRequest = function () {
  uni.hideLoading()
}
//封装
uni.$showMsg  = function (title = '数据加载失败',duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon:'none'
	})
}
App.mpType = 'app'

const app = new Vue({ 
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif