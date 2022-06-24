import React from "react";
import "./HelpDegree.scss";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import HelpHeader from "../HelpHeader/HelpHeader";

function HelpDegree() {
  return (
    <>
      <HelpHeader />
      <section className=" help-degree">
        <div className="help-degree__wrap">
          <h1 className=" help-degree__heading">How can we help you?</h1>
          <div className="help__heading--box">
            <h2 className=" help__heading--2 ">
              1. Let us know why you’re here!
            </h2>
          </div>
          <div className="help-degree__form--wrap">
            <div className="help-degree__form--box">
              <h2 className=" help__heading--2">
                You are reaching out to us because...
              </h2>
              <DropdownButton
                id="dropdown-basic-button"
                bsPrefix="customDrop"
                title="You are expriencing a technical issue"
                className="help-degree__dropdown"
              >
                <Dropdown.Item>
                  You have question about how to use features
                </Dropdown.Item>
                <Dropdown.Item>
                  you nedd help setting up your landing page
                </Dropdown.Item>
                <Dropdown.Item>
                  you have question about our price and plans
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="help-degree__btn--box">
            <Link to={"/helpdetail"}>
              <button className="help-degree__btn">Continue</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HelpDegree;
