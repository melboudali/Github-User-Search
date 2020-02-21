import {
  SEARCH_USERS,
  SEARCH_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  SEARCH_ALL_USERS,
  STATUSCODE
} from "../Types";

export default (state, action) => {
  switch (action.type) {

    case SEARCH_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        ResultCount: action.payload.length,
        loading: false
      };

    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload[0],
        loading: false,
        ResultCount: action.payload[1]
      };

    case SEARCH_USER:
      return {
        ...state,
        user: action.payload.data,
        loading: false,
        statusCode: action.payload.status,
        joined: action.payload.data.created_at.split("-")
      };

    case STATUSCODE:
      return { ...state, statusCode: action.payload };
      
    case GET_REPOS:
      return { ...state, repos: action.payload, loading: false };

    case CLEAR_USERS:
      return { ...state, users: [], ResultCount: 0 };

    case SET_LOADING:
      return { ...state, loading: true, ResultCount: 0 };

    case SET_ALERT:
      return {
        ...state,
        alert: { message: action.payload.message, type: action.payload.type }
      };

    case REMOVE_ALERT:
      return { ...state, alert: { message: null, type: null } };

    default:
      return state;
  }
};
