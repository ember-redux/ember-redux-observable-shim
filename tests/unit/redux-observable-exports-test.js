import { test, module } from 'qunit';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';

module('redux observable export tests');

test('exports createEpicMiddleware function', function(assert) {
  assert.equal(typeof createEpicMiddleware, 'function');
});

test('exports combineEpics function', function(assert) {
  assert.equal(typeof combineEpics, 'function');
});
