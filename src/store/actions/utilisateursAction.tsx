import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
// import { Action } from '../actions';

// ==============================================
//interfaces
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const GET_POSTS = 'GET_POSTS';

export interface GetPostsStateType {
  posts: Post[];
}

interface GetPostsActionType {
  type: typeof GET_POSTS;
  payload: Post[];
}
export type PostActionTypes = GetPostsActionType;
// ======================================
const initialStateGetPosts: GetPostsStateType = {
  posts: []
};

export const getPostsReducer = (
  state = initialStateGetPosts,
  action: PostActionTypes
): GetPostsStateType => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};


// =======================================
export const getPostsAction = (posts: Post[]): PostActionTypes => {
  return {
    type: GET_POSTS,
    payload: posts
  };
};

export const getPosts = () => {
  return function (dispatch: Dispatch<PostActionTypes>) {
    const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(POST_URL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        dispatch(getPostsAction(data));
        return data;
      });
  };
};

// =============================================
export const getUsersList = (amount: number) => {
//   return (dispatch: Dispatch<Action>) => {
    return (dispatch: Dispatch<any>) => {
    dispatch({
      type: ActionType.USERS_LIST_SUCCESS,
      payload: [{id:1}],
    });
  };
};

