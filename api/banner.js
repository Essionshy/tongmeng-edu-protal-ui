import request from '@/utils/request.js'

export default {
  //查询banner前2条数据显示
  getBannerList() {
    return request({
      url: '/rms/front/banner/list',
      method: 'get'
    })
  }
}
