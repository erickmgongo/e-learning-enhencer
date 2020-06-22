import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfigElearning, discussions_row } from './auth';

import { GET_POSTS } from './types';

// GET DISCUSSIONS
export const getPosts = () => (dispatch, getState) => {

    const posts_row = JSON.stringify({ 
        "discussionid" : 1,
        });

    let url = `http://localhost/moodle/webservice/restful/server.php/mod_forum_get_discussion_posts`;
  axios
    .post(url, posts_row, tokenConfigElearning(getState))
    .then((res) => {
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));


};

