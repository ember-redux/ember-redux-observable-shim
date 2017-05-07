/* eslint-env node */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'redux-observable',
  treeForAddon (tree) {
    const observablePath = path.dirname(require.resolve('redux-observable/lib/es/index.js'));
    const observableTree = this.treeGenerator(observablePath);

    if (!tree) {
      return this._super.treeForAddon.call(this, observableTree);
    }

    const trees = mergeTrees([observableTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
