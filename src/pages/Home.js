import React from "react";
import logo from "../images/home.jpeg"
import "../css/App.css"
export default function Home() {
  return (<div>
      <div className="message-header">
        <p>Welcome to the home page</p>
      </div>
      <img src={logo} alt="logo" />
  </div>);
}