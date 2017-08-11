import { combineReducers } from 'redux';
import sideNavReducer from "./side-nav-reducer";
import errorMessageReducer from "./error-message-reducer";
import formModalReducer from "./form-modal-reducer";
import kittensReducer from "./kittens-reducer";
import tomsReducer from "./toms-reducer";
import queensReducer from "./queens-reducer";


const rootReducer = combineReducers({
    errorMessage: errorMessageReducer,
    formModalOpen: formModalReducer,
    kittens: kittensReducer,
    toms: tomsReducer,
    queens: queensReducer,
    sideNavOpen: sideNavReducer,
    
    

});
export default rootReducer;