import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import Search from "./components/searchSection/Search";
import Users from "./components/user/Users";

const App = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Header />
      <Search />
      <Users />
      <ToastContainer />
    </div>
  );
};

export default App;
