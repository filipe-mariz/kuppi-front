import styled from "styled-components";

export const SelectorDiv = styled.label`
position: relative;
width: 60%;
height: 550px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-top: 3%;
margin-left: 20%;
border: solid 0.5x;
border-color: #A9ABAE;
box-shadow: 2.5px 5px 2.5px 2.5px #A9ABAE;
.Category {
  position: relative;
  max-width: 60%;
  position: relative;
  color: #032C3E;
  margin-top: 1%;
  right: 35%;
}
.Name {
  position: relative;
  max-width: 60%;
  position: relative;
  color: #032C3E;
  margin-top: -4%;
  font-size: 30px;
}
.Price {
  position: relative;
  color: #008A75;
  top: -60%;
  left: 40%;
}
img {
  position: relative;
  max-width:170px;
  max-height:150px;
  width: auto;
  height: auto;
  margin-left: -0%;
  top: 6%;
  border-radius: 10px;
}
button {
  position: relative;
  width: 150px;
  height: 50px;
  top: -10%;
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
.Description {
  max-width: 60%;
  position: relative;
  color: #008A75;
  top: -5%;
  left: 0%;
}
`