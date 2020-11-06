import request from '@/utils/request'

export default {
  //获取讲师分页列表
  getCourseList(page,limit,params){
    return request({
      url:`/edu/course/front/list/${page}/${limit}`,
      method:'post',
      data:params,
      header:{
        'Content-Type':'application/json'
      }
    })
  },
  //查询所有课程分类
  getSubjectList(){
    return request({
      url:`/edu/subject/list/tree`,
      method:'get'
    })

  },
  //查询课程详情
  getCourseInfo(courseId){
    return request({
      url:`/edu/course/front/get/${courseId}`,
      method:'get'
    })
    
  }
  

 }
