# ember-redux-observable-shim

[![Travis][ci-img]][ci-url] [![NPM][npm-img]][npm-url] ![Ember][ember-img]

## Installation

```bash
ember install ember-rxjs-shim
ember install ember-redux-observable-shim
```

## Usage

```js
// app/middleware/index.js

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics/index';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default [epicMiddleware];
```

To learn more about `redux-observable` and how to use it visit the [redux-observable](https://github.com/redux-observable) Github page.

## Example

https://github.com/toranb/ember-redux-yelp/commits/branches/rxjs


[ci-img]: https://img.shields.io/travis/ember-redux/ember-redux-observable-shim.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ember-redux/ember-redux-observable-shim
[ember-img]: https://img.shields.io/badge/ember-1.13.13+-green.svg "Ember 1.13.13+"
[npm-img]: https://img.shields.io/npm/v/ember-redux-observable-shim.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-redux-observable-shim
