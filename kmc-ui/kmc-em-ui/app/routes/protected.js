import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    pageInfo: {
        title: '首页'
    },
    model() {
        return this.store.findAll('site-menu');
    }
});
