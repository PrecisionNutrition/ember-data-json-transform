import { isEmpty } from '@ember/utils';
import Transform from 'ember-data/transform';

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
