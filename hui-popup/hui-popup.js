// components/hui-popup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    _width:{  //宽度
      type:String,
      value: '100rpx;'
    },
    _height: {//高度
      type: String,
      value: '100rpx;'
    },
   
    mode: {  //位置 default:顶部 middle:中间 bottom:底部
      type: String,
      value: 'default'
    },
    showStatus: { //显示
      type: Boolean,
      value: false
    },
    _bgcolor:{//背景色
      type: String,
      value: '#fff;'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hide(){
      this.setData({
        showStatus: false
      })
    }
  }
})
