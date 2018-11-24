<template>
  <div class="navbar">
      <text v-if="showBack" class="iconfont navbar-icon" @click="onBack">&#xe779;</text>
      <text v-else class="navbar-title"></text>
      <text class="navbar-title">{{ title }}</text>
      <text class="navbar-title"></text>
  </div>
</template>

<script>
const navigator = weex.requireModule('navigator')
export default {
  name: 'navbar',
  props: {
    showBack: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      required: true
    }
  },
  beforeCreate () {
    const domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_933576_ji32n9fdyki.ttf')"
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
</style>
