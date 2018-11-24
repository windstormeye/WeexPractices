<template>
  <div class="wrp" @viewappear="OnShow" @viewdisappear="OnHidden">
    <text class="title">代办事项</text>
    <div class="event-wrp">
      <div class="event" v-for="(event, index) in todoEvents" :key="event.name" @click="onEventClick(event)">
        <text class="label">{{ event.name }}</text>
        <div class="event-btn-wrp">
          <text class="btn" @click="onFinish(event, index)">完成</text>
          <text class="iconfont">&#xe775;</text>
        </div>
      </div>
    </div>
    <text class="title">已办事项</text>
    <div class="event-wrp">
      <div class="event" v-for="event in doneEvents" :key="event.name" @click="onEventClick(event)">
        <text class="label">{{ event.name }}</text>
        <div class="event-btn-wrp">
          <text class="iconfont">&#xe775;</text>
        </div>
      </div>
    </div>
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
  </div>
</template>

<script>
import { getEntryUrl } from './utils'
const storage = weex.requireModule('storage')
const navigator = weex.requireModule('navigator')
export default {
  data () {
    return {
      todoEvents: [],
      doneEvents: []
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
    if (weex.config.env.platform === 'Web') {
      this.onShow()
    }
  },
  methods: {
    onShow () {
      storage.getItem('todoEvents', e => {
        if (e.result === 'success') {
          this.todoEvents = JSON.parse(e.data)
        } else {
          this.todoEvents = []
        }
      })
      storage.getItem('doneEvents', e => {
        if (e.result === 'success') {
          this.doneEvents = JSON.parse(e.data)
        } else {
          this.doneEvents = []
        }
      })
    },
    onEventClick (event) {
      if (weex.config.env.platform === 'Web') {
        this.onHidden()
      }
      storage.setItem('currentEvent', JSON.stringify(event))
      navigator.push({
        url: getEntryUrl('detail'),
        animated: 'true'
      })
    },
    onHidden () {
      storage.setItem('todoEvents', JSON.stringify(this.todoEvents))
      storage.setItem('doneEvents', JSON.stringify(this.doneEvents))
    },
    onFinish (event, index) {
      this.todoEvents.splice(index, 1)
      this.doneEvents.push(event)
    },
    onAdd () {
      if (weex.config.env.platform === 'Web') {
        this.onHidden()
      }
      navigator.push({
        url: getEntryUrl('add'),
        animated: 'true'
      })
    },
    onClear () {
      this.todoEvents = []
      this.doneEvents = []
      this.onHidden()
    }
  }
}
</script>

<style scoped>
  .iconfont {
    font-family: iconfont;
    color: #3e434f;
  }
  .wrp {
    background-color: #F0EFE9;
  }
  .title {
    font-size: 24px;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    color: #3e434f;
  }
  .label {
    color: #3e434f;
    font-size: 28px;
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
    border-radius: 10px;
    font-size: 24px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: #50e3a4;
    color: #fff;
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
