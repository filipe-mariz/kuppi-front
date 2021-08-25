import styled from "styled-components";

export const Header = styled.div`
.Name {
  position: fixed;
  color: #008A75;
  margin-top: -20%;
  margin-left: -45%;
  font-size: 30px;
}
.Category {
  position: fixed;
  color: #008A75;
  margin-top: -10%;
  margin-left: -45%;
  font-size: 20px;
}
.Description {
  position: fixed;
  color: #008A75;
  font-size: 15px;
  margin-top: -5%;
  margin-left: -45%;
}
`
export const Body = styled.div`
img {
  max-width:170px;
  max-height:150px;
  width: auto;
  height: auto;
  margin-left: 0%;
  margin-top: 80px;
  border-radius: -100%;
}
label {
  position: fixed;
  color: #008A75;
  margin-top: 40%;
  margin-left: -23%;
  font-size: 30px;
}
`
export const BackButtonn = styled.div`
position: fixed;
width: 150px;
height: 35px;
background: #06C9AB;
border-radius: 10px;
margin-top: 430px;
margin-left: 0%;
&:hover,
  &:active {
    background: #2EFE69;
  }
`