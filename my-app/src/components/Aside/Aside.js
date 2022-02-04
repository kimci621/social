import AsideFunc from "./AsideFunc";
import React, { memo, useEffect } from "react";

const Aside = memo((props) => {
  useEffect(() => {
    props.thunkUsersUpdate();
    return () => {};
  }, []); //eslint-disable-line

  return (
    <AsideFunc
      friendsData={props.friendsData}
      login={props.login}
      setUserIdInProfilePage={props.setUserIdInProfilePage}
      userId={props.userId}
      savedOwnId={props.savedOwnId}
    />
  );
});

export default Aside;
