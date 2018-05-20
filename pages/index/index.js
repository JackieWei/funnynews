const app = getApp()
Page({
  data: {
    address: '',
    scrollViewHeight: 0,
    staticSearchClass: 'hide',
    staticTagClass: 'hide',
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
  onSearchTap: function(e) {
    wx.navigateTo({
      url: '../search/searchresult',
    })
  },
  naviToTab: function (event) {
    this.setData({
      currentTab: event.currentTarget.dataset.idx
    });
  },
  onScrollHandler: function (e) {
    let top = e.detail.scrollTop;
    console.log(top);
    if (top > 10) {
      this.showFixedSearch();
    }

    if (top <= 10) {
      this.hideFixedSearch();
    }

    if (top > 280) {
      this.showExtendedSearch();
    }

    if (top < 280) {
      this.hideExtendedSearch();
    }

    if (top > 319) {
      this.showFixedTags();
    }

    if (top < 319) {
      this.hideFixedTags();
    }
  },
  showFixedSearch: function () {
    this.setData({
      staticSearchClass: '',
    })
  },
  hideFixedSearch: function() {
    this.setData({
      staticSearchClass: 'hide',
    })
  },
  showExtendedSearch: function () {
    this.setData({
      extendSearch: true,
    })
  },
  hideExtendedSearch: function() {
    this.setData({
      extendSearch: false,
    })
  },
  showFixedTags: function() {
    this.setData({
      staticTagClass: '',
    })
  },
  hideFixedTags: function() {
    this.setData({
      staticTagClass: 'hide',
    })
  },
  onScrollToUpperHandler: function (e) {
    this.hideFixedSearch();
  },
  onScrollToLowerHandler: function (e) {

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
