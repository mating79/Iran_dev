import React, { useContext } from "react";
import SimpleContext from "../../simpleContext/SimpleContext";
const Search = () => {
  const searchTitle = "Please Select Your Programm language";
  const context = useContext(SimpleContext);
  const { Search, setSearch, handleSearchUsers } = context;
  return (
    <div
      className="alert alert-dark w-75 d-flex flex-column align-items-center"
      role="alert"
    >
      <h5>{searchTitle}</h5>
      <input
        type="text"
        placeholder="language"
        className="form-control w-75 mt-2"
        onChange={(e) => setSearch(e.target.value)}
        value={Search}
      />
      <button
        onClick={handleSearchUsers}
        className="btn btn-success w-25 mt-2 "
      >
        Search
      </button>
    </div>
  );
};

export default Search;
