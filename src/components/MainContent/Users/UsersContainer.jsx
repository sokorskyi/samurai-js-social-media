import { connect } from "react-redux";
import React from "react";
import { togglefollowUser, setCurrentPage, getUsers, selectUsers } from "../../../redux/reducers/usersReducer";
import Users from "./Users";
import Pagination from "../../UI/Pagination/Pagination";
import { selectAuthorizedUserId } from "../../../redux/reducers/authReducer";
import { compose } from "redux";
import withGlobalError from "../../../hoc/withGlobalError";

class UsersApiContainer extends React.Component {

  onPageSelect = async (currentPage, limit) => {
    this.props.setCurrentPage(currentPage);
    await this.props.getUsers(currentPage, limit)
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.limit)
  }

  componentWillUnmount() {
    this.props.setCurrentPage(1);
  }

  render() {
    const {limit, currentPage, totalUsers, ...props} = this.props;

    return (
      <>
        <Pagination pagePortionLimit={10} onPageSelect={(p) => this.onPageSelect(p, limit)} selectedPage={currentPage} limit={limit} totalItems={totalUsers} />
        <Users {...props} />
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  userList: selectUsers(state).userList,
  isFetching: selectUsers(state).isFetching,
  currentPage: selectUsers(state).currentPage,
  limit: selectUsers(state).limit,
  totalUsers: selectUsers(state).totalUsers,
  followingInProgressIds: selectUsers(state).followingInProgressIds,
  authorizedUserId: selectAuthorizedUserId(state),
});

const mapDispatchToProps = {
  setCurrentPage,
  getUsers,
  togglefollowUser,
}

const UsersContainer = compose(
    withGlobalError,
    connect(mapStateToProps, mapDispatchToProps)
  )(UsersApiContainer)

export default UsersContainer;