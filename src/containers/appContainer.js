import { connect } from "react-redux";
import App from "../App";
import { getNews, clearNews } from "../actions";

const mapStateToProps = (state) => ({
    articles: state.news,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGet: (url_params) => dispatch(getNews(url_params)),
    onClear: () => dispatch(clearNews()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
