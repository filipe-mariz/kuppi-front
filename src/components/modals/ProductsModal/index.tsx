import React from 'react'
import ModalContainer from '../ModalContainer'

interface ViewProducts {
  modalDismiss: () => void;
}

const Modal = ({ modalDismiss }: ViewProducts) => {
  return (

    <ModalContainer
    modalDismiss={() => modalDismiss()}
      title=''
      subtitle=''
    >
        <h1>ola mundo</h1>

    </ModalContainer>

  )
}

export default Modal