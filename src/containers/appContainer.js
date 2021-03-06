import { connect } from "react-redux";
import App from "../App";
import { getNews, clearNews } from "../redux/actions";

const mapStateToProps = (state) => ({
    news: state.news,
    loadingError: state.loadingError,
    isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGet: (url_params) => dispatch(getNews(url_params)),
    onClear: () => dispatch(clearNews()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
