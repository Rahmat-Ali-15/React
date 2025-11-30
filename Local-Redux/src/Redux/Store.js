import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { TodoReducer } from "./Todos/Reducer";
import { AuthReducer } from "./Auth/reducer";
import { thunk } from "redux-thunk";

const rootTerminal = combineReducers({
  auth: AuthReducer,
  todo: TodoReducer,
});

// method 1
// const logger = (state) => (next) => (action) => {
//   console.log("Describe the logger action", state, next, action);
//   let val = next(action);
//   console.log("exit poll of middleware");
//   return val;
// };

// method 2
// const logger2 = (state) => {
//   return (next) => {
//     return (action) => {
//       console.log("Describe the logger2 action", state, next, action);
//       let val = next(action);
//       console.log("exit poll of middleware2");
//       return val;
//     };
//   };
// };

// this is custom thunk
// const customMiddleware = (store) => (next) => (action) => {
//   return typeof action === "function" ? action(store.dispatch, store.getStore) : next(action);
// }

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// this thunk is enbuild
const enhancer = composeEnhancers(applyMiddleware(thunk));

// const enhancer = composeEnhancers(
//   applyMiddleware(logger,logger2),
//   // other store enhancers if any
// );

export const myStore = createStore(
  rootTerminal,
  //   applyMiddleware(logger, logger2),
  enhancer
);
