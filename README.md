# Feature Flag Component for React/Redux

## Purpose

This package works with React and Redux to provide an easy-to-use feature wrapping component.

## Installation

Using [npm](https://www.npmjs.com/):
```
  $ npm install --save react-router
```

## Setup

### Add Reducer to Project

To utilize the `featureFlagsReducer`, you must first import it into your project and combine with your other project reducers using Redux's `combineReducers` method:

```js
import { combineReducers } from 'redux';
import { featureFlagsReducer } from 'react-redux-feature-flags';

import otherReducer from './otherReducer';

const rootReducer = combineReducers({
	otherReducer,
	features: featureFlagsReducer,
});

export default rootReducer;
```

### Declare Feature Flags
It is recommended that you create a `features.js` file in the root directory of your project:

```js
  const features = {
    someFeature: true,
    someOtherFeature: false
  }

  export default features;
```

You can then import your features into to your `index.js` file (example using ES6) and pass them to the dispatchable `addFeatureFlags` method:

```js
  import { addFeatureFlags } from 'react-redux-feature-flags';

  import features from './features';

  /***************************
  * Initialize Feature Flags
  ****************************/
  store.dispatch(addFeatureFlags(features));
```

### Treat Component as a Feature

Finally, you can wrap your feature in the `Feature` component and pass it a flag defined in your `features.js`. If the flag is truthy, the children of the `Feature` component will render:

```jsx
  <Feature flag="someFeature">
    <Link to="/link/will/render" />
  </Feature>
  <Feature flag="someOtherFeature">
    <Link to="/link/will/not/render" />
  </Feature>
```
