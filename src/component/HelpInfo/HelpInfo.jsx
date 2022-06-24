import React from "react";
import "./HelpInfo.scss";
import { Link } from "react-router-dom";
import HelpHeader from "../HelpHeader/HelpHeader";

function HelpInfo() {
  return (
    <>
      <HelpHeader />
      <section className=" help-info">
        <div className="help-info__wrap">
          <h1 className=" help-info__heading">How can we help you?</h1>
          <h3 className=" help-info__heading--2">
            3. Last but not least... we need some of your contact information so
            we can reach you with an answer to your question!
          </h3>
          <div className="help-info__form--box">
            <div className="help-info__form">
              <label htmlFor="name" className="help-info__form--lable">
                First Name
              </label>
              <input
                className="help-info__form--input"
                id="name"
                name="name"
                type="text"
                placeholder="John"
                required
              ></input>
            </div>
            <div className="help-info__form">
              <label htmlFor="lastname" className="help-info__form--lable">
                Last Name
              </label>
              <input
                className="help-info__form--input"
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Smith"
                required
              ></input>
            </div>
            <div className="help-info__form">
              <label htmlFor="email" className="help-info__form--lable">
                Email
              </label>
              <input
                className="help-info__form--input"
                id="email"
                name="email"
                type="email"
                placeholder="John.Smith@form.com"
                required
              ></input>
            </div>
            <div className="help-info__form">
              <label htmlFor="phone" className="help-info__form--lable">
                Phone
              </label>
              <input
                className="help-info__form--input"
                id="phone"
                name="phone"
                type="tel"
                placeholder="666-666-666"
                required
              ></input>
            </div>
          </div>
          <div className="help-info__btn--box">
            <Link to={"/helpfinal"}>
              <button className="help-info__btn">Submit</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HelpInfo;
