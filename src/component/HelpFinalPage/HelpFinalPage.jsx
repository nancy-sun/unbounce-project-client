import React from "react";
import "./HelpFinalPage.scss";
import { Link } from "react-router-dom";
import HelpHeader from "../HelpHeader/HelpHeader";

function HelpFinalPage() {
  return (
    <>
      <HelpHeader />
      <section className=" help-final">
        <div className="help-final__wrap">
          <h1 className=" help-final__heading">We got it!</h1>
          <p>
            Thanks Ava! Your question has been received by our team and we are
            working hard to get back to you as we know your time is valuable. In
            the meantime, feel free to check out these articles we’ve compiled
            that might help give you more insight in regards to setting up your
            landing page.
          </p>

          <div className="help-final__btn--box">
            <Link to={"/help"}>
              <button className="help-final__btn">Return Homepage</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HelpFinalPage;
