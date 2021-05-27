import { connect } from "react-redux";
import Header from "../components/header.js";
import { getNews, clearNews } from "../redux/actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGet: (url_params) => dispatch(getNews(url_params)),
    onClear: () => dispatch(clearNews()),
});
export default connect(null, mapDispatchToProps)(Header);
