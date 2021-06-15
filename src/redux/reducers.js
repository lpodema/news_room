import { combineReducers } from "redux";
import {
    LOADING_ERROR,
    LOADING_IN_PROGRESS,
    LOADING_SUCCESS,
    CLEAR_NEWS,
} from "../redux/actionTypes";

const loadingError = (state = false, action) => {
    switch (action.type) {
        case LOADING_ERROR:
            return action.payload;
        default:
            return state;
    }
};

const isLoading = (state = false, action) => {
    switch (action.type) {
        case LOADING_IN_PROGRESS:
            return action.payload;
        default:
            return state;
    }
};

const news = (state = [], action) => {
    switch (action.type) {
        case LOADING_SUCCESS:
            return [...action.payload];
        case CLEAR_NEWS:
            return [];
        default:
            return state;
    }
};

export default combineReducers({
    news,
    loadingError,
    isLoading,
});
