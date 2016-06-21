import Ember from 'ember';

const {
    Component,
    computed,
    getWithDefault,
    assert,
    String: { classify },
    getOwner
} = Ember;

const {
    readOnly
} = computed;

export default Component.extend({
    currentRouteName: readOnly('applicationRoute.controller.currentRouteName'),
    route: computed('currentRouteName', {
        get() {
            const currentRouteName = getWithDefault(this, 'currentRouteName', false);
            assert('[component:page-info] Could not find a currect route', currentRouteName);
            const route = getOwner(this).lookup(`route:${currentRouteName}`);
            assert(`[component:page-info] \`route:${currentRouteName}\` was not found`, route);
            return route;
        }
    }).readOnly(),
    pageInfo: computed('currentRouteName', {
        get() {
            const route = getWithDefault(this, 'route', false);
            let pageInfo = getWithDefault(route, 'pageInfo', {
                title: classify(name)
            });

            return pageInfo;
        }
    }).readOnly(),
    buttons: computed('currentRouteName', {
        get() {
            const route = getWithDefault(this, 'route', false);
            let buttons = getWithDefault(route, 'buttons', []);
            return buttons;
        }
    }).readOnly(),
    actions: {
        send(action) {
            const route = getWithDefault(this, 'route', false);
            route.send(action);
        }
    }
});
