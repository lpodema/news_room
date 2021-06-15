import { connect } from "react-redux";
import Main from "../components/main.js";
import { getNews, clearNews, isLoading} from "../redux/actions";

const mapStateToProps = (state) => ({
    news: state.news,
    loadingError: state.loadingError,
    isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGet: (url_params) => dispatch(getNews(url_params)),
    onClear: () => {dispatch(isLoading(true)); dispatch(clearNews())},
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
