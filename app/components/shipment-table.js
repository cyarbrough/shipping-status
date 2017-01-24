import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['shipment-table'],
    tagName: 'table',

    items: null,

    filterBy: 'shippingReferenceId',
    filterValue: null,

    /**
     * Filtered items; Will return all items if no filter
     * @var {*}
     */
    filteredItems: Ember.computed('items', 'filterBy', 'filterValue', function () {
        var items = this.get('items'),
            filterBy = this.get('filterBy'),
            filterValue = this.get('filterValue'),
            regEx = new RegExp(filterValue);

        if(!filterBy || !filterValue) {
            return items;
        }

        return items.filter(function(item) {
            return regEx.test(item.get(filterBy).toLowerCase());
        });
    }),
});
