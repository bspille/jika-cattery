import { FETCH_KITTENS, FETCH_TOMS, FETCH_QUEENS, TOGGLE_FORM, TOGGLE_SIDE_NAV } from "./types";
import axios from "axios";

export const toggleForm = (toggle)=>{
    return {
        type: TOGGLE_FORM,
        payload: toggle
    }
};
// toggle the value of the side nav to open and close it
export const toggleSideNav = (toggle) =>{
    return {
        type: TOGGLE_SIDE_NAV,
        payload: toggle
    }
    
};

// fetch all kittens from the collections
export const fetchKittens = (query) =>{
    const request = axios.post("/api/fetch_kittens/");
    return {
        type: FETCH_KITTENS,
        payload: request
    }
};

// fetch all the toms from the collections
export const fetchToms = (query) =>{
    const request = axios.post("/api/fetch_toms/");
    return {
        type: FETCH_TOMS,
        payload: request
    }
};

// fetch all the queens from the collections
export const fetchQueens = (query) =>{
    const request = axios.post("/api/fetch_queens/");
    return {
        type: FETCH_QUEENS,
        payload: request
    }
};

