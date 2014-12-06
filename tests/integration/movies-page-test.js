import startApp from '../helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Movie Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should allow navigation to the movies page from the main page', function() {
  visit('/').then(function() {
    click('a:contains("Movies")').then(function() {
      equal(find('h1').text(), 'Movies');
    });
  });
});

test('Should list all movies', function() {
  visit('/movies').then(function() {
    equal(find('a:contains("First Blood")').length, 1);
    equal(find('a:contains("Missing in Action")').length, 1);
  });
});

test('Should be able to navigate to a movie page', function() {
  visit('/movies').then(function() {
    click('a:contains("Missing in Action")').then(function() {
      equal(find('h1').text(), 'Missing in Action');
      equal(find('span').text(), 'Score: 23% · Release Date: May 27, 2014');

      equal(find('li:contains("Chuck Norris")').length, 1);
    });
  });
});
