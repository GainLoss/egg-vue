import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import echarts from 'echarts'
import $ from 'jquery';
Vue.prototype.$http = axios;
Vue.prototype.$echarts=echarts
Vue.prototype.$$=$

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
