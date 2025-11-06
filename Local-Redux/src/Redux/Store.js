import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import { TodoReducer } from "./Todos/Reducer";
import { AuthReducer } from "./Auth/reducer";
const rootTerminal = combineReducers({
  auth: AuthReducer,
  todo: TodoReducer,
});

// method 1
const logger = (state) => (next) => (action) => {
  console.log("Describe the logger action", state, next, action);
  let val = next(action);
  console.log("exit poll of middleware");
  return val;
};

// method 2
const logger2 = (state) => {
  return (next) => {
    return (action) => {
      console.log("Describe the logger2 action", state, next, action);
      let val = next(action);
      console.log("exit poll of middleware2");
      return val;
    };
  };
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger,logger2),
  // other store enhancers if any
);


export const myStore = createStore(
  rootTerminal,
//   applyMiddleware(logger, logger2),
  enhancer
);
