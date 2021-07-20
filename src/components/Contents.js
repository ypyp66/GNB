import React from "react";
import styled, { keyframes } from "styled-components";

const spread = keyframes`
  0% {
    height: 0%;

  }
  100% {
    height: 100%;
  }
`;

const Outter = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 100%;

  animation: ${spread} 0.1s ease;
`;

const Item = styled.h4`
  width: 100%;
  text-align: right;
  max-width: 1060px;
  margin: 0 auto;

  & + & {
    margin-top: 10px;
  }

  @media (min-width: 1200px) {
    width: 87.72%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
  }
`;

function Contents({ setIsOpen }) {
  const data = [
    { id: 31, title: "엔지니어링 설계 >" },
    { id: 32, title: "물류▪무역 >" },
    { id: 33, title: "제조▪생산 >" },
    { id: 34, title: "의료▪제약▪바이오 >" },
    { id: 35, title: "교육 >" },
    { id: 36, title: "법률▪집행기관 >" },
    { id: 37, title: "식▪음료 >" },
    { id: 38, title: "건설▪시설 >" },
    { id: 39, title: "공공▪복지 >" },
  ];
  return (
    <Outter
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      {data.map((d) => (
        <Item key={d.id}>{d.title}</Item>
      ))}
    </Outter>
  );
}

export default Contents;
