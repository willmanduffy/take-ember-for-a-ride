import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'authenticator:stubbed',
  actions: {
    authenticate: function() {
      var _this = this;

      // Set error message when incorrect credentials are input
      this._super().then(null, function() {
        _this.set('errorMessage', 'You entered incorrect credentials');
      });

      // Redirect to movies#index
      this.transitionToRoute('movies.index');
    }
  }
});
