import Ember from 'ember';

import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('movie', 'Movie', {
  needs: ['model:actor']
});

test('it exists', function() {
  var model = this.subject();

  ok(!!model);
});

test('hasMany actors', function() {
  var klass = this.subject().constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('actors');

  equal(relationship.key, 'actors');
  equal(relationship.kind, 'hasMany');
});
