<template>
  <div class="wrp">
    <div class="nav-bar">
      <text class="iconfont">&#xe600;</text>
      <text class="title">事件详情</text>
      <text class="title"></text>
    </div>
    <div class="form-item">
      <text>事件名称：</text>
      <text>事件名称</text>
    </div>
    <div class="form-item">
      <text>事件详情：</text>
      <text>事件详情</text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  beforeCreate () {
    const domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_933576_hjux2fbay07.ttf')"
    })
  }
}

</script>

<style scoped>
.iconfont {
    font-family: iconfont;
  }
.wrp {
  flex-direction: column;
  background-color: #F0F0F2;
}
.nav-bar {
  height: 88px;
  background-color: #FFF;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}
.form-item {
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 40px;
}
</style>
