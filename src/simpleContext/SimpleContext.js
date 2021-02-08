import { createContext } from "react";

const SimpleContext = createContext({
  Users: [],
  Search: "",
  setSearch: () => {},
  handleSearchUsers: () => {},
});

export default SimpleContext;
