<template>
  <div class="wrp" @viewappear="OnShow" @viewdisappear="OnHidden">
    <text class="title">代办事项</text>
    <div class="event-wrp">
      <div class="event" v-for="(event, index) in todoEvents" :key="event.name" @click="onEventClick(event)">
        <text class="label">{{ event.name }}</text>
        <div class="event-btn-wrp">
          <text class="btn" @click="onFinish(event, index)">完成</text>
          <text class="iconfont">&#xe601;</text>
        </div>
      </div>
    </div>
    <text class="title">已办事项</text>
    <div class="event-wrp">
      <div class="event" v-for="event in doneEvents" :key="event.name" @click="onEventClick(event)">
        <text class="label">{{ event.name }}</text>
        <div class="event-btn-wrp">
          <text class="iconfont">&#xe601;</text>
        </div>
      </div>
    </div>
    <div class="bottom-btn-wrp">
      <text class="bottom-btn" @click="onAdd">添加</text>
      <text class="bottom-btn" @click="onClear">清空</text>
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
      'src': "url('http://at.alicdn.com/t/font_933576_hjux2fbay07.ttf')"
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
