import { combineReducers } from "redux";
import {
    LOADING_ERROR,
    LOADING_IN_PROGRESS,
    LOADING_SUCCESS,
    CLEAR_NEWS,
    CHANGE_TAB,
} from "../redux/actionTypes";

const loadingError = (state = false, action) => {
    switch (action.type) {
        case LOADING_ERROR:
            return action.payload;
        default:
            return state;
    }
};

const isLoading = (state = true, action) => {
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

const changeTab = (state = 0, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    news,
    loadingError,
    isLoading,
    changeTab,
});
