import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

var CustomAuthenticator;

export default CustomAuthenticator = Base.extend({
  serverSessionEndpoint: '/api/session',

  authenticate: function(credentials) {
    var _this = this;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      var data = { username: credentials.identification, password: credentials.password };

      _this.makeRequest(data).then(function(response) {
        Ember.run(function() {
          resolve(Ember.$.extend(response));
        });
      }, function(xhr) {
        Ember.run(function() {
          reject(xhr.responseText);
        });
      });
    });
  },

  invalidate: function() {
    return Ember.RSVP.resolve();
  },

  makeRequest: function(data) {
    return Ember.$.ajax({
      url: this.serverSessionEndpoint,
      type: 'POST',
      data: data,
      dataType: 'json',
      contentType: 'application/x-www-form-urlencoded'
    });
  }
});
