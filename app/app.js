import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

// Third Party Libraries
import Pretender from 'pretender';

Ember.MODEL_FACTORY_INJECTIONS = true;

// Stubbed API
var loggedIn = false,
  FIXTURES = {
    'actors': [
      { id: '1', name: 'Sylvester Stallone', age: 68 },
      { id: '2', name: 'Brian Dennehy', age: 76 },
      { id: '3', name: 'Chuck Norris', age: 74 },
      { id: '4', name: 'Bill Murray', age: 63 },
      { id: '5', name: 'Robert De Niro', age: 71 }
    ],
    'movies': [
      { id: '16521', title: 'First Blood', score: '89', actors: ['1', '2'], release: "2014-05-27T12:54:01" },
      { id: '14444', title: 'Missing in Action', score: '23', actors: ['3'], release: "2014-05-27T12:54:01" }
    ]
  };

new Pretender(function(){
  var successReturn, unauthorizedReturn;

  successReturn = function(resource) {
    return [200, {'Content-Type': 'application/json'}, JSON.stringify(resource)];
  };

  unauthorizedReturn = function() {
    return [403, {'Content-Type': 'application/json'}, '{"error": "You need to sign in to view this content."}'];
  };

  this.get('/api/actors', function(){
    if (loggedIn === false) {
      return unauthorizedReturn();
    } else {
      return successReturn({'actors': FIXTURES.actors});
    }
  });

  this.get('/api/actors/:id', function(request){
    var resource;
    if (loggedIn === false) {
      return unauthorizedReturn();
    } else {
      resource = FIXTURES.actors.filterBy('id', request.params.id)[0];
      return successReturn({'actor': resource});
    }
  });

  this.get('/api/movies', function(){
    if (loggedIn === false) {
      return unauthorizedReturn();
    } else {
      return successReturn({'movies': FIXTURES.movies});
    }
  });

  this.get('/api/movies/:id', function(request){
    var resource;
    if (loggedIn === false) {
      return unauthorizedReturn();
    } else {
      resource = FIXTURES.movies.filterBy('id', request.params.id)[0];
      return successReturn({'movie': resource});
    }
  });

  this.post('/api/session', function(request){
    var queryParams = {};

    request.requestBody.split('&').forEach(function(item) {
      var query = item.split('=');
      queryParams[query[0]] = query[1];
    });

    if (queryParams['username'] === 'tony' && queryParams['password'] === 'montana') {
      loggedIn = true;
      return [200, {'Content-Type': 'application/json'}, '{"session": 1}'];
    } else {
      loggedIn = false;
      return [401, {'Content-Type': 'application/json'}, '{"session": 0}'];
    }
  });
});

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
