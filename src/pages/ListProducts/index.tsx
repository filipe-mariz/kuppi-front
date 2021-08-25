import React, { useState, useEffect } from "react";
import { Container, Label, SelectorDiv } from './styles';

import Headers from "../../components/header";

import api from '../../services/api'
import Button from "../../components/Button";
interface Products {
  name: string;
  price: number;
  category: string;
  description: string;
  photo_url: string
}

const ListPoducts = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [data, setData] = useState<Products[]>([])

  const handleGettingPatientsData = async () => {
    try {
      const apiResponse = await api.get('/example/products/')
      if (apiResponse.data) {
        setData(apiResponse.data)
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    handleGettingPatientsData();
  }, []);

  return (
    <>
      <Container>
        <Headers />
        <Label><h1>Encontre um produto para você</h1></Label>
        {data.map((product) => {
          return (
            <SelectorDiv>
              <label className="Name">{product.name}</label>
              <img className="kuppiImage" src={product.photo_url} alt="kuppi" />
              <label className="Price">R${product.price}</label>
              <Button isSecondary={false} onClick={() => setDisplayModal(true)}>
                Detalhes
              </Button>
            </SelectorDiv>
          )
        })}
      </Container>
    </>
  )
}

export default ListPoducts;
