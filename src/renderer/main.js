import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入font-awesome图标库
import 'font-awesome/css/font-awesome.min.css'
// 引入scss
import less from 'less'
// 引入mapState对象（用于映射store.state中的变量）
// import { mapState, mapMutations } from 'vuex'

Vue.use(ElementUI)
Vue.use(less)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
