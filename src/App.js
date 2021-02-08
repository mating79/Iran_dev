import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import Search from "./components/searchSection/Search";
import Users from "./components/user/Users";
import SimpleContext from "./simpleContext/SimpleContext";

const App = () => {
  const context = useContext(SimpleContext);
  return (
    <div className="d-flex flex-column align-items-center">
      <Header />
      <Search handleSearchUsers={context.handleSearchUsers} />
      <Users />
      <ToastContainer />

    </div>
  );
};

export default App;
