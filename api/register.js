import request from '@/utils/request'

export default{
  //发送手机验证码请求
  sendVerifyCode(phone){
    return request({
      url:`/sms/send/${phone}`,
      method:'get'
    })
  },
  //注册会员请求
  registerMember(params){
    return request({
      url:`/member/register`,
      method:'post',
      data:params,
      header:{
        'Content-Type':'application/json'
      }
    })
    
  }
  
  
}