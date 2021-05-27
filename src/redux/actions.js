import { BASE_URL } from "../constants";
import {
    LOADING_ERROR,
    LOADING_IN_PROGRESS,
    LOADING_SUCCESS,
    CLEAR_NEWS,
} from "../redux/actionTypes";

export const loadingError = (bool) => ({
    type: LOADING_ERROR,
    payload: bool,
});

export const isLoading = (bool) => ({
    type: LOADING_IN_PROGRESS,
    payload: bool,
});

export const loadingSuccess = (articles) => ({
    type: LOADING_SUCCESS,
    payload: articles,
});

export const clearNews = () => ({
    type: CLEAR_NEWS,
});

export const getNews = (categoryInfo) => {
    console.log(categoryInfo);
    return async (dispatch) => {
        dispatch(clearNews());

        dispatch(loadingError(false));

        dispatch(isLoading(true));

        await fetch(`${BASE_URL}${categoryInfo}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(isLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((articles) => dispatch(loadingSuccess(articles)))
            .catch(() => dispatch(loadingError(true)));
    };
};
