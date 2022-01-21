import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bulma/css/bulma.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import Buefy from 'buefy'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app')
