// First, setup your Redux store. Make a folder in `frontend/src` called `store`
// and add an `index.js` file. In this file, import `createStore`,
// `combineReducers`, `applyMiddleware`, and `compose` from the `redux` package.
// Import `thunk` from `redux-thunk`.
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Create a `rootReducer` that calls `combineReducers` and pass in an empty object
// for now.
const rootReducer = combineReducers({});

// Initialize an `enhancer` variable that will be set to different store enhancers
// depending on if the Node environment is in development or production.
// In production, the `enhancer` should only apply the `thunk` middleware.
// In development, the `logger` middleware and Redux dev tools compose enhancer as
// well. To use these tools, create a `logger` variable that uses the default
// export of `redux-logger`. Then, grab the Redux dev tools compose enhancer with
// `window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__` and store it in a variable called
// `composeEnhancers`. You can use an **or** `||` to keep the Redux's original
// `compose` as a fallback. Then set the `enhancer` variable to the return of the
// `composeEnhancers` function passing in `applyMiddleware` invoked with `thunk`
// then `logger`.
let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

// Next, create a `configureStore` function that takes in an optional
// `preloadedState`. Return `createStore` invoked with the `rootReducer`, the
// `preloadedState`, and the `enhancer`.
const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
// Finally, export the `configureStore` function at the bottom of the file as the
// default export. This function will be used by `index.js` to attach the Redux
// store to the React application.

// window.store.dispatch({ type: "hello" });
// ![test-redux-store-image]
