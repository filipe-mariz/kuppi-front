import React, { useState, useEffect } from "react";
import { Container, Label, Selector } from './styles';

import Headers from "../../components/header";

const ListPoducts = () => {
  return (
    <>
      <Container>
        <Headers />
        <Label><h1>Encontre um produto para você</h1></Label>
        <Selector>
          Lascou
        </Selector>
      </Container>
    </>
  )
}

export default ListPoducts;
