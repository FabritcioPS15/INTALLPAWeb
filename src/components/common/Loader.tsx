import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="tree">
          {[0, 1, 2, 3].map((x) => (
            <div key={x} className="branch" style={{ '--x': x } as React.CSSProperties}>
              {[0, 1, 2, 3].map((i) => (
                <span key={i} style={{ '--i': i } as React.CSSProperties} />
              ))}
            </div>
          ))}
          <div className="stem">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} style={{ '--i': i } as React.CSSProperties} />
            ))}
          </div>
          <span className="shadow" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-light);
  z-index: 9999;

  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tree {
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(30deg);
    animation: treeAnimate 5s linear infinite;
  }

  @keyframes treeAnimate {
    0% {
      transform: rotateX(-20deg) rotateY(360deg);
    }
    100% {
      transform: rotateX(-20deg) rotateY(0deg);
    }
  }

  .tree div {
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateY(calc(25px * var(--x))) translateZ(0px);
  }

  .tree div.branch span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #69c069, #77dd77);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    border-bottom: 5px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) rotateX(30deg) translateZ(55px);
  }

  .tree div.stem span {
    position: absolute;
    top: 110px;
    left: calc(50% - 15px);
    width: 30px;
    height: 60px;
    background: linear-gradient(90deg, #bb4622, #df7214);
    border-bottom: 5px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(15px);
  }

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    filter: blur(20px);
    transform-style: preserve-3d;
    transform: rotateX(90deg) translateZ(-65px);
  }
`;

export default Loader;
