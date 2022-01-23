import AsideFunc from "./AsideFunc";
import React, { memo, useEffect } from "react";
const Aside = memo((props) => {
  useEffect(() => {
    props.thunkUsersUpdate();
  }, []); //eslint-disable-line

  console.log("render");
  return <AsideFunc friendsData={props.friendsData} login={props.login} />;
});

export default Aside;
