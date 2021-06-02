import * as actiontypes from './actions'

const initialState ={
    name:'Sohail',
    data:[]
}

const reducer = (state=initialState,action) => {
    if(actiontypes.API_CALL){
        return{
            ...state,
            nam:state.name
        }
        
    }
    if(actiontypes.SET_GIT_USERS_DETAILS){
        return{
            ...state,
            data:action.payload
        }
}
    return state;
}
export default reducer