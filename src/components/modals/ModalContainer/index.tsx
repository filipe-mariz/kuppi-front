import { Container, Background } from './styles';

interface ModalContainerProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  modalDismiss: () => void;
}

const ModalContainer = ({ children, title, subtitle, modalDismiss }: ModalContainerProps) => {
  return (
    <Background onClick={() => modalDismiss()}>
      <Container onClick={(e) => e.stopPropagation()}>
        <p className='title'>{title}</p>
        <p className='subtitle'>{subtitle}</p>
        {children}
      </Container>
    </Background>
  );
};

export default ModalContainer;