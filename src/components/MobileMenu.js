import React from "react";
import styled from "styled-components";
import LOGO from "../img/logo.png";
import USER from "../img/user.png";

const Mobile = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MenuContainer = styled(Bar.withComponent("ul"))`
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 45px;
`;

const MenuItem = styled.li`
  font-size: 20px;
  padding: 12px 0;
  cursor: pointer;
  width: 100%;

  :nth-child(3) {
    border-top: 1px solid #eee;
    margin-top: 10px;
    padding-top: 20px;
  }
  :nth-child(8) {
    border-top: 1px solid #eee;
    margin-top: 10px;
    padding-top: 20px;
  }
  :nth-child(10) {
    border-top: 1px solid #eee;
    margin-top: 10px;
    padding-top: 20px;
  }
`;

function MobileMenu({ setMobileOpen }) {
  const data = [
    { id: 31, title: "MY 원티드" },
    { id: 32, title: "프로필" },
    { id: 33, title: "이력서" },
    { id: 34, title: "매치업" },
    { id: 35, title: "추천" },
    { id: 36, title: "지원 현황" },
    { id: 37, title: "프리랜서" },
    { id: 38, title: "직군별 연봉" },
    { id: 39, title: "커리어 성장" },
    { id: 40, title: "기업 서비스" },
    { id: 41, title: "로그아웃" },
  ];
  return (
    <Mobile onClick={() => setMobileOpen((prev) => !prev)}>
      <Bar>
        <img src={LOGO} alt="wanted2" height="30px" />
        <div style={{ color: "gray", cursor: "pointer" }}>✖</div>
      </Bar>
      <MenuContainer>
        {data.map((d, index) => {
          if (index === 0)
            return (
              <Bar key={d.id}>
                <MenuItem>{d.title}</MenuItem>
                <img src={USER} alt="user" height="30px" />
              </Bar>
            );
          return <MenuItem key={d.id}>{d.title}</MenuItem>;
        })}
      </MenuContainer>
    </Mobile>
  );
}

export default MobileMenu;
