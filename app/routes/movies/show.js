import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(movie) {
    return this.store.find('movie', movie);
  }
});
