import { FETCH_QUEENS } from "../actions/types";

export default function( state = [], { type, payload }){
    switch(type){
        case FETCH_QUEENS:
            return payload;

        default:
            return state;
    }
}