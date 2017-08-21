import { FETCH_SITE } from "../actions/types";


export default function(state = "null", { type, payload }) {
    switch(type){

        // if the action type is set id token return the payload from the action to state
        case FETCH_SITE:
            return payload;

        // return the default state if type is not found
        default:
            return state;
    }
}