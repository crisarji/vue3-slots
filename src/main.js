import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/styles/index.css'
import router from './router'

createApp(App).use(router).mount('#app')



// import Vue from 'vue'
// import 'normalize.css'
// import '@/assets/styles/index.css'

// import App from './App.vue'
// import router from './router'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
