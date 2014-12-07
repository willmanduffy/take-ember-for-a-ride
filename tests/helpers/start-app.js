import Ember from 'ember';
import Application from '../../app';
import Router from '../../router';
import config from '../../config/environment';

export default function startApp(attrs) {
  var App;

  var attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.Test.registerHelper('loginThroughForm',
    function() {
      Ember.run(function() {
        visit('/login').
          fillIn('input#identification', 'tony').
          fillIn('input#password', 'montana');

        click('button[type="submit"]');
      });
    }
  );

  Ember.run(function() {
    App = Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  return App;
}
