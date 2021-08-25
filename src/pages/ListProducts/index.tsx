import React, { useState, useEffect } from "react";
import { Container, Label } from './styles';

import Headers from "../../components/header";
import SelectorPoducts from '../../components/itens'

const ListPoducts = () => {
  return (
    <>
      <Container>
        <Headers />
        <Label><h1>Encontre um produto para você</h1></Label>
        {}
        <SelectorPoducts />
        <SelectorPoducts />
        <SelectorPoducts />
      </Container>
    </>
  )
}

export default ListPoducts;
