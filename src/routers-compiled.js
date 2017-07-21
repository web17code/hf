
var routes = [{
  path: 'content',
  component: function component(resolve) {
    return require(['./components/content.vue'], resolve);
  }
}, {
  path: 'video',
  component: function component(resolve) {
    return require(['./components/video.vue'], resolve);
  }
}, {
  path: 'pic',
  component: function component(resolve) {
    return require(['./components/pic.vue'], resolve);
  }
}, {
  path: '/',
  redirect: '/content',
  component: function component(resolve) {
    return require(['./components/home.vue'], resolve);
  }
}];

export default routes;

//# sourceMappingURL=routers-compiled.js.map