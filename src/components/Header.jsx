import React from "react";
import "./header.scss";
import TemporaryDrawer from "./TemporaryDrawer";
export default function Header() {
  return (
    <div className="header">
      <div className="nav_bar">
        <TemporaryDrawer />
      </div>
      <section className="logo">
        <img src="/images/stripps logo.png" alt="" />
      </section>
      <section className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Medic-Drive</li>
          <li> Sponsorship</li>
        </ul>
      </section>
    </div>
  );
}
