import DS from 'ember-data';

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
