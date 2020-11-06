import request from '@/utils/request.js'

export default {
  //查询banner前2条数据显示
  getTeacherAndCourseList() {
    return request({
      url: '/edu/front/index/list',
      method: 'get'
    })
  }
}
