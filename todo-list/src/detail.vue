<template>
  <div class="wrp">
    <navbar title="详情"></navbar>
    <div class="form-item">
      <text class="title-text">{{ eventName }}</text>
    </div>
    <div class="form-item">
      <text class="title-text">{{ eventDesc }}</text>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
const storage = weex.requireModule('storage')
export default {
  name: 'detail',
  components: { navbar },
  data () {
    return {
      eventName: '',
      eventDesc: ''
    }
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
