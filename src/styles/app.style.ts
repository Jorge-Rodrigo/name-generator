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

const moveMounthUp = keyframes`
    from {
      height: 280px;
    }
    to {
      height: 25px;
    }
`;

const moveToothhUp = keyframes`
    from {
      margin-top: 280px;  
    }
    to { 
      margin-top: 25px;
    }
`;

const moveMounthDown = keyframes`
    from {
      height: 280px;
    }
    to {
      height: 25px;
    }
  
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  margin-top: 40px;
  h1 {
    margin-bottom: 0;
    color: #fe1d8d;
    text-decoration: underline;
    font-size: 35px;
    margin-top: 22px;
    text-align: center;
  }
  .select-div {
    display: flex;
    gap: 20px;
    @media (max-width: 700px) {
      flex-direction: column;
    }
    .selected {
      box-shadow: -1px 20px 40px -1px rgba(251, 66, 158, 0.4);
      transform: translateY(-5px);
      background-color: #ff6695;
      color: #000;
      border: 1px solid #fb429e;
      border-radius: 18px;
      padding: 5px 15px;
      font-size: 20px;
      cursor: pointer;
    }
    .select {
      color: #fe1d8d;
      background-color: #000;
      box-shadow: -1px 13px 26px -1px rgba(251, 66, 158, 0.15);
      border: 1px solid #fb429e;
      border-radius: 18px;
      padding: 5px 15px;
      font-size: 20px;
      transition: box-shadow 0.3s, transform 0.3s;
      cursor: pointer;
      &:hover {
        box-shadow: -1px 20px 40px -1px rgba(251, 66, 158, 0.4);
        transform: translateY(-5px);
        background-color: #ff6695;
        color: #000;
      }
    }
  }
  .name {
    font-size: 20px;
    border: 2px solid #fb429e;

    border-radius: 8px;
    padding: 3px 15px;
    span {
      color: #fe1d8d;
      font-weight: 700;
      margin-left: 5px;
    }
    animation: ${fadeIn} 1s ease-in-out;
  }
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
    background: #000;

    button {
      width: 101%;
      height: 100%;
      font-family: "Lato", sans-serif;
      font-weight: 300;
      font-size: 11px;
      letter-spacing: 1px;
      font-weight: bold;
      background-color: #ff6695;
      -webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
      mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
      -webkit-mask-size: 2300% 100%;
      mask-size: 2300% 100%;
      border: none;
      color: #000;
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
    color: #fff;
    text-align: center;
    width: 101%;
    font-weight: 300;
    position: absolute;
    font-size: 11px;
    margin-top: 17px;
    overflow: hidden;
    font-weight: bold;
  }
  @media (max-width: 700px) {
    margin-bottom: 80px;
  }
`;

export const Monster = styled.div`
  min-width: 100%;

  .mounth-up {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ff6695;
    width: 100%;
    height: 280px;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    gap: 3px;
    animation: ${moveMounthUp} 2s forwards;
  }

  .tooth-1 {
    width: 55vw;
    height: 35px;
    border-bottom-left-radius: 162px;
    border-bottom-right-radius: 197px;
    background-color: white;
    margin-top: 280px;
    animation: ${moveToothhUp} 2s forwards;
  }
  .tooth-1-5 {
    width: 50vw;
    height: 55px;
    border-bottom-left-radius: 85px;
    border-bottom-right-radius: 55px;
    background-color: white;
    margin-top: 280px;
    animation: ${moveToothhUp} 2s forwards;
  }
  .tooth-1-6 {
    width: 50vw;
    height: 55px;
    border-bottom-left-radius: 55px;
    border-bottom-right-radius: 85px;
    background-color: white;
    margin-top: 280px;
    animation: ${moveToothhUp} 2s forwards;
  }
  .tooth-1-1 {
    width: 75vw;
    height: 35px;
    border-bottom-left-radius: 162px;
    border-bottom-right-radius: 197px;
    background-color: white;
    margin-top: 280px;
    animation: ${moveToothhUp} 2s forwards;
  }
  .tooth-1-2 {
    width: 55vw;
    height: 45px;
    border-bottom-left-radius: 162px;
    border-bottom-right-radius: 197px;
    background-color: white;
    margin-top: 280px;
    animation: ${moveToothhUp} 2s forwards;
  }
  .mounth-down {
    position: fixed;
    bottom: 0px;
    left: 0;
    background-color: #ff6695;
    width: 100%;
    height: 280px;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    gap: 3px;
    animation: ${moveMounthDown} 2s forwards;
  }
  .tooth-2 {
    width: 55vw;
    height: 35px;
    border-top-left-radius: 162px;
    border-top-right-radius: 197px;
    background-color: white;
    position: relative;
    bottom: 35px;
  }
  .tooth-2-5 {
    width: 50vw;
    height: 55px;
    border-top-left-radius: 85px;
    border-top-right-radius: 55px;
    background-color: white;
    margin-bottom: 25px;
    position: relative;
    bottom: 55px;
  }
  .tooth-2-6 {
    width: 50vw;
    height: 55px;
    border-top-left-radius: 55px;
    border-top-right-radius: 85px;
    background-color: white;
    margin-bottom: 25px;
    position: relative;
    bottom: 55px;
  }
  .tooth-2-1 {
    width: 75vw;
    height: 35px;
    border-top-left-radius: 162px;
    border-top-right-radius: 197px;
    background-color: white;
    margin-bottom: 25px;
    position: relative;
    bottom: 35px;
  }
  .tooth-2-2 {
    width: 55vw;
    height: 45px;
    border-top-left-radius: 162px;
    border-top-right-radius: 197px;
    background-color: white;
    margin-bottom: 25px;
    position: relative;
    bottom: 45px;
  }
`;
