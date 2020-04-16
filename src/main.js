// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(VueChartkick, {
  adapter: Chart
})
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import locale from 'iview/dist/locale/en-US';

Vue.use(iView, { locale });


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})