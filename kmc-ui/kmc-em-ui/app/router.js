import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('system', function() {
    this.route('user');
    this.route('role');
  });
});

export default Router;
