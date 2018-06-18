var route=[];
var polyline=[];
//var =[];
var polyline1=[];
Page({
  data: {   
    latitude:[],
    longitude:[],
    markpoint:[],
    finalpolyline:[],
    polyline2:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.data.latitude=JSON.parse(options.latitude),
     this.data.longitude=JSON.parse(options.longitude)
      for (var t = 0; t < this.data.latitude.length; t++) {
        polyline[t] = {
          latitude: this.data.latitude[t],
          longitude: this.data.longitude[t]
        }
      }
      // this.setData({
      //   markpoint:polyline
      // })
     var that = this
     for (var y = 0; y < this.data.latitude.length-1; y++)
  {
    wx.request({
      url: 'https://apis.map.qq.com/ws/direction/v1/walking/?from=' + this.data.latitude[y] + ',' + this.data.longitude[y] + '&to='+ this.data.latitude[y+1] + ',' + this.data.longitude[y+1]+'&key=ZWFBZ-VF2WG-NNQQN-I3HA7-6M447-FXFLV',
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
          that.data.finalpolyline = that.data.finalpolyline.concat(b); 
          //到这里没有问题，可以顺利生成b
        console.log(that.data.finalpolyline)
        }
      },
      
      fail: function () { console.log("fail") },
      complete: function () {
        that.setData({
          markpoint: polyline,
          polyline2:[{
            points: that.data.finalpolyline,
            color: "#99FF00",
            width: 4
          }]
        })
        console.log(that.data.finalpolyline)
       },
    })
  }   
   //  console.log(this.data.finalpolyline)
    
    
  wx.showNavigationBarLoading()
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    wx.hideNavigationBarLoading()
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