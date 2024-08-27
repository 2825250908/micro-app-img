import Vue from 'vue'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'

microApp.start({
  inline: true, 
  disableSandbox: false, 
  disableScopecss: false, 
  destroy: false,
  shadowDOM: false,
  ssr: false,
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
