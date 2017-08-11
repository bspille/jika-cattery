
import { ERROR } from '../src/actions/types';



export default function({ dispatch }){
    return next => action => {
        const { type, payload } = action;
        if(!payload.then){
            next(action);
        }
        else{
        payload
            .then(response => {

                // default action dispatch a new action return the data from the response
                const newAction = { type, payload: response.data };
                dispatch(newAction);
            })
            .catch((err)=>{

                // dispatch error message for error handling
                const errorAction = { type: ERROR, payload: err.response.data};
                dispatch(errorAction);
            });       
        }
    }
}