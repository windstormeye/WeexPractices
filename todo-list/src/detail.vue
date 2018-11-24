<template>
  <div class="wrp">
    <div class="navbar">
      <text class="iconfont navbar-icon" @click="onBack">&#xe779;</text>
      <text class="navbar-title">事件详情</text>
      <text class="navbar-title"></text>
    </div>
    <div class="form-item">
      <text class="title-text">{{ eventName }}</text>
    </div>
    <div class="form-item">
      <text class="title-text">{{ eventDesc }}</text>
    </div>
  </div>
</template>

<script>
const storage = weex.requireModule('storage')
const navigator = weex.requireModule('navigator')
export default {
  name: 'detail',
  data () {
    return {
      eventName: '',
      eventDesc: ''
    }
  },
  beforeCreate () {
    const domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_933576_ji32n9fdyki.ttf')"
    })
  },
  created () {
    storage.getItem('currentEvent', e => {
      // debugger
      if (e.result === 'success') {
        let event = JSON.parse(e.data)
        this.eventName = event.name
        this.eventDesc = event.eventDesc
      }
    })
  },
  methods: {
    onBack () {
      navigator.pop({
        animated: 'true'
      })
    }
  }
}

</script>

<style scoped>
.iconfont {
    font-family: iconfont;
  }
.wrp {
  flex-direction: column;
  background-color: #f0efe9;
}
.navbar {
  height: 88px;
  background-color: #50e3a4;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}
.navbar-title {
  font-size: 32px;
  color: #fff;
}
.navbar-icon {
  color: #fff;
  font-size: 36px;
}
.form-item {
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 30px;
}
.title-text {
  font-size: 28px;
  color: #3e434f;
}
.text {
  font-size: 26px;
  color: #3e434f;
}
</style>
