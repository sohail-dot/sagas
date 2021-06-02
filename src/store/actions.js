import axios from 'axios';
export const API_CALL = 'API_CALL'
export const SET_GIT_USERS_DETAILS = 'SET_GIT_USERS_DETAILS'

//
export const GET_GIT_USER = 'GET_GIT_USER';
export const getGitUser = (payload) => ({
    type: GET_GIT_USER,
    payload,
  });

export const apiCall = () =>{
    return{
        type: API_CALL
    }
}

export const fetchGitHubUsers = () =>{
    return dispatch =>{
        axios.get('https://api.github.com/users/example')
        .then(response=>{
            const users = response.data
            dispatch(setGitUserDetails(users));
            console.log(users)
        })
        .catch(error =>{
            const errmessage = error.message
            console.log(errmessage)
        })
    }
}
export const setGitUserDetails=(users)=> {
    return {
      type: SET_GIT_USERS_DETAILS,
      payload: users,
    };
  }