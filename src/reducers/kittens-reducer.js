
import { FETCH_KITTENS } from "../actions/types";

export default function( state = [], { type, payload }){
    switch(type){
        case FETCH_KITTENS:
            return payload;

        default:
            return state;
    }
}