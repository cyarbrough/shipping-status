import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    /**
     *
     */
    receivedContact: DS.attr('string'),
    /**
     *
     */
    receivedDate: DS.attr('string'),
    /**
     *
     */
    shippingReferenceId: DS.attr('string'),
    /**
     *
     */
    shipDate: DS.attr('string'),

    /**
     * Indicates if this shipping item has been opened
     * @var boolean
     */
    isOpen: false,

    /**
     * Various model state based css classes
     * @var string
     */
    classNamesInformation: Ember.computed('isOpen', function () {
        var classes = 'information';

        classes += this.get('isOpen') ? ' is-open' : '';

        return classes;
    }),
    classNamesHistory: Ember.computed('isOpen', function () {
        var classes = 'history';

        classes += this.get('isOpen') ? ' is-open' : '';

        return classes;
    }),

    shippingHistoryId: Ember.computed(function () {
        return 'shippingHistory' + this.get('id');
    }),


    /**
     * Most recent shipment status
     */
    currentStatus: DS.belongsTo('shipping-status'),
    /**
     * Full Shipping status
     */
    fullHistory: DS.hasMany('shipping-status'),
    /**
     * Address shipment is received at
     */
    receivingAddress: DS.belongsTo('address'),
    /**
     * Address shipment is shipping to
     */
    shippedFromAddress: DS.belongsTo('address')
});
