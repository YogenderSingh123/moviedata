import * as types from '../action-type'

const addMovieAction=(params) =>(dispatch)=>{
    dispatch({
        type:types.ADD_MOVIE,
        payload:params
    })
}
const deleteMovieAction=(params) =>(dispatch)=>{
    dispatch({
        type:types.REMOVE_MOVIE,
        payload:params
    })
}
const updateMovieAction=(params) =>(dispatch)=>{
    dispatch({
        type:types.UPDATE_MOVIE,
        payload:params
    })
}


export {
    addMovieAction,
    deleteMovieAction,
    updateMovieAction

}



