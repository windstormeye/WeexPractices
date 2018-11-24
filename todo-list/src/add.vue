<template>
  <div class="wrp">
    <div class="nav-bar">
      <text class="iconfont">&#xe600;</text>
      <text class="title">添加事件</text>
      <text class="title"></text>
    </div>
    <div class="form-item">
      <text>事件名称</text>
      <input type="text" class="input" placeholder="请输入事件名称" />
    </div>
    <div class="form-item">
      <text>事件详情</text>
      <textarea type="text" class="textarea" placeholder="请输入事件内容" />
    </div>
    <div class="bottom-btn-wrp">
      <text class="bottom-btn">添加</text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add',
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
.input {
  flex: 1;
}
.textarea {
  flex: 1;
}
.bottom-btn-wrp {
    bottom: 0px;
    left: 0px;
    position: absolute;
    width: 100%;
    height: 100px;
    background-color: #FFF;
    /* 主轴方向 */
    flex-direction: row;
    /* 水平方向 */
    align-items: center;
  }
  .bottom-btn {
    flex: 1;
    text-align: center;
  }
</style>
