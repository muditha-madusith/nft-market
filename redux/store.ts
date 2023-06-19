import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer } from "./reducers/index";
import { AppActions } from "./actions/AppActions";

export type AppState = ReturnType<typeof RootReducer>;

const store = createStore(
  RootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
  )
);

export default store;
