

import { ADD_NEW_CAT, FETCH_KITTENS, FETCH_QUEENS, FETCH_SITE, FETCH_TOMS, TOGGLE_CAT_MODAL, TOGGLE_SIDE_NAV } from  "../actions/types";
import axios from "axios";
// { TYPES: {FETCH_KITTENS, FETCH_QUEENS, FETCH_TOMS, TOGGLE_NEW_CAT_MODAL, TOGGLE_SIDE_NAV }}

export const toggleCatModal = (toggle)=>{
    return {
        type: TOGGLE_CAT_MODAL,
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

// fetch all site data
export const fetchSite = (query) =>{
    const request = axios.post("/api/fetch_site/");
    return {
        type: FETCH_SITE,
        payload: request
    }
};

// add a new cat to the collection
export const addNewCat = (newCat) =>{
    const request = axios.post("/api/add_cat/");
    return {
        type: ADD_NEW_CAT,
        paylaod: request
    }
};