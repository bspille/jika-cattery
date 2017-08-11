import { ERROR } from '../actions/types'

export default function(state = null, { type, payload }){
    switch(type){
        case ERROR:
            console.log(`error set to state`, payload);
            return payload;

        default:
            return state;

    }
}