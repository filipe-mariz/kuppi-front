import styled from "styled-components";

export const Header = styled.div`
    position: fixed;
    width: 100%;
    height: 20%;
    padding: 32px 24px;
  /* border-radius: 30px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: -2%;
    background: linear-gradient(45deg, #19A0DA, #039B89, #2DFE81);
    /* background-size: 300%, 300%;
    animation: colors 15s ease infinite;
    @keyframes colors {
    0% {
        background-position: 0%, 50%;
    }
    50% {
        background-position: 100%, 50%;
    }

    100% {
        background-position: 0%, 50%;
    }
  } */

    img {
        max-width:70px;
        max-height:150px;
        width: auto;
        height: auto;
        margin-left: -80%;
        margin-top: 1%;
    }

    h1 {
        text-align: left;
        font-weight: 600;
        font-size: 200%;
        line-height: 24px;
        color: #fffff;
        margin-left: 60%;
        margin-top: -5%;
    }

    h3 {
        text-align: left;
        font-weight: 600;
        font-size: 10px;
        line-height: 24px;
        color: #fffff;
        margin-left: 64%;
        margin-top: 0%;
    }

`