import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "@redux-saga/core";

import rootSaga from './sagas'

import rootReducer from './reducers'

const sageMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sageMiddleware))
)

sageMiddleware.run(rootSaga)

export default store