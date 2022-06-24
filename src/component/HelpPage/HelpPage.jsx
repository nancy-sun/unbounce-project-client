import React from "react";
import "./HelpPage.scss";
import { Link } from "react-router-dom";
import HelpHeader from "../HelpHeader/HelpHeader";

function HelpPage() {
  return (
    <>
      <HelpHeader />
      <section className=" help">
        <div className="help__wrap">
          <div className="help__wrap--1">
            <h1 className=" help__heading">Let us help you!</h1>
            <p>
              Whether you’re curious about features, a free trial, or even
              press—we’re ready to answer any and all questions.
            </p>
          </div>
          <div className="help__wrap--2">
            <h2 className=" help__heading--2">
              Skip the line, submit your question{" "}
            </h2>
            <p>
              Complete our easy and interactive form in just 3 easy steps to
              generate a ticket with our team and we will get back to you as
              soon as possible with an answer either through email or phone,
              whatever works best for you
            </p>
          </div>
          <div className="help__btn--box">
            <Link to={"/helpdegree"}>
              <button className="help__btn">Let's go</button>
            </Link>
          </div>
          <div className="help__text--box">
            <h2 className=" help__heading--2 help__heading--box">
              Want to speak to a representative?{" "}
            </h2>
            <h3 className=" help__heading--3">
              Give us a call at the numbers below:
            </h3>
            <p>
              <b>Worldwide:</b> +1 604 484 1354
            </p>
            <p>
              <b>North America</b>(toll-free): +1 888 515 9161
            </p>
            <p>
              Catch us on weekdays via phone, live chat, and email from 1am-8 pm
              PST. On weekends, send us an email from 9am-9 pm PST. As a polite
              heads up—we do experience slight delays outside of weekday support
              hours so submitting your question through our form above might be
              more time efficient for you!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HelpPage;
