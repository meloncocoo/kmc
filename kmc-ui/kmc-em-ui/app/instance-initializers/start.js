export function initialize(appInstance) {
    // appInstance.inject('route', 'foo', 'service:foo');
    appInstance.inject('component:bread-crumbs', 'applicationRoute', 'route:application');
    appInstance.inject('component:page-header', 'applicationRoute', 'route:application');
    Breakpoints();
}

export default {
  name: 'start',
  initialize
};
