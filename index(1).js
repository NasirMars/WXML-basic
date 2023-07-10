Page({
  /**
   * Page initial data
   */
  data: {
    activityPictures: [
      { picture: "/images/ASA.png" },
      { picture: "/images/xisha.png" },
      { picture: "/images/teamwork.png" },
      { picture: "/images/yacht.png" },
      { picture: "/images/sailing.png" },
      { picture: "/images/kayak.png" }
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {},

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {},

  /**
   * Called when page reach bottom
   */
  onReachBottom() {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {},

  /**
   * Custom function--Called when logo is clicked
   */
  navToActivityDetail(event) {
    wx.navigateTo({
      url: '/pages/activityDetail/activityDetail'
    });
  },


  handleLogoClick() {
    wx.navigateTo({url: '/pages/index/index'});
  },
});
