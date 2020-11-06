import request from '@/utils/request'

export default{
  //分页查询课程评论
  getCommentList(page,limit,courseId){
    return request({
      url:`/edu/comment/front/list/${page}/${limit}/${courseId}`,
      method:'get'
    })
  },

  //添加课程评论
  saveComment(params){
    return request({
      url:`/edu/comment/front/save`,
      method:'post',
      data:params
    })
  }


}
