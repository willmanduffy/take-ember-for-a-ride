import Ember from 'ember';

export default Ember.Route.extend({
  model: function(movie) {
    return this.store.find('movie', movie);
  }
});
