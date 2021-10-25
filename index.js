'use strict'

const { Visitor } = require('postapl');

// plugin
module.exports = (opts = {}) => {
  // no plugin options
  return {
    postaplPlugin: 'postapl-remove-empty',
    async process(result) {

      const visitor = new RemoveVisitor();
      result.root.accept(visitor);

      result.processor.deleteMarked(result.root);
    }
  }
}
module.exports.postapl = true



// visitor
class RemoveVisitor extends Visitor {
  constructor() {
    super();
  }

  object(objectNode) {
    if (objectNode.properties.length === 0) {
      objectNode.parent.markDelete = true;
    }
  }

  array(arrayNode) {
    if (arrayNode.items.length === 0) {
      arrayNode.parent.markDelete = true;
    }
  }

  string(stringNode) {
    if (stringNode.value === '') {
      stringNode.parent.markDelete = true;
    }
  }

  nil(nullNode) {
    nullNode.parent.markDelete = true;
  }
};
