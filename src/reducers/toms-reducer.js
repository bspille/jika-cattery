import { FETCH_TOMS } from "../actions/types";

export default function( state = [], { type, payload }){
    switch(type){
        case FETCH_TOMS:
            return payload;

        default:
            return state;
    }
}