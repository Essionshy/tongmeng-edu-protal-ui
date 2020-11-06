import request from '@/utils/request'

export default {
  //根据订单号请求微信支付二维码
  getWXPayNativeCode(orderNo) {
    return request({
      url: `/pay/wx/get/code/${orderNo}`,
      method: 'get'
    })
  },
  //根据订单号请求微信支付二维码
  getWXPayStatus(orderNo) {
    return request({
      url: `/pay/wx/get/status/${orderNo}`,
      method: 'get'
    })
  }

}
