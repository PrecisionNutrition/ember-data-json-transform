import { moduleFor, test } from 'ember-qunit';

moduleFor('transform:json', 'Unit | Transform | json', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

test('#deserialize', function(assert) {
  let transform = this.subject();

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
  let transform = this.subject();

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
