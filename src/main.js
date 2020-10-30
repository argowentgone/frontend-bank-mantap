import Vue from 'vue'
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import "./assets/styles/main.scss"
import locale from "element-ui/lib/locale/lang/en";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Chat from "vue-beautiful-chat";
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.config.productionTip = false;

Vue.use(Chat);
Vue.use(CKEditor);

Vue.use(ElementUI, { locale });

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
