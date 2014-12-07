import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('actors', function() {});
  this.route('login');

  this.route('movies', function() {
    this.route('show', { path: ':movie_id' });
  });
});

export default Router;
