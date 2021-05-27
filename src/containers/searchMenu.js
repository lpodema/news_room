import { connect } from "react-redux";
import { getNews, clearNews } from "../redux/actions";
import Search from "../components/search";

const mapStateToProps = (state) => ({
    news: state.news,
    loadingError: state.loadingError,
    isLoading: state.isLoading,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    onGet: (url_params) => dispatch(getNews(url_params)),
    onClear: () => dispatch(clearNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
