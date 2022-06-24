import React from "react";
import "./HelpDetail.scss";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import HelpHeader from "../HelpHeader/HelpHeader";

function HelpDetail() {
  return (
    <>
      <HelpHeader />
      <section className=" help-detail">
        <div className="help-detail__wrap">
          <h1 className=" help-detail__heading">How can we help you?</h1>
          <h3 className=" help-detail__heading--3">
            2. So you have questions about setting up your landing page, no
            worries we can definitely help you out with that!
          </h3>
          <div className="help-detail__dropdown--box">
            <div className="help-detail__dropdown--wrap">
              <DropdownButton
                id="dropdown-form-button"
                bsPrefix="customFormDrop"
                title="Do you currently have a builder chosen?"
                className="help-detail__dropdown"
              >
                <Dropdown.Item>yes</Dropdown.Item>
                <Dropdown.Item>No</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="help-detail__dropdown--wrap">
              <DropdownButton
                id="dropdown-form-button"
                bsPrefix="customFormDrop"
                title="What builder are you using? "
                className="help-detail__dropdown"
              >
                <Dropdown.Item>Smart Builder</Dropdown.Item>
                <Dropdown.Item>Classic Builder</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="help-detail__dropdown--wrap">
              <DropdownButton
                id="dropdown-form-button"
                bsPrefix="customFormDrop"
                title="What types of questions do you have in regards to the smart builder? "
                className="help-detail__dropdown"
              >
                <Dropdown.Item>Styling your Page </Dropdown.Item>
                <Dropdown.Item>Editing Text </Dropdown.Item>
                <Dropdown.Item>Working with Section Templates </Dropdown.Item>
                <Dropdown.Item>
                  Editing the Mobile Version of your Page{" "}
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="help-detail__btn--box">
            <Link to={"/helpinfo"}>
              <button className="help-detail__btn">Continue</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HelpDetail;
