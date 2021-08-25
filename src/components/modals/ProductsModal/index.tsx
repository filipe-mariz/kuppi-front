import React from 'react'
import ModalContainer from '../ModalContainer'
import { Header, Body, BackButtonn } from './styles'
import Button from '../../Button'
import BackButton from '../../BackButton'
import { useState } from 'react'
interface ViewProducts {
  modalDismiss: () => void;
}

const Modal = ({ modalDismiss }: ViewProducts) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <ModalContainer
      modalDismiss={() => modalDismiss()}
      title=''
      subtitle=''
    >
      <Header>
        <h2 className="Name">Coca-cola 250ml</h2>
        <h1 className="Category">Bebidas</h1>
        <h2 className="Description">Coca-cola de garrafa de vidro 250ml</h2>
      </Header>
      <Body>
        <img src="https://static.carrefour.com.br/medias/sys_master/images/images/h3a/h3e/h00/h00/12175734472734.jpg" alt="kuppi" />
        <label>R$2,99</label>
      </Body>
      <BackButtonn>Voltar</BackButtonn>
    </ModalContainer>

  )
}

export default Modal
