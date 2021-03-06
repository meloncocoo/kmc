import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('protected', { path: '/' }, function() {
        this.route('system', function() {
            this.route('index', { path: '/' });
            this.route('user');
            this.route('role');
        });
    });


    this.route('account', function() {
        this.route('login');
    });
});

export default Router;
