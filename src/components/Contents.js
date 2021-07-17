import React from "react";
import styled, { keyframes } from "styled-components";

const slideCol = keyframes`
    from {
      opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Outter = styled.ul`
  background-color: burlywood;
  list-style: none;
  text-align: right;

  transform: scale(1, 1);
  opacity: 1;

  animation: ${slideCol} 3s;
`;

const Item = styled.li`
  font-weight: 600;

  & + & {
    margin-top: 10px;
  }
`;
function Contents({ isOpen }) {
  const data = [
    { id: 1, title: "엔지니어링 설계 >" },
    { id: 2, title: "물류▪무역 >" },
    { id: 3, title: "제조▪생산 >" },
    { id: 4, title: "의료▪제약▪바이오 >" },
    { id: 5, title: "교육 >" },
    { id: 6, title: "법률▪집행기관 >" },
    { id: 7, title: "식▪음료 >" },
    { id: 8, title: "건설▪시설 >" },
    { id: 9, title: "공공▪복지 >" },
  ];
  return (
    <Outter>
      {isOpen && data.map((d) => <Item key={d.id}>{d.title}</Item>)}
    </Outter>
  );
}

export default Contents;
