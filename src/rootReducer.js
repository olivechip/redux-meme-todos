import { combineReducers } from 'redux';
import memeReducer from './memeSlice';
import todosReducer from './todosSlice';

const rootReducer = combineReducers({
  meme: memeReducer,
  todos: todosReducer
});

export default rootReducer;