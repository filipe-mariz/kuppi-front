import React, { useState, useEffect } from "react";
import { Container, Sidebar } from './styles';

const ListPoducts = () => {
  return (
    <>
      <Container>
       <Sidebar>
       <img className="kuppiImage" src="https://sitebooster-appsharp.netdna-ssl.com/i/6005b9e643e1e640535a08a7/2a856398fb5049129716b1929930ed16/f=JPEG" alt="kuppi" />
         <h1 className="Title">KuppiStore</h1>
         <h3 className="SubTitle">Um serviço do grupo Kuppi</h3>
         
       </Sidebar>
      </Container>
    </>
  )
}

export default ListPoducts;
