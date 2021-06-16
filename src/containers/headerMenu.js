import { connect } from "react-redux";
import Header from "../components/header.js";
import { changeTab } from "../redux/actions";

const mapStateToProps = (state) => ({
    tab: state.changeTab,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeTab: (value) => dispatch(changeTab(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
