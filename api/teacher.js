import request from '@/utils/request'

export default {
  //获取讲师分页列表
  getTeacherList(page,limit){
    return request({
      url:`/edu/teacher/front/list/${page}/${limit}`,
      method:'get'
    })
  },
  //根据ID获取讲师详情
  
  getTeacherInfo(id){
    return request({
      url:`/edu/teacher/front/get/${id}`,
      method:'get'
    })
  }
  

}
