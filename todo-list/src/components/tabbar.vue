<template>
  <div class="tabbar-wrp">
    <div class="tabbar-item" @click="onAdd">
      <text class="iconfont tabbar-icon">&#xe727;</text>
      <text class="tabbar-text">添加</text>
    </div>
    <div class="tabbar-item" @click="onClear">
      <text class="iconfont tabbar-icon">&#xe729;</text>
      <text class="tabbar-text">清空</text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  beforeCreate () {
    const domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_933576_ji32n9fdyki.ttf')"
    })
  },
  methods: {
    onAdd () {
      this.$emit('onAdd')
    },
    onClear () {
      this.$emit('onClear')
    }
  }
}
</script>

<style scoped>
  .iconfont {
    font-family: iconfont;
    color: #3e434f;
  }
  .tabbar-wrp {
    bottom: 0px;
    left: 0px;
    position: absolute;
    width: 100%;
    height: 88px;
    background-color: #FFF;
    /* 主轴方向 */
    flex-direction: row;
    /* 水平方向 */
    align-items: center;
    border-top-width: 2px;
    border-color: #e2e2e2;
  }
  .tabbar-item {
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .tabbar-text {
    font-size: 24px;
    color: #3e434f;
  }
  .tabbar-icon {
    font-size: 44px;
  }
</style>
