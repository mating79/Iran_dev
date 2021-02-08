import React, { useContext } from "react";
import simpleContext from "../../simpleContext/SimpleContext";
import User from "../user/User";

const Users = () => {
  const context = useContext(simpleContext);
  const { Users } = context;
  const uniqId = require("uniqid");
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center w-100 ">
      {Users.map((user) => (
        <User key={uniqId()} name={user.login} image={user.avatar_url} />
      ))}
    </div>
  );
};

export default Users;
