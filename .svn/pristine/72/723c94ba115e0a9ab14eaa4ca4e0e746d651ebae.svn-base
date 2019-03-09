import Vue from 'vue'
import axios from 'axios'

const service = axios.create({
  baseURL: "http://1.180.3.61:8766/SSCUAT/PSIGW/RESTListeningConnector/PSFT_HR/", // 请求前缀
  timeout: 10000 // 请求超时时间
});

// service.defaults.withCredentials = true;
// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器
service.interceptors.request.use(function (config) {
  if (!config.noLoading) {
    Vue.prototype.$loading({
      body: true,
      text: "读取中",
      spinner: "el-icon-loading",
      background: "rgba(255, 255, 255, 0.8)"
    });
  }
  if (!config.data) {
    config.data = {};
  }
  config.data.TOKEN = Vue.prototype.getCookie("token")
  config.data.OPRID = Vue.prototype.getCookie("oprid")

  return config;
}, function (error) {
  return Promise.reject(error);
});
// 响应拦截器
service.interceptors.response.use(
  response => {
    if (!response.config.noLoading)
      if (!response.config.loading)
        Vue.prototype.$loading().close();
    return response.data;
  },
  err => {
    Vue.prototype.$loading().close();
    return Promise.reject(err);
  }
);

export default {
  service
}
