import styled from "styled-components";

export const SelectorDiv = styled.label`
/* position: fixed; */
width: 40%;
height: 50%;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-top: 15%;
margin-left: 7%;
border: solid 0.5x;
border-color: #A9ABAE;
box-shadow: 2.5px 5px 2.5px 2.5px #A9ABAE;
.Name {
  position: relative;
  max-width: 30%;
  position: fixed;
  color: #032C3E;
  margin-top: 1%;
}
.Price {
  position: relative;
  color: #008A75;
  margin-top: 1%;
  margin-left: 30%;
}
img {
  position: relative;
  max-width:170px;
  max-height:150px;
  width: auto;
  height: auto;
  margin-left: -0%;
  margin-top: 6%;
  border-radius: 10px;
}
button {
  position: relative;
  width: 150px;
  height: 50px;
  margin-top: 19%;
  background: #06C9AB;
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #A9ABAE;
  &:hover,
  &:active {
    background: #2EFE69;
  }
}

`