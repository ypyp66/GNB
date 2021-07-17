import React, { useEffect, useState } from "react";
import LOGO from "../img/wanted.png";
import styled from "styled-components";
import { CgSearch } from "react-icons/cg";
import { BiBell, BiMenu } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import Contents from "./Contents";

const Outter = styled.div`
  box-sizing: border-box;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 767px) {
    border-bottom: 1px solid lightgray;
  }
`;
const NavListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  list-style: none;
  font-size: 14px;
  font-weight: 600;
  justify-content: space-evenly;
  align-items: center;
  max-width: 600px;
  padding: 0;
  margin: 0;
  height: 100%;

  @media (max-width: 767px) {
    .selectVisible {
      visibility: hidden;
    }
  }
`;

const NavList = styled.li`
  cursor: pointer;
  width: fit-content;

  display: flex;
  align-items: center;
  height: 100%;

  @media (min-width: 767px) {
    :first-child {
      visibility: hidden;
    }
  }
  @media (min-width: 1200px) {
    :hover {
      border-bottom: 2px solid lightgray;
    }
  }
`;

const NavIconContainer = styled.aside`
  display: flex;
`;

const NavIcon = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  & + & {
    margin-left: 15px;
  }

  @media (min-width: 1055px) {
    :nth-last-child(1)::before {
      display: block;
      content: "";
      width: 1px;
      height: 10px;
      background-color: lightgray;
      margin-right: 10px;
      font-size: 13px;
      box-sizing: border-box;
    }
  }
`;

const Company = styled.a`
  border: 1px solid lightgray;
  padding: 5px 7px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 400;
`;

function Navbar() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const data = [
    { id: 1, title: "홈" },
    { id: 2, title: "탐색" },
    { id: 3, title: "커리어 성장" },
    { id: 4, title: "직군별 연봉" },
    { id: 5, title: "이력서" },
    { id: 6, title: "매치업" },
    { id: 7, title: "프리랜서" },
    { id: 8, title: "Ai 합격예측" },
  ];
  const icons = [
    { id: 11, title: <CgSearch size="22" /> },
    { id: 12, title: <BiBell size="22" /> },
    { id: 13, title: <FaRegUserCircle size="22" /> },
    { id: 14, title: <Company>기업 서비스</Company> },
    { id: 15, title: <BiMenu size="22" onClick={onMenuBtnClick} /> },
  ];
  const [isOpen, setIsOpen] = useState(false);

  function onMenuBtnClick(e) {
    console.log(e.target);
  }

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <>
      <Outter>
        {isMobile ? "" : <img src={LOGO} alt="wanted" height="49px" />}
        <NavListContainer>
          {data.map((d, index) => (
            <NavList
              id={d.id}
              onMouseOver={index === 1 ? () => setIsOpen(true) : () => {}}
              onMouseLeave={index === 1 ? () => setIsOpen(false) : () => {}}
              key={d.id}
              className={index > 2 ? "selectVisible" : ""}
            >
              {d.title}
            </NavList>
          ))}
        </NavListContainer>
        {!isMobile ? (
          <NavIconContainer>
            <NavListContainer>
              {icons.map((icon, index) => {
                if (index < icons.length - 1)
                  return <NavIcon key={icon.id}>{icon.title}</NavIcon>;
                else return "";
              })}
            </NavListContainer>
          </NavIconContainer>
        ) : (
          ""
        )}
        {isMobile ? (
          <NavIconContainer>
            <NavListContainer>
              {icons.map((icon, index) => {
                if (index > 1 && index < icons.length - 1) return "";

                return <NavIcon>{icon.title}</NavIcon>;
              })}
            </NavListContainer>
          </NavIconContainer>
        ) : (
          ""
        )}
      </Outter>
      {!isMobile ? <Contents isOpen={isOpen} /> : ""}
    </>
  );
}

export default Navbar;