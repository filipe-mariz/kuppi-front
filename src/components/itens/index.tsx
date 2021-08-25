import { useState, useEffect } from 'react';
import { SelectorDiv } from './styles';
import Button from '../Button';
import api from '../../services/api';

interface Products {
  name: string;
  price: number;
  category: string;
  description: string;
  photo_url: string
}

const SelectorPoducts = () => {
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
            <label className="Category">{product.category}</label>
            <label className="Name">{product.name}</label>
            <img className="kuppiImage" src={product.photo_url} alt="kuppi" />
            <label className="Price">R$ {product.price}</label>
            <label className="Description">Descrição do produto: {product.description}</label>
            <Button isSecondary={false} onClick={() => (true)}>Comprar</Button>
          </SelectorDiv>
        )
      })}
    </>
  )

}

export default SelectorPoducts;