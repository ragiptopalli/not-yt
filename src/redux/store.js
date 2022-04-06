import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import { homeVideoItemsReducer } from "./reducers/videoItems.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideoItems: homeVideoItemsReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
