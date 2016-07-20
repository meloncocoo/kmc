import Ember from 'ember';
import ESASession from 'ember-simple-auth/services/session';

export default ESASession.extend({
    store: Ember.inject.service(),
    currentUser: Ember.computed('isAuthenticated', function() {
        if (this.get('isAuthenticated')) {
            //const promise = this.get('store').queryRecord('user', {});
            //return {};
        }
    })
});
