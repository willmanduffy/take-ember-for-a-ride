import Ember from 'ember';

var FoundationView =  Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).foundation();
  }
});

export default FoundationView;
