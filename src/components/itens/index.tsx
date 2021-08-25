import { SelectorDiv } from './styles';
import Button from '../Button';
import { useState } from 'react';

import Modal from '../modals/ProductsModal';

const SelectorPoducts = () => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <SelectorDiv>
        <label className="Name">Coca-cola 250ml</label>
        <img className="kuppiImage" src="https://static.carrefour.com.br/medias/sys_master/images/images/h3a/h3e/h00/h00/12175734472734.jpg" alt="kuppi" />
        <label className="Price">R$ 2,50</label>
        <Button isSecondary={false} onClick={() => setDisplayModal(true)}>
          Detalhes
        </Button>
        {displayModal ? <Modal modalDismiss={() => setDisplayModal(false)} /> : null}
      </SelectorDiv>
    </>
  )

}

export default SelectorPoducts;