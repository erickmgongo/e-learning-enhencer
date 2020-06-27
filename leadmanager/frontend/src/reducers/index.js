import { combineReducers } from 'redux';
import leads from './leads';
import discussions from './discussions';
import posts from './posts';
import courses from './courses';
import errors from './errors';
import messages from './messages';
import user from './user.js'
import auth from './auth';

export default combineReducers({
  leads,
  errors,
  messages,
  auth,
  discussions,
  posts,
  user,
  courses
});
