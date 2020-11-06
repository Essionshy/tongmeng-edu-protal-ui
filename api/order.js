import request from '@/utils/request'

export default {
  //生成订单
  createOder(courseId) {
    return request({
      url: `/order/save/${courseId}`,
      method: 'post'
     
    })
  },
  //根据订单号获取订单信息
  getOrderInfo(orderNo) {
    return request({
      url: `/order/get/${orderNo}`,
      method: 'get'
    })
  }

}
