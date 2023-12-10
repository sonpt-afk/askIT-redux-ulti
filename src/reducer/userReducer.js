import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "../action/types";

const INITIAL_STATE = {
  listUsers: [],
  isLoading: false,
  isError: false,
  isCreating: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      console.log("FETCH_USER_REQUEST:", action);
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case FETCH_USER_SUCCESS:
      console.log("FETCH_USER_SUCCESS:", action);

      return {
        ...state,
        listUsers: action.dataUsers,
        isError: false,
        isLoading: false,
      };
    case FETCH_USER_ERROR:
      console.log("FETCH_USER_ERROR:", action);

      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case CREATE_USER_REQUEST:
      return { ...state, isCreating: true };
    case CREATE_USER_SUCCESS:
      return { ...state, isCreating: false };

    case CREATE_USER_ERROR:
      return { ...state, isCreating: false };

    default:
      return state;
  }
};

export default userReducer;
