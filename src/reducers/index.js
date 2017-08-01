import { combineReducers } from 'redux';
import sideNavReducer from "./side-nav-reducer";


const rootReducer = combineReducers({
    sideNavOpen: sideNavReducer,
    
    

});
export default rootReducer;