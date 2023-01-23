import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Naira from "./Naira";
// import { getChange } from "./Backend";

function App() {
  return (
    <div className="App container-fluid">
      <Nav />
      <Naira />
      <Footer />
    </div>
  );
}

export default App;
