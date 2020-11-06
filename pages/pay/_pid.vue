<template>
  <div class="cart py-container">
    <!--主内容-->
    <div class="checkout py-container  pay">
      <div class="checkout-tit">
        <h4 class="fl tit-txt"><span class="success-icon"></span><span class="success-info">订单提交成功，请您及时付款！订单号：{{payObj.order_no}}</span>
        </h4>
        <span class="fr"><em class="sui-lead">应付金额：</em><em class="orange money">￥{{payObj.total_fee}}</em></span>
        <div class="clearfix"></div>
      </div>
      <div class="checkout-steps">
        <div class="fl weixin">微信支付</div>
        <div class="fl sao">
          <p class="red">请使用微信扫一扫。</p>
          <div class="fl code">
            <!-- <img id="qrious" src="~/assets/img/erweima.png" alt=""> -->
            <!-- <qriously value="weixin://wxpay/bizpayurl?pr=R7tnDpZ" :size="338"/> -->
            <qriously :value="payObj.code_url" :size="338" />
            <div class="saosao">
              <p>请使用微信扫一扫</p>
              <p>扫描二维码支付</p>
            </div>

          </div>

        </div>
        <div class="clearfix"></div>
        <!-- <p><a href="pay.html" target="_blank">> 其他支付方式</a></p> -->

      </div>
    </div>
  </div>
</template>
<script>
  import payApi from '@/api/pay'
  export default {

    data() {
      return {

        payStatusReqeustTimer: ''
      }
    },
    //异步调用获取微信支付二维码，提供用户扫码支付，通过vue-qriously插件显示微信返回的支付地址result_url
    asyncData({
      params,
      error
    }) {
      return payApi.getWXPayNativeCode(params.pid).then(response => {
        console.log(response.data.data)

        return {
          orderNo: params.pid,
          payObj: response.data.data
        }
      })
    },
    mounted() {
      //在页面渲染之后执行
      //每隔三秒，去查询一次支付状态

      this.payStatusReqeustTimer = setInterval(() => {
        this.getPayStatus();
      }, 3000);

    },
    methods: {
      //每隔3秒请求微信支付状态
      getPayStatus() {

        payApi.getWXPayStatus(this.orderNo).then(response => {
          //如果支付成功,清除定时器，否则该定时器会一直运行，除非服务器停机
          if (response.data.success) {
            //清除定时器
            clearInterval(this.payStatusReqeustTimer);
            //提示
            this.$message({
              type: 'success',
              message: response.data.message
            })
          
            //跳转页面
            //跳转到课程详情页面观看视频
            this.$router.push({
              path: '/course/' + this.payObj.course_id
            })
          }
        })

      }

    }

  }
</script>
