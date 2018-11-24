<template>
  <div class="wrp">
    <div class="navbar">
      <text class="iconfont navbar-icon" @click="onBack">&#xe779;</text>
      <text class="navbar-title">添加事件</text>
      <text class="navbar-title"></text>
    </div>
    <div class="form-item">
      <input v-model="eventName" type="text" class="input" placeholder="请输入事件名称" />
    </div>
    <div class="form-item">
      <textarea v-model="eventDesc" type="text" class="textarea" placeholder="请输入事件内容" />
    </div>
    <div class="bottom-btn-wrp">
      <text class="bottom-btn" @click="onAdd">完成</text>
    </div>
  </div>
</template>

<script>
const storage = weex.requireModule('storage')
const navigator = weex.requireModule('navigator')

export default {
  name: 'add',
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
  methods: {
    onBack () {
      navigator.pop({
        animated: 'true'
      })
    },
    onAdd () {
      var todoEvents
      storage.getItem('todoEvents', e => {
        if (e.result === 'success') {
          todoEvents = JSON.parse(e.data)
        } else {
          todoEvents = []
        }
        todoEvents.push({
          name: this.eventName,
          eventDesc: this.eventDesc
        })
        storage.setItem('todoEvents', JSON.stringify(todoEvents), e => {
          if (e.result === 'success') {
            navigator.pop({
              animated: 'ture'
            })
          }
        })
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
  margin-top: 40px;
}
.input {
  flex: 1;
  font-size: 28px;
  background-color: transparent;
  color: #3e434f;
}
.textarea {
  flex: 1;
  font-size: 26px;
  background-color: transparent;
  color: #3e434f;
}
.bottom-btn-wrp {
    bottom: 2.5%;
    left: 15%;
    position: absolute;
    width: 70%;
    height: 80px;
    background-color: #50e3a4;
    /* 主轴方向 */
    flex-direction: row;
    /* 水平方向 */
    align-items: center;
    border-radius: 12px;
  }
  .bottom-btn {
    flex: 1;
    text-align: center;
    font-size: 28px;
    color: #fff;
  }
</style>
