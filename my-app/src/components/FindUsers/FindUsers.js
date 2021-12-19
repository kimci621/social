import { React, Component } from "react";
import FindUsersJsx from "./FindUsersFunc";
import axios from "axios";
import loader from "../../assets/loader.svg";
import styles from "./FindUsers.module.css";

export default class FindUser extends Component {
  componentDidMount() {
    this.props.isFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=5`
      )
      .then((res) => {
        this.props.isFetching(false);
        this.props.editTotalPages(res.data.totalCount);
        this.props.setUsers(res.data.items);
      });
  }

  onPageChange = (currentPage) => {
    this.props.isFetching(true);
    this.props.changeActivePage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=5`
      )
      .then((res) => {
        this.props.isFetching(false);
        this.props.setUsers(res.data.items);
      });
  };

  moreUsers = (currentPage, count) => {
    this.props.isFetching(true);
    this.props.changeActivePage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${count}`
      )
      .then((res) => {
        this.props.isFetching(false);
        this.props.setUsers(res.data.items);
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
          <img src={loader} alt="spinner" className={styles.loader}></img>
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
        />
      </>
    );
  }
}
