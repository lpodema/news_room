import { combineReducers } from "redux";

const loadingError = (state = false, action) => {
    console.log(action);
    switch (action.type) {
        case "LOADING_ERROR":
            return action.payload;
        default:
            return state;
    }
};

const loadingInProgress = (state = false, action) => {
    console.log(action);
    switch (action.type) {
        case "LOADING_IN_PROGRESS":
            return action.payload;
        default:
            return state;
    }
};

const updateNewsToShow = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "UPDATE_ARTICLES":
            return action.payload;
        default:
            return state;
    }
};

const news = (state = [], action) => {
    switch (action.type) {
        case "LOADING_SUCCESS":
            console.log("loading success");
            return action.payload;
        case "CLEAR_NEWS":
            return [];
        default:
            return state;
    }
};

export default combineReducers({
    news,
    loadingError,
    loadingInProgress,
    updateNewsToShow,
});
