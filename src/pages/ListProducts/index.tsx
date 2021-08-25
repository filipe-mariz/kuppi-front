import React, { useState, useEffect } from "react";
import { Container, Label, SelectorDiv } from './styles';

import Headers from "../../components/header";

import api from '../../services/api'
import Button from "../../components/Button";
import SelectorPoducts from '../../components/itens'
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
        <SelectorPoducts />
      </Container>
    </>
  )
}

export default ListPoducts;
