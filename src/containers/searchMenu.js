import { connect } from "react-redux";
import { getNews, clearNews } from "../actions";
import Search from "../components/search";

const mapStateToProps = (state) => ({
    articles: state.news,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    onGet: (url_params) => dispatch(getNews(url_params)),
    onClear: () => dispatch(clearNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
