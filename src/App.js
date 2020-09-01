import React from "react";
import { useQuery, gql } from "@apollo/client";
import mutation from "./mutation";
import logo from "./logo.svg";
import "./App.css";

export const QUERY = gql`
  query getDarkMode {
    isDarkMode @client
  }
`;

function App() {
  const { data } = useQuery(QUERY);
  let classNames = "App";

  if (data?.isDarkMode) {
    classNames += " dark";
  }

  return (
    <div className={classNames}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="checkbox" id="switch" onChange={mutation} />
        <label for="switch">Dark Mode toggle</label>
      </header>
    </div>
  );
}

export default App;
