import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

import VScrollLock from 'v-scroll-lock'



Vue.use(VScrollLock);

// import { Tweet, Moment, Timeline } from 'vue-tweet-embed'


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,  
  VScrollLock,
  render: h => h(App)
}).$mount('#app')



