import * as types from '../action-type'

const INITIAL_STATE={
    movieList:[]
}

const movie=(state=INITIAL_STATE,action)=>{
    const {type,payload} = action;
switch (type)
{
    case types.ADD_MOVIE:
        return{...state,movieList:payload}
     
    case types.REMOVE_MOVIE:
        return{...state,movieList:payload}
        case types.UPDATE_MOVIE:
            return{...state,movieList:payload}
     default:
        return state;
}

}
export default movie;