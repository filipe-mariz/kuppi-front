import React, { useState, useEffect } from "react";
import { Container, Label } from './styles';

import Headers from "../../components/header";
import SelectorPoducts from '../../components/itens'

import api from '../../services/api'
interface Products {
  name: string;
  price: number;
  category: string;
  description: string;
  photo_url: string
}

const ListPoducts = () => {
  return (
    <>
      <Container>
        <Headers />
        <Label><h1>Encontre um produto para você</h1></Label>
        {}
        <SelectorPoducts />
        <SelectorPoducts />
      </Container>
    </>
  )
}

export default ListPoducts;
