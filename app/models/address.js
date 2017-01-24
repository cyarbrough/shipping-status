import DS from 'ember-data';

export default DS.Model.extend({
  addressee: DS.attr('string'),
  addressLine1: DS.attr('string'),
  addressLine2: DS.attr('string'),
  addressLine3: DS.attr(),
  string: DS.attr(),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zipCode: DS.attr('string'),
  country: DS.attr('string'),
  note: DS.attr('string')
});
