<template>
  <div class="year-progress">
    <p class="date-time">
      <span class="digit">{{time.year}}</span>
      <span>年</span>
      <span class="digit">{{time.month}}</span>
      <span>月</span>
      <span class="digit">{{time.day}}</span>
      <span>日</span>
      <span class="digit">{{time.hour}}</span>
      <span>:</span>
      <span class="digit">{{time.minute}}</span>
      <span>:</span>
      <span class="digit">{{time.second}}</span>
    </p>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="percentage" status="success"></el-progress>
    <p class="date-end">时间总是不等人，但希望走快一点。</p>
  </div>
</template>

<script>
import moment from 'moment'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

export default {
  name: 'year-progress',
  data() {
    return {
      percentage: 0,
      time: {
        year: '',
        month: '',
        day: '',
        hour: '',
        minute: '',
        second: ''
      }
    }
  },
  created() {
    this.percentage = this.yearProcess()
    this.refreshTime()
    setInterval(() => {
      this.refreshTime()
    }, 1000)
  },
  methods: {
    yearProcess: function () {
      const curDate = new Date()
      const curYear = curDate.getFullYear()
      const yearStartDate = new Date(`${curYear}-01-01`)
      const yearEndDate = new Date(`${curYear}-12-31`)
      return Math.round((curDate.getTime() - yearStartDate.getTime()) / (yearEndDate.getTime() - yearStartDate.getTime()) * 100)
    },
    refreshTime: function () {
      const date = new Date()
      const second = (date.getSeconds()).toString().padStart(2, '0')
      const minute = (date.getMinutes()).toString().padStart(2, '0')
      const hour = (date.getHours()).toString().padStart(2, '0')
      const day = (date.getDay() + 1).toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = (date.getFullYear()).toString().padStart(2, '0')
      const nextTime = {
        year, month, day, hour, minute, second
      }
      this.time = nextTime
    }
  }
}
</script>

<style>
@font-face {
  font-family: digit;
  src: url("../public/digital-7_mono.ttf") format("truetype");
}
.date-time {
  text-align: center;
  margin: 0;
}
.digit {
  font-family: "digit";
  font-size: 30px;
}
</style>