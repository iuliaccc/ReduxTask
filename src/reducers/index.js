import {ADD_ITEM, REMOVE_ITEM} from "../constants/action-types";

const initialState = {
    items: []
};

function rootReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_ITEM:
            return {
                items: [payload, ...state.items]
            };
        case REMOVE_ITEM:
            return {
                items: state.items.filter((item)=>payload!==item)
                //removing item from list that matches with the item passed as a payload, which is the same item in this case
            };
        default:
            return state;
    }
}

export default rootReducer;