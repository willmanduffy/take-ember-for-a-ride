import DS from 'ember-data';

export default DS.Model.extend({
  // Attributes
  title: DS.attr('string'),
  score: DS.attr('string'),
  release: DS.attr('date'),

  // Associations
  actors: DS.hasMany('actor', { async: true })
});
