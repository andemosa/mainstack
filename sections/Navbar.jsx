import { useRef, useState } from "react";
import styled from "styled-components";

import Logo from "components/Icons/Logo";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");

  const contentSpace = useRef(null);

  const toggleAccordion = () => {
    console.log("here");
    setActive(active === false ? true : false);
    setHeight(active ? "0px" : `${contentSpace?.current?.scrollHeight}px`);
  };

  return (
    <>
      <Container>
        <Hamburger onClick={toggleAccordion}>
          <Bar></Bar>
          <Bar></Bar>
        </Hamburger>
        <LogoDiv>
          <Logo />
        </LogoDiv>
      </Container>
      <Display
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        open={active}
      >
        <div>
          <MobileSidebar />
        </div>
      </Display>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    flex: 1;
    width: 100%;
  }
`;

const Display = styled.div`
  transition: max-height 0.3s;
  overflow: auto;
  background: #ffffff;
  min-height: ${(props) => (props.open ? "500px" : "unset")};
  & > div {
    overflow: auto;
  }
`;

const Hamburger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  outline: none;
  border: 2px solid #131316;
  border-radius: 5px;
  :hover,
  :focus {
    background: transparent;
  }
`;

const Bar = styled.div`
  display: block;
  width: 20px;
  height: 2px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #131316;
`;

const LogoDiv = styled.div`
  padding: 0 20px;
`;
