import styled, { keyframes } from "styled-components";

const ani = keyframes`
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
`;
const ani2 = keyframes`
    from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
`;

export const AppStyle = styled.div`
  .button-container-1 {
    position: relative;
    width: 100px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6vh;
    overflow: hidden;
    border: 1px solid;
    font-weight: 300;
    font-size: 20px;
    transition: 0.5s;
    letter-spacing: 1px;
    border-radius: 8px;
    button {
      width: 101%;
      height: 100%;
      font-family: "Lato", sans-serif;
      font-weight: 300;
      font-size: 11px;
      letter-spacing: 1px;
      font-weight: bold;
      background: #000;
      -webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
      mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
      -webkit-mask-size: 2300% 100%;
      mask-size: 2300% 100%;
      border: none;
      color: #fff;
      cursor: pointer;
      -webkit-animation: ${ani2} 0.7s steps(22) forwards;
      animation: ${ani2} 0.7s steps(22) forwards;

      &:hover {
        -webkit-animation: ${ani} 0.7s steps(22) forwards;
        animation: ${ani} 0.7s steps(22) forwards;
      }
    }
  }
  .mas {
    position: absolute;
    color: #000;
    text-align: center;
    width: 101%;
    font-weight: 300;
    position: absolute;
    font-size: 11px;
    margin-top: 17px;
    overflow: hidden;
    font-weight: bold;
  }
`;