import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import i18n from './i18n'
import router from './router/index'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Header from '@/components/Header/Header.vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false

Vue.component('Header',Header)
Vue.use(mavonEditor)

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
