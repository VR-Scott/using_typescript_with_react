import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userEventReducer from './user-events';
import recorderReducer from './recorder';

const rootReducer = combineReducers({
  userEvents: userEventReducer,
  recorder: recorderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
