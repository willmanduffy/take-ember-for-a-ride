import startApp from '../helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Login Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should redirect to the login page when trying to access a protected page', function() {
  visit('/').then(function() {
    click('a:contains("Movies")').then(function() {
      equal(find('.module h1').text(), 'Login');
    });
  });
});

test('Should allow the user to login with proper credentials', function() {
  visit('/login').
    fillIn('input#identification', 'tony').
    fillIn('input#password', 'montana');

  click('button[type="submit"]').then(function() {
    equal(find('a:contains("Logout")').length, 1);
  });
});

test('Should throw an error with invalid credentials', function() {
  visit('/login').
    fillIn('input#identification', 'bad').
    fillIn('input#password', 'credentials');

  click('button[type="submit"]').then(function() {
    equal(find('strong:contains("You entered incorrect credentials")').length, 1);
  });
});
