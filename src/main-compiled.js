
import Vue from 'vue';
import App from './App';
import './assets/css/common.css';
import './assets/css/theme.css';
import Resource from 'vue-resource';
import Routers from 'vue-router';
import routes from './routers.js';
import element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'iview/dist/styles/iview.css';

Vue.use(element);
Vue.use(Resource);
Vue.use(Routers);

var router = new Routers({
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App: App }
});

//# sourceMappingURL=main-compiled.js.map