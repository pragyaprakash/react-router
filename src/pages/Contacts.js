import React from "react";
import logo from "../images/contacts.png"
import "../css/App.css"
export default function Contacts() {
  return (<div>
    <div className="message-header">
      <p>Welcome to the contacts page</p>
    </div>
    <img src={logo} alt="logo" />
</div>);
}