import startApp from '../helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Actor Page', {
  setup: function() {
    App = startApp();

    // FIMXE: Temporary sign in to allow access to pages
    visit('/login').
      fillIn('input#identification', 'tony').
      fillIn('input#password', 'montana');

    click('button[type="submit"]');
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should allow navigation to the actors page from the main page', function() {
  visit('/').then(function() {
    click('a:contains("Actors")').then(function() {
      equal(find('.module h1').text(), 'Actors');
    });
  });
});

test('Should only list actors over the age of 70', function() {
  visit('/actors').then(function() {
    equal(find('li:contains("Sylvester Stallone")').length, 0);
    equal(find('li:contains("Brian Dennehy")').length, 1);
  });
});

