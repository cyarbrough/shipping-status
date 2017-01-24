import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['shipment-table'],
    tagName: 'table',

    items: null,

    filterBy: 'shippingReferenceId',
    filterValue: null,

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

    sortedItems: Ember.computed.sort('filteredItems', 'sortedItemsSort'),
    sortedItemsSort: ['shipDate:desc'],

    /**
     * Toggles a shipping information model isOpen, slides HTML element open
     * @param model
     */
    toggleOpen: function (model) {
        if(model.get('id')) {
            model.toggleProperty('isOpen');
            Ember.$('#' + model.get('shippingHistoryId')).slideToggle();
        }
    },

    actions: {
        /**
         *
         * @param model
         */
        toggleShowHistory: function (model) {
            this.toggleOpen(model);
        }
    }
});
