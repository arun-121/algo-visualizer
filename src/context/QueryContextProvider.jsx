import QueryContext from "./QueryContext";
import { useContext, useState } from "react";
const QueryContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  return (
    <>
      <QueryContext.Provider value={{ query, setQuery }}>
        {children}
      </QueryContext.Provider>
    </>
  );
};

export function useQueryContext() {
  return useContext(QueryContext);
}

export default QueryContextProvider;
