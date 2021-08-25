import React, { useState, useEffect } from "react";
import { Container, Label, SelectorButton } from './styles';

import Headers from "../../components/header";

const ListPoducts = () => {
  return (
    <>
      <Container>
        <Headers />
        <Label><h1>Encontre um produto para você</h1></Label>
        <SelectorButton>
          <label className="Name">Coca-cola 250ml</label>
          <img className="kuppiImage" src="https://static.carrefour.com.br/medias/sys_master/images/images/h3a/h3e/h00/h00/12175734472734.jpg" alt="kuppi" />
          <button>Detalhes</button>
        </SelectorButton>
      </Container>
    </>
  )
}

export default ListPoducts;
