import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk]; // put any middleware we use in an array


// store takes in 3 things, rootReducer, initialState, and middleware from the compose()
const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // need for redux dev tools
));

export default store;

// createStore - Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app

// applyMiddleware - Middleware is the suggested way to extend Redux with custom functionality. Middleware lets you wrap the store's dispatch method

// redux-thunk lets the action creators invert control by dispatching functions. They would receive dispatch as an argument and may call it asynchronously

// compose - let you write deeply nested function transformations without the rightward drift of the code

// Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object

// That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed

