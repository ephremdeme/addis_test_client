import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import { employeeReducer } from "./reducers";
import { mainSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  employeeReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mainSaga);
