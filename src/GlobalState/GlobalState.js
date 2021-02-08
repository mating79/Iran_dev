import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import SimpleContext from "../simpleContext/SimpleContext";

const GlobalState = (props) => {
  //states
  const [Users, setUsers] = useState([]);
  const [Search, setSearch] = useState("");
  //api
  const gitIrUsersApi =
    "https://api.github.com/search/users?q=location%3Airan+language%3A";
  //functions
  const handleSearchUsers = async () => {
    if (Search === "" || Search === " ") {
      toast.error("please complete the field");
      setSearch("");
    } else {
      try {
        const res = await axios.get(`${gitIrUsersApi}${Search}&per_page=100`);
        setUsers(res.data.items);
        setSearch("");
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div>
      <SimpleContext.Provider
        value={{
          Users: Users,
          Search: Search,
          setSearch: setSearch,
          handleSearchUsers: handleSearchUsers,
        }}
      >
        {props.children}
      </SimpleContext.Provider>
    </div>
  );
};

export default GlobalState;
