import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations/lib/fade-in-down";
import "./MainDropdown.scss";

const fadeInDownAnimation = keyframes`${fadeInDown}`;

const FadeInDownDiv = styled.div`
  animation: 1s ${fadeInDownAnimation};
`;

const MainDropdown = ({ show, close, width, children }) => {
  const wrapperCard = width ? { width: width } : {};
  const wrapperController = width ? { right: width - 50 } : {};
  const dropdownArrow = width ? { left: width - 30 } : {};
  return show ? (
    <div className="wrapper-controller" style={wrapperController}>
      <FadeInDownDiv className="wrapper-dropdown">
        <div className="dropdown">
          <div className="dropdown-arrow" style={dropdownArrow} />
          <div className="dropdown-card">
            <div className="dropdown-card-wrapper" style={wrapperCard}>
              {children}
            </div>
          </div>
        </div>
        <div
          className="close-dropdown"
          onClick={() => {
            close(false);
          }}
        ></div>
      </FadeInDownDiv>
    </div>
  ) : null;
};

export default MainDropdown;
