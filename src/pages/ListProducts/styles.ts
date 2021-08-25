import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
min-height: inherit;
background: #fffff;
margin-top: 40px;
min-height: 100%;
width: 100%;
`

export const Label = styled.div`
h1 {
  text-align: left;
  font-weight: 600;
  font-size: 150%;
  line-height: 24px;
  color: #039B89;
  margin-left: 6%;
  margin-top: 1%;
}
`
export const SelectorButton = styled.label`
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
background: #FFFFFF/* linear-gradient(0deg, #00B3FF,  #FFFFFF, #FFFFFF); */;
.Name {
  color: #032C3E;
  margin-top: 20%;
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
  width: 90px;
  height: 50px;
  margin-top: -60%;
  background: #ED3237;
  color: white;
  border: none;
  border-radius: 10px;
}
`

export const SelectorDiv = styled.label`
position: relative;
width: 70%;
height: 300px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-top: 3%;
margin-left: 14%;
border: solid 0.5x;
border-color: #A9ABAE;
box-shadow: 2.5px 5px 2.5px 2.5px #A9ABAE;
.Name {
  position: relative;
  max-width: 60%;
  position: relative;
  color: #032C3E;
  margin-top: 1%;
}
.Price {
  position: relative;
  color: #008A75;
  top: -70%;
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

`