import React from "react";
import styled from "styled-components";
import LOGO from "../img/logo.png";

const Mobile = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <Mobile>
      <Menu>
        <img src={LOGO} alt="wanted" height="30px" />
        <div
          style={{ color: "gray", cursor: "pointer" }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ✖
        </div>
      </Menu>
    </Mobile>
  );
}

export default MobileMenu;
