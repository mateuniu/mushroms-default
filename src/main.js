import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import './registerServiceWorker'
import './styles/main.scss'

Vue.config.productionTip = false

//filters

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
