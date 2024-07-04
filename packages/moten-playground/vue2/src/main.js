import Vue from 'vue'
import App from './App.vue'
import "@moten/ui/vue2/style"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
