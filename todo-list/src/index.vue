<template>
  <div class="wrp">
    <text class="title">代办事项</text>
    <div class="event-wrp">
      <div class="event" v-for="(event, index) in todoEvents" :key="event.name">
        <text class="label">{{ event.name }}</text>
        <div class="event-btn-wrp">
          <text class="btn" @click="onFinish(event, index)">完成</text>
          <text class="iconfont">&#xe601;</text>
        </div>
      </div>
    </div>
    <text class="title">已办事项</text>
    <div class="event-wrp">
      <div class="event" v-for="event in doneEvents" :key="event.name">
        <text class="label">{{ event.name }}</text>
        <div class="event-btn-wrp">
          <text class="iconfont">&#xe601;</text>
        </div>
      </div>
    </div>
    <div class="bottom-btn-wrp">
      <text class="bottom-btn">添加</text>
      <text class="bottom-btn">清空</text>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoEvents: [
        {
          name: '11：30 定外卖！',
          desc: '好的好的！'
        }
      ],
      doneEvents: []
    }
  },
  beforeCreate () {
    const domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_933576_hjux2fbay07.ttf')"
    })
  },
  methods: {
    onFinish (event, index) {
      this.todoEvents.splice(index, 1)
      this.doneEvents.push(event)
    }
  }
}
</script>

<style scoped>
  .iconfont {
    font-family: iconfont;
  }
  .wrp {
    background-color: #f0f0f2;
  }
  .title {
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .event {
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    height: 80px;
  }
  .event-btn-wrp {
    flex-direction: row;
    align-items: center;
  }
  .btn {
    border-width: 2px;
    border-radius: 10px;
    font-size: 28px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 2px;
    padding-bottom: 2px;
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
