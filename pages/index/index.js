const app = getApp()
Page({
  data: {
    address: '',
    scrollViewHeight: 0,
    staticSearchClass: 'hide',
    staticTagClass: 'hide',
    extendSearch: false,
    toView: "func-icons-swpier",
    funcs: getFuncs(),
    currentRecommend: 0,
    tag: '',
    newsWithTags: getMoreItemsWithTag(''),
  },
  onPullDownRefresh: function (e) {
    console.log("pull down refresh")
  },
  onReachBottom: function (e) {
    console.log("reach bottom refresh")
  },
  onSearchTap: function (e) {
    wx.navigateTo({
      url: '../search/searchresult',
    })

  },
  naviToTab: function (event) {
    this.setData({
      currentTab: event.currentTarget.dataset.idx
    })
  },
  onScrollHandler: function (e) {
    let top = e.detail.scrollTop
    if (top > 10) {
      this.showFixedSearch()
    }

    if (top <= 10) {
      this.hideFixedSearch()
    }

    if (top > 168) {
      this.showExtendedSearch()
    }

    if (top < 168) {
      this.hideExtendedSearch()
    }

    if (top > 319) {
      this.showFixedTags()
    }

    if (top < 319) {
      this.hideFixedTags()
    }
  },
  showFixedSearch: function () {
    this.setData({
      staticSearchClass: '',
    })
  },
  hideFixedSearch: function () {
    this.setData({
      staticSearchClass: 'hide',
    })
  },
  showExtendedSearch: function () {
    this.setData({
      extendSearch: true,
    })
  },
  hideExtendedSearch: function () {
    this.setData({
      extendSearch: false,
    })
  },
  showFixedTags: function () {
    this.setData({
      staticTagClass: '',
    })
  },
  hideFixedTags: function () {
    this.setData({
      staticTagClass: 'hide',
    })
  },
  onScrollToUpperHandler: function (e) {
    this.hideFixedSearch()
    console.log("onScrollToUpperHandler")
    wx.showNavigationBarLoading()
  },
  onScrollToLowerHandler: function (e) {
    console.log("onScrollToLowerHandler")
    wx.showLoading({
      title: 'XXXXX',
    })
    getMoreItemsWithTag(this.data.newsWithTags, this.data.tag, items => {
      wx.hideLoading()
      this.setData({
        newsWithTags: items,
      })
    })
  },
  onLoad: function (page) {
    getMoreItemsWithTag([], '', items => {
      this.setData({
        newsWithTags: items
      })
    })
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

/* fake server mode */
let currentTag = null
function getMoreItemsWithTag(nowItems, tag, callback) {
  let items = null;
  //append mode
  if (currentTag === tag) {
    items = [...nowItems, ...produceItems(10, tag)]
  } else {
    items = produceItems(10, tag)
  }
  currentTag = tag
  if (callback) {
    setTimeout(callback, 500, items)
  }
}

function produceItems(num, tag) {
  let items = [], names = ['欢颜', '玉树', '乐乐', '美丽', '秀讯', '俊云'],
    urls = ['http://ookzqad11.bkt.clouddn.com/avatar.png',
      'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526919555747&di=46d172d8f499d312e70e1552e3923d3e&imgtype=0&src=http%3A%2F%2Fcdnq.duitang.com%2Fuploads%2Fitem%2F201504%2F30%2F20150430125352_aeTLk.jpeg', 'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526919587696&di=bc0651f53e599dac4707b9853ce3b970&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201512%2F10%2F20151210135838_Y2SvK.jpeg', 'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526919599800&di=6a4bafaa61c67da9514bd4549f2083e1&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201709%2F08%2F80d94f560c4c8c79cfc123b78ca976e9.jpg', 'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526919612841&di=0c48a546d7aa4efde634de8bdd31fd7e&imgtype=0&src=http%3A%2F%2Fp3.wmpic.me%2Farticle%2F2017%2F12%2F30%2F1514603717_LLVcroMk.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526919624229&di=b1b84056a3d0f8256d01aa808b7d8a4c&imgtype=0&src=http%3A%2F%2Fimg1.touxiang.cn%2Fuploads%2F20130618%2F18-062929_642.jpg', 'http://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3564975103,1907759162&fm=27&gp=0.jpg']
  for (let i = 0; i < num; i++) {
    items.push({
      name: names[parseInt(names.length * Math.random(), 10)],
      tag: '知名感情博主',
      answer: parseInt(1000 * Math.random(), 10),
      listener: parseInt(10000 * Math.random(), 10),
      url: urls[parseInt(urls.length * Math.random(), 10)],
    })
  }
  return items
}

function getFuncs() {
  return [{
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
  }]
}
