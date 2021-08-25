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
  const [product, setProduct] = useState<Products>();

  useEffect(() => {
    api
      .get('/example/products/1')
      .then((response) => setProduct(response.data))
      .catch((err) => {
        console.log('Error' + err)
      })
  }, [])


  return (
    <>
    {}
      <SelectorDiv>
        <label className="Name">{product?.name}</label>
        <img className="kuppiImage" src={product?.photo_url} alt="kuppi" />
        <label className="Price">R${product?.price}</label>
        <Button isSecondary={false} onClick={() => setDisplayModal(true)}>
          Detalhes
        </Button>
        {displayModal && (
          <Modal modalDismiss={() => setDisplayModal(false)} />
        )}
        {/* {displayModal ? <Modal modalDismiss={() => setDisplayModal(false)} /> : null} */}
      </SelectorDiv>
    </>
  )

}

export default SelectorPoducts;