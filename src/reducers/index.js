import { combineReducers } from 'redux';
import sideNavReducer from "./side-nav-reducer";
import errorMessageReducer from "./error-message-reducer";
import catModalReducer from "./cat-modal-reducer";
import kittensReducer from "./kittens-reducer";
import tomsReducer from "./toms-reducer";
import queensReducer from "./queens-reducer";
import siteReducer from "./site-reducer";

const rootReducer = combineReducers({
    errorMessage: errorMessageReducer,
    catModal: catModalReducer,
    kittens: kittensReducer,
    toms: tomsReducer,
    queens: queensReducer,
    sideNavOpen: sideNavReducer,
    site: siteReducer,
    
    

});
export default rootReducer;