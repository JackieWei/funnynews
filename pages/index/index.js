const app = getApp()
Page({
  data: {
    address: '',
    scrollViewHeight: 0,
    toView: "func-icons-swpier",
    funcs: [{
      icons: [{
        icon: "../assets/funcs/breakfast_200_icon.png"
      }, {
        icon: "../assets/funcs/breakfast_200_icon.png"
      }, {
        icon: "../assets/funcs/breakfast_200_icon.png"
      }, {
        icon: "../assets/funcs/breakfast_200_icon.png"
      }, {
        icon: "../assets/funcs/breakfast_200_icon.png"
      }, {
        icon: "../assets/funcs/breakfast_200_icon.png"
      }, {
        icon: "../assetts/funcs/breakfast_200_icon.png"
      }, {
        icon: "../assets/funcs/breakfast_200_icon.png"
      }, {
        icon: "../assets/funcs/breakfast_200_icon.png"
      }, {
        icon: "../assets/funcs/breakfast_200_icon.png"
      },]
    }, {
      icons: [{
        icon: "../assets/funcs/breakfast_200_icon.png"
      }, {
        icon: "../assets/funcs/breakfast_200_icon.png"
      }, {
        icon: "../assets/funcs/breakfast_200_icon.png"
      }, {
        icon: "../assets/funcs/breakfast_200_icon.png"
      },]
    }],
    currentRecommend: 0,
    scrollLeft: 0, //tab标题的滚动条位置
    expertList: [{ //假数据
      img: "avatar.png",
      name: "欢顔",
      tag: "知名情感博主",
      answer: parseInt(134 * Math.random(), 10),
      listen: parseInt(5555 * Math.random(), 10),
    }]
  },
  naviToTab: function (event) {
    this.setData({
      currentTab: event.currentTarget.dataset.idx
    });
  },
  onScrollHandler: function (e) {
    console.log(e);
  },
  onScrollToUpperHandler: function(e) {

  },
  onScrollToLowerHandler: function(e) {

  },
  onLoad: function (page) {
    wx.getLocation({
      success: res => {
        this.setData({
          address: res.address || res.latitude
        })
      },
    })
    wx.getSystemInfo({
      success: res => {
        this.setData({
          scrollViewHeight: res.screenHeight
        })
      },
    })
  },
})