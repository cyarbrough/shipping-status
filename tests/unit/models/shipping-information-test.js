import { moduleForModel, test } from 'ember-qunit';

moduleForModel('shipping-information', 'Unit | Model | shipping information', {
  // Specify the other units that are required for this test.
  needs: ['model:shipping-status', 'model:address']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
