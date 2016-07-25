import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    actions: {
        authenticate() {
            const {username, password} = this.getProperties('username', 'password');
            this.get('session').authenticate('authenticator:oauth2', username, password).catch((reason) => {
                this.set('errorMessage', reason.errors || reason);
            });
        }
    }
});
