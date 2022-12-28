// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    faqList: {},
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    //  this.getFaqList()
  },
  getFaqList(param) {
    var that = this
    wx.request({
      url: 'http://192.168.123.48:8081/faq/list',
      data:'{}',
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if(res.data.code == 200){
          that.setData({
            faqList : res.data.data.records
          })
        }
      },
      // 请求失败时的一些处理
      fail: function () {
      	wx.showToast({
            icon: "none",
            mask: true,
          	title: "接口调用失败，请稍后再试。",
         });
      }
    }
    )  
  }
})
