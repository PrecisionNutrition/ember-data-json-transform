import Transform from 'ember-data/transform';
import Ember from 'ember';

const {
  isEmpty,
} = Ember;

export default Transform.extend({
  deserialize(serialized) {
    if (isEmpty(serialized)) {
      return {};
    } else {
      return serialized;
    }
  },

  serialize(deserialized) {
    if (isEmpty(deserialized)) {
      return {};
    } else {
      return deserialized;
    }
  }
});
