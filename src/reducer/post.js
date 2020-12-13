import {SET_POST,ERROR_POST} from '../action/action.types'

const initialState={
    posts:[],
    loading:true,
    error:false
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case SET_POST:
            return {
                ...state,
                posts:action.payload,
                loading:false
            }
        case ERROR_POST:
            return {
                ...state,
                error:true
            }
        default:
            return state
    }
}