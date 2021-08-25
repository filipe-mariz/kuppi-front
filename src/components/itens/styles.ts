import styled from "styled-components";

export const SelectorDiv = styled.label`
position: fixed;
width: 15%;
height: 50%;
padding: 30px 24px;
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
  color: #032C3E;
  margin-top: 20px;
}
.Price {
  color: #022B0E;
  margin-top: -100px;
}
img {
  max-width:170px;
  max-height:150px;
  width: auto;
  height: auto;
  margin-left: -0%;
  margin-top: -70%;
  border-radius: 10px;
}
button {
  width: 150px;
  height: 50px;
  margin-top: -60%;
  background: #ED3237;
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #A9ABAE;
  &:hover,
  &:active {
    background: #FA8285;
  }
}

`