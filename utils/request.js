import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import cookie from 'js-cookie'
// 封装request
const service=axios.create({
  baseURL:'http://192.168.0.105:88',//指定请求接口api的base_url, 目前为本地gateway地址
  timeout:20000 //请求超时时间
})

// http request 拦截器
service.interceptors.request.use(

  config => {
  //debugger
  //判断cookie中是否有token的值，如果有则将其放入header中
  if (cookie.get('token')) {
    console.log("client request interceptor"+cookie.get('token'))
    config.headers['token'] = cookie.get('token');
  }
    return config
  },
  err => {
  return Promise.reject(err);
})
// http response 拦截器
service.interceptors.response.use(
  response => {
    //debugger
    if (response.data.code == 28004) {
        console.log("response.data.resultCode是28004")
        // 返回 错误代码-1 清除ticket信息并跳转到登录页面
        //debugger
       this.window.location.href="/login"
        return
    }else{
      if (response.data.code !== 20000) {
        //25000：订单支付中，不做任何提示
        if(response.data.code != 25000) {
          Message({
            message: response.data.message || 'error',
            type: 'error',
            duration: 5 * 1000
          })
        }
      } else {
        return response;
      }
    }
  },
  error => {
    return Promise.reject(error.response)   // 返回接口返回的错误信息
});


export default service
