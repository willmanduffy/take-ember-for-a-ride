import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),

  nameAndAge: function() {
    return this.get('name') + ' (Age: ' + this.get('age') + ')';
  }.property('name', 'age')
});
