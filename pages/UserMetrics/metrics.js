var metricsResult;

Page({

  /**
   * 页面的初始数据
   */
  data: {
      city:"",
      touristSite:0,
      relax: 0,
      time: 0,
      saving: 0
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      city: options.city
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log(metricsData);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  touristSiteLevel: function (e){
    this.setData({
      touristSite:e.detail.value
    })
    
  },
  relaxLevel: function (e) {
    this.setData({
      relax : e.detail.value
    })
   
  },
  timeLevel: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  savingLevel: function (e) {
    this.setData({
      saving: e.detail.value
    })
  },

  getmetrics: function (e){
    metricsResult = [this.data.city,this.data.touristSite,this.data.relax,this.data.time,this.data.saving]
    console.log(metricsResult);
    wx.navigateTo({
      url: '../result/result?metrics='+metricsResult,
    })
  }
})

