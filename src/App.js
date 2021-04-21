import React from "react";
import { useQuery, gql, useApolloClient } from "@apollo/client";
import mutation from "./mutation";
import logo from "./logo.svg";
import "./App.css";

export const QUERY = gql`
  query getDarkMode {
    isDarkMode @client
  }
`;

function App() {
  const { data: currentData } = useQuery(QUERY);
  const client = useApolloClient();
  let classNames = "App";

  if (currentData?.isDarkMode) {
    classNames += " dark";
  }

  const handleChange = () => {
    client.writeQuery({
      query: QUERY,
      data: {
        isDarkMode: !currentData.isDarkMode,
      },
    });
  };

  return (
    <div className={classNames}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="checkbox" id="switch" onChange={handleChange} />
        <label htmlFor="switch">Dark Mode toggle</label>
      </header>
    </div>
  );
}

export default App;
