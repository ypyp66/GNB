### 원티드 교육 과제

#### - 컴포넌트 구조

##### /components : 컴포넌트들을 모아놓기 위한 폴더

- **Contents.js** // Navbar 메뉴 hover시 나오는 메뉴
- **MobileMenu.js** // Mobile에서 메뉴 클릭시 나오는 메뉴
- **Navbar.js** // Navbar 메뉴

##### /img : 이미지 저장 폴더

#### - 구현 사항

- 반응형
- 모바일일 때만 전용 메뉴
- Navbar fixed
- 모바일 이상일 때만 PC용 메뉴
- PC용 메뉴 mount시 애니메이션 적용

#### 사용 라이브러리 및 이유

- react-responsive : mobile일 때 특정 동작을 실행하기 위해 사용
- styled-components : 컴포넌트 단위로 SCSS를 사용하기 위해 사용
