import * as types from '../constants/ActionTypes'
let initialState = [];

const products = (state= initialState, action) => {
    var {id, product} = action;
    var index = -1;
    switch(action.type){
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case types.DELETE_PRODUCT:
            index = state.findIndex((item) => item.id === id);
            if(index !== -1){
                state.splice(index, 1);
            }
            return [...state];
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
            case types.UPDATE_PRODUCT:
            index = state.findIndex((item) => item.id === product.id);
            state[index] = product;
            return [...state];
        default: return [...state];

    }
}

export default products;