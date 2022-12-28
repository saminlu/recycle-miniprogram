Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#00FF00",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/image/home.png",
      selectedIconPath: "/image/home.png",
      text: "首页"
    }, {
      pagePath: "/pages/news/news",
      iconPath: "/image/news.png",
      selectedIconPath: "/image/news.png",
      text: "资讯"
    }, {
      pagePath: "/pages/order/order",
      iconPath: "/image/add.png",
      bulge:true,
      selectedIconPath: "/image/add-selected.png",
      text: "下单"
    }, {
      pagePath: "/pages/faq/faq",
      iconPath: "/image/faq.png",
      selectedIconPath: "/image/faq.png",
      text: "FAQ"
    }, {
      pagePath: "/pages/me/me",
      iconPath: "/image/me.png",
      selectedIconPath: "/image/me.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})