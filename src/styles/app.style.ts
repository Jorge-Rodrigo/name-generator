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
      height: 550px;
    }
    to {
      height: 25px;
    }
`;

const moveToothhUp = keyframes`
    from {
      margin-top: 550px;  
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

export const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  margin-top: 40px;
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
`;

export const Monster = styled.div`
  min-width: 100%;

  .mounth-up {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ff6695;
    width: 100%;
    height: 550px;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    gap: 3px;
    transform: translateY(-50%);
    animation: ${moveMounthUp} 2s forwards;
  }

  .tooth-1 {
    width: 55px;
    height: 35px;
    border-bottom-left-radius: 162px;
    border-bottom-right-radius: 197px;
    background-color: white;
    margin-top: 550px;
    animation: ${moveToothhUp} 2s forwards;
  }
  .tooth-1-5 {
    width: 50px;
    height: 55px;
    border-bottom-left-radius: 85px;
    border-bottom-right-radius: 55px;
    background-color: white;
    margin-top: 550px;
    animation: ${moveToothhUp} 2s forwards;
  }
  .tooth-1-6 {
    width: 50px;
    height: 55px;
    border-bottom-left-radius: 55px;
    border-bottom-right-radius: 85px;
    background-color: white;
    margin-top: 550px;
    animation: ${moveToothhUp} 2s forwards;
  }
  .tooth-1-1 {
    width: 75px;
    height: 35px;
    border-bottom-left-radius: 162px;
    border-bottom-right-radius: 197px;
    background-color: white;
    margin-top: 550px;
    animation: ${moveToothhUp} 2s forwards;
  }
  .tooth-1-2 {
    width: 55px;
    height: 45px;
    border-bottom-left-radius: 162px;
    border-bottom-right-radius: 197px;
    background-color: white;
    margin-top: 550px;
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
    width: 55px;
    height: 35px;
    border-top-left-radius: 162px;
    border-top-right-radius: 197px;
    background-color: white;
    position: relative;
    bottom: 35px;
  }
  .tooth-2-5 {
    width: 50px;
    height: 55px;
    border-top-left-radius: 85px;
    border-top-right-radius: 55px;
    background-color: white;
    margin-bottom: 25px;
    position: relative;
    bottom: 55px;
  }
  .tooth-2-6 {
    width: 50px;
    height: 55px;
    border-top-left-radius: 55px;
    border-top-right-radius: 85px;
    background-color: white;
    margin-bottom: 25px;
    position: relative;
    bottom: 55px;
  }
  .tooth-2-1 {
    width: 75px;
    height: 35px;
    border-top-left-radius: 162px;
    border-top-right-radius: 197px;
    background-color: white;
    margin-bottom: 25px;
    position: relative;
    bottom: 35px;
  }
  .tooth-2-2 {
    width: 55px;
    height: 45px;
    border-top-left-radius: 162px;
    border-top-right-radius: 197px;
    background-color: white;
    margin-bottom: 25px;
    position: relative;
    bottom: 45px;
  }
`;
