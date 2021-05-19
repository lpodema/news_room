import { BASE_URL } from "../constants";

export const loadingError = (bool) => ({
    type: "LOADING_ERROR",
    hasError: bool,
});

export const loadingInProgress = (bool) => ({
    type: "LOADING_IN_PROGRESS",
    isLoading: bool,
});

export const loadingSuccess = (articles) => ({
    type: "LOADING_SUCCESS",
    articles,
});

export const clearNews = () => ({
    type: "CLEAR_NEWS",
});

export const getNews = (categoryInfo) => {
    console.log(categoryInfo);
    return (dispatch) => {
        dispatch(clearNews());

        dispatch(loadingError(false));

        dispatch(loadingInProgress(true));

        fetch(`${BASE_URL}${categoryInfo}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(loadingInProgress(false));
                return response;
            })
            .then((response) => response.json())
            .then((articles) => dispatch(loadingSuccess(articles)))
            .catch(() => dispatch(loadingError(true)));
    };
};
