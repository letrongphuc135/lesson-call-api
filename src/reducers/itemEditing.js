import * as types from '../constants/ActionTypes'
let initialState = {};

const itemEditing = (state= initialState, action) => {
    switch(action.type){       
        case types.EDIT_PRODUCT:
            console.log(action.product);
            return action.product;
        default: return state;
    }
}

export default itemEditing;