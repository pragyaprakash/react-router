import React from "react";
import logo from "../images/about.jpg"
import "../css/App.css"
export default function About() {
  return (<div>
    <div className="message-header">
      <p>Welcome to the about page</p>
    </div>
    <img src={logo} alt="logo" />
</div>);
}