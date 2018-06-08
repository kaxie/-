var route=[];
var polyline=[];
var finalpolyline=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**finalpolyline:[],*/
   /** markers: [{
      latitude: 39.915280,
      longitude: 116.403853,
    }, {
        latitude: 39.915265,
        longitude: 116.803875,
    }]*/
   /** routepoints: [{
      latitude:,
      longitude:
         }]*/
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options)
     that.setData({
    polyline:options.Rdata
     })  
    /**
  * api调用
  */
  
  console.log(polyline.length)
  for(var y=0;y<polyline.length-1;y++)
  {
    wx.request({
      url: "https://apis.map.qq.com/ws/direction/v1/walking/?from=" + polyline[y].latitude + "," + polyline[y].longitude + "&to=" + polyline[y + 1].latitude + "," + polyline[y + 1].longitude+"&key=ZWFBZ-VF2WG-NNQQN-I3HA7-6M447-FXFLV",
      method: "GET",
      header: {},

      success: function (res) {
        console.log(res)
        if (res.statusCode == 200) {
          route = res.data.result.routes[0].polyline
          console.log(route)
          for (var i = 2; i < route.length; i++) {
            route[i] = route[i - 2] + route[i] / 1000000
          }
          /**route变为点 */
          var b = [];
          for (var j = 0; j < route.length; j = j + 2) {
            b[j / 2] = {
              latitude: route[j], longitude: route[j + 1]
            };
          }
        finalpolyline=finalpolyline+b;  
        }
        wx.hideNavigationBarLoading()
      },
      fail: function () { console.log("fail") },
      complete: function () { },
    })
  }
  this.setData({
    polyline1: [{
      points: finalpolyline,
      color: "#99FF00",
      width: 4
    }]

  })
    
    
   wx.showNavigationBarLoading()
    
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