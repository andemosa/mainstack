import styled from "styled-components";

const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border: ${(props) => props.size / 8}px solid;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.color} transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = ({ color = "#131316", size = 18, small = false }) => {
  return (
    <Wrapper small={small}>
      <StyledSpinner role="img" aria-label="Loading" color={color} size={size}>
        <div />
        <div />
        <div />
        <div />
      </StyledSpinner>
    </Wrapper>
  );
};

export default LoadingSpinner;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: ${(props) => (props.small ? "0" : "60px")};
  max-height: ${(props) => (props.small ? "0" : "100px")};
  padding-top: ${(props) => (props.small ? "0" : "1em")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
