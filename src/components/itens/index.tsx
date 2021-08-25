import dotenv from 'dotenv'
import { SelectorDiv } from './styles';
import Button from '../Button';
import { useState } from 'react';

import Modal from '../modals/ProductsModal';
import { useEffect } from 'react';

import api from '../../services/api';

interface Products {
  name: string;
  price: number;
  category: string;
  description: string;
  photo_url: string
}

const SelectorPoducts = () => {
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
    </>
  )

}

export default SelectorPoducts;