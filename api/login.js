import request from '@/utils/request'

export default{
  //发送登录请求
  login(user){
    return request({
      url:`/member/login`,
      method:'post',
      data:user,
      header:{
        'Content-Type':'application/json'
      }
    })
  },
  //发送登录请求
  getLoginUserInfo(){
    return request({
      url:`/member/get/token`,
      method:'get'
     
    })
  }
}
