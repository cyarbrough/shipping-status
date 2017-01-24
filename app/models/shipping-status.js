import DS from 'ember-data';

export default DS.Model.extend({
  datetime: DS.attr('string'),
  code: DS.attr('string'),
  description: DS.attr('string')
});
