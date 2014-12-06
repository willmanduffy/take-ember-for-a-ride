import startApp from '../helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Actor Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should allow navigation to the actors page from the main page', function() {
  visit('/').then(function() {
    click('a:contains("Actors")').then(function() {
      equal(find('h1').text(), 'Actors');
    });
  });
});

test('Should list all actors', function() {
  visit('/actors').then(function() {
    equal(find('li:contains("Sylvester Stallone")').length, 1);
    equal(find('li:contains("Brian Dennehy")').length, 1);
  });
});

