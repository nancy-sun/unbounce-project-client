import React from "react";
import "./HelpHeader.scss";
import Icon from "../../assets/unbounce-icon.svg";

function HelpHeader() {
  return (
    <header className="header">
      <img className="header__img" src={Icon} alt="unbounce" />
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">pricing</li>
          <li className="header__item">Learn</li>
          <li className="header__item">contact</li>
          <button className="header__btn--1"> Log in</button>
          <button className="header__btn--2"> Start free trail</button>
        </ul>
      </nav>
    </header>
  );
}

export default HelpHeader;
