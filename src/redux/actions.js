import { BASE_URL } from "../constants";
import {
    LOADING_ERROR,
    LOADING_IN_PROGRESS,
    LOADING_SUCCESS,
    CLEAR_NEWS,
    UPDATE_NEWS,
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

export const searchTerm = (term) => ({
    type: UPDATE_NEWS,
    payload: term,
});

export const getNews = (categoryInfo) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        dispatch(loadingError(false));

        await fetch(`${BASE_URL}${categoryInfo}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((articles) => {
                if (articles.length > 0) {
                    dispatch(loadingSuccess(articles));
                } else {
                    throw Error("no se han encontrado articulos");
                }
                dispatch(isLoading(false));
            })
            .catch(() => dispatch(loadingError(true)));
    };
};
