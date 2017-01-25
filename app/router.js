import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('shipping-information', {path: '/'}, function() {
    this.route('status',  {path: '/status/:status_id'});
  });
  this.route('shipping-status', {path: '/single-status/:status_id'});
});

export default Router;
