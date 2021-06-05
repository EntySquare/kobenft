// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import locale from 'element-ui/lib/locale/lang/en'
import i18n from './i18n/index'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  components: { App },
  router,
  template: '<App/>',
  render: h => h(App)
})
