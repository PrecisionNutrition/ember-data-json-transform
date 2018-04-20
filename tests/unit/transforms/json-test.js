import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Transform | json', function(hooks) {
  setupTest(hooks);

  test('#deserialize', function(assert) {
    let transform = this.owner.lookup('transform:json');

    let ret;

    ret = transform.deserialize();

    assert.equal(
      typeof ret,
      'object'
    );

    let arg = { foo: 'bar' };

    ret = transform.deserialize(arg);

    assert.deepEqual(
      ret,
      arg,
      'returns the argument'
    );
  });

  test('#serialize', function(assert) {
    let transform = this.owner.lookup('transform:json');

    let ret;

    ret = transform.serialize();

    assert.equal(
      typeof ret,
      'object'
    );

    let arg = { foo: 'bar' };

    ret = transform.serialize(arg);

    assert.deepEqual(
      ret,
      arg,
      'returns the argument'
    );
  });
});