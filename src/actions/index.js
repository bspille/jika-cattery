import { TOGGLE_SIDE_NAV } from "./types";

export const toggleSideNav = (toggle) =>{
    console.log(`this is being passed in`,toggle);
    return {
        type: TOGGLE_SIDE_NAV,
        payload: toggle
    }
    
}