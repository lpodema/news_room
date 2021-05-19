import { connect } from "react-redux";
import Header from "../components/header.js";
import { getNews, clearNews } from "../actions";

// const mapStateToProps = (state) => ({
//     articles: state.articles,
//     hasError: state.loadingError,
//     isLoading: state.loadingInProgress,
// });

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGet: (url_params) => dispatch(getNews(url_params)),
    onClear: () => dispatch(clearNews()),
});
export default connect(null, mapDispatchToProps)(Header);
