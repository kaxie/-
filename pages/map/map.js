Page({

  /**
   * 页面的初始数据
   */
  data: {
   /** routepoints: [{
      latitude:,
      longitude:
         }]*/
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    /**
  * api调用
  */
  var that = this
    wx.request({
      url: "https://apis.map.qq.com/ws/direction/v1/walking/?from=39.915285,116.403857&to=39.915285,116.803857&key=PNFBZ-XSUCJ-4W2FE-KDMWE-ZXYMT-IVFOF",
      method:"GET",
     /** data:{
        from:39.915285, 116.403857,
        to: 39.915285, 116.803857,
        key："PNFBZ-XSUCJ-4W2FE-KDMWE-ZXYMT-IVFOF"
      },*/
     
     header:{

     },
     
     success:function(res){
       console.log(res)

       that.setData({
         route:res.data.result.routes[0].polyline,
       
       })
     },
     fail:function(){

     },
     complete:function(){

     },

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
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})