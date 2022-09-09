import styled from "styled-components";

import Logo from "components/Icons/Logo";
import MobileSidebar from "./MobileSidebar";

const Sidebar = () => {
  return (
    <Container>
      <LogoDiv>
        <Logo />
      </LogoDiv>
      <MobileSidebar />
    </Container>
  );
};

export default Sidebar;

const Container = styled.aside`
  flex: 2;
  border-right: 1px solid #eff1f6;
  color: #4d5760;
  @media (max-width: 992px) {
    font-size: 13px;
    display: none;
  }
`;

const LogoDiv = styled.div`
  padding-left: 3rem;
  padding-top: 2rem;
  @media (max-width: 1200px) {
    padding-left: 1.5rem;
  }
`;
