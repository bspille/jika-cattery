import { TOGGLE_SIDE_NAV } from "../actions/types";


export default function(state = false, { type, payload }) {
    // console.log(JSON.stringify(action, null, 1));
    switch(type){
    
        // if the action type is set id token return the payload from the action to state
        case TOGGLE_SIDE_NAV:
        return payload;

        // return the default state if type is not found
        default:
        return state;
    }
}