import { React, Component } from "react";
import FindUsersJsx from "./FindUsersFunc";
import usersApi from "../../api/api";
import loader from "../../assets/loader.svg";
export default class FindUser extends Component {
  componentDidMount() {
    this.props.isFetching(true);
    usersApi.getActivePage(this.props.activePage).then((res) => {
      this.props.isFetching(false);
      this.props.editTotalPages(res.totalCount);
      this.props.setUsers(res.items);
    });
  }

  onPageChange = (currentPage) => {
    this.props.isFetching(true);
    this.props.changeActivePage(currentPage);
    usersApi.getActivePage(this.props.activePage).then((res) => {
      this.props.isFetching(false);
      this.props.setUsers(res.items);
    });
  };

  moreUsers = (currentPage, count) => {
    this.props.isFetching(true);
    this.props.changeActivePage(currentPage);
    usersApi.getActivePage(this.props.activePage, count).then((res) => {
      this.props.isFetching(false);
      this.props.setUsers(res.items);
    });
  };

  render() {
    let li = [];
    for (let i = 1; i <= this.props.allPages / 1000; i++) {
      li.push(i);
    }

    return (
      <>
        {this.props.isFetchingState ? (
          <img src={loader} alt="spinner" className="loader"></img>
        ) : null}
        <FindUsersJsx
          isFetchingState={this.props.isFetchingState}
          loader={loader}
          follow={this.props.follow}
          users={this.props.users}
          moreUsers={this.moreUsers}
          li={li}
          onPageChange={this.onPageChange}
          activePage={this.props.activePage}
          usersPerPage={this.props.usersPerPage}
          setUsers={this.props.setUsers}
          updateUsers={this.props.updateUsers}
        />
      </>
    );
  }
}
