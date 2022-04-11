import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import { homeVideoItemsReducer } from "./reducers/videoItems.reducer";
import { selectedVideoReducer } from "./reducers/videoItems.reducer";
import { channelDetailsReducer } from "../redux/reducers/channel.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideoItems: homeVideoItemsReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
