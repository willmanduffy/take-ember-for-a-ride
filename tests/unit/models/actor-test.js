import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('actor', 'Actor', {
  needs: []
});

test('it exists', function() {
  var model = this.subject();

  ok(!!model);
});

test('nameAndAge', function() {
  var model = this.subject({name: 'Bob Loblaw', age: 68});

  equal(model.get('nameAndAge'), 'Bob Loblaw (Age: 68)');
});
