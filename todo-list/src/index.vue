<template>
  <div class="wrp" @viewappear="OnShow" @viewdisappear="OnHidden">
    <navbar title="待办清单" :show-back="false"></navbar>
    <text class="title" v-if="todoEvents.length > 0">代办事项</text>
    <div class="event-wrp">
      <eventItem v-for="(event, index ) in todoEvents"
       :key="event.name" :event="event" :index="index"
       @click="onEventClick(event)"
       @onClickFinishButton="onFinish">
      </eventItem>
    </div>
    <text class="title" v-if="doneEvents.length > 0">已办事项</text>
    <div class="event-wrp">
      <eventItem v-for="(event, index ) in doneEvents"
       :key="event.name" :event="event" :index="index" :showFinishButton="false"
       @click="onEventClick(event)">
      </eventItem>
    </div>
    <tab-bar @onAdd="onAdd" @onClear="onClear"></tab-bar>
  </div>
</template>

<script>
import { getEntryUrl } from './utils'
import navbar from './components/navbar.vue'
import eventItem from './components/event-item.vue'
import tabbar from './components/tabbar.vue'
const storage = weex.requireModule('storage')
const navigator = weex.requireModule('navigator')
export default {
  components: { navbar, eventItem, tabBar: tabbar },
  data () {
    return {
      todoEvents: [],
      doneEvents: []
    }
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
</style>
