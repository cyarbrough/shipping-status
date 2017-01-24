import HalAppAdapter from "app-utilities/adapters/hal-application-adapter";

export default HalAppAdapter.extend({
    /**
     * Remap model names to API paths
     * @param type Initial type
     * @returns string
     */
    pathForType: function (type) {
        var newType = type;
        if (type === 'shipping-information') {
            newType = 'shipment';
        }
        return newType;
    }
});
