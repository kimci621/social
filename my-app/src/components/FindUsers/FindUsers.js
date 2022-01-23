import React, { memo, useEffect } from "react";
import FindUsersJsx from "./FindUsersFunc";
import usersApi from "../../api/api";
import loader from "../../assets/loader.svg";
const FindUser = memo((props) => {
  useEffect(() => {
    props.isFetching(true);
    usersApi.getActivePage(props.activePage).then((res) => {
      props.editTotalPages(res.totalCount);
      props.setUsers(res.items);
      props.isFetching(false);
    });
  }, []);//eslint-disable-line

  const onPageChange = (currentPage) => {
    props.isFetching(true);
    props.changeActivePage(currentPage);
    usersApi.getActivePage(currentPage).then((res) => {
      props.setUsers(res.items);
      props.isFetching(false);
    });
  };

  const moreUsers = (currentPage) => {
    props.isFetching(true);
    props.changeActivePage(currentPage);
    usersApi
      .getActivePage(props.activePage, props.allUsersPerPage)
      .then((res) => {
        props.setUsers(res.items);
        props.isFetching(false);
      });
  };

  const deleteUser = (id) => {
    props.isFetching(true);
    usersApi.deleteUser(id);
    onPageChange();
    usersApi.getActivePage(props.activePage, props.usersPerPage).then((res) => {
      props.setUsers(res.items);
      props.isFetching(false);
    });
  };

  const addUser = (id) => {
    props.isFetching(true);
    usersApi.followUser(id);
    onPageChange();
    usersApi.getActivePage(props.activePage, props.usersPerPage).then((res) => {
      props.setUsers(res.items);
      props.isFetching(false);
    });
  };

  let li = [];
  for (let i = 1; i <= props.allPages / 1000; i++) {
    li.push(i);
  }
  return (
    <>
      {props.isFetchingState ? (
        <img src={loader} alt="spinner" className="loader"></img>
      ) : null}
      <FindUsersJsx
        isFetchingState={props.isFetchingState}
        loader={loader}
        follow={props.follow}
        users={props.users}
        moreUsers={moreUsers}
        li={li}
        onPageChange={onPageChange}
        activePage={props.activePage}
        usersPerPage={props.usersPerPage}
        isDisabled={props.isDisabled}
        deleteUser={deleteUser}
        addUser={addUser}
      />
    </>
  );
});

export default FindUser;
