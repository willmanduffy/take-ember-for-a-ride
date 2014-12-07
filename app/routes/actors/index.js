import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    var _this = this;

    return this.store.find('actor').then(function() {
      return _this.store.filter('actor', function(actor) {
        return actor.get('age') > 70;
      });
    });
  }
});
