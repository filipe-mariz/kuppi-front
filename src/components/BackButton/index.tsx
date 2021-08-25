import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

import leftArrow from '../../assets/leftArrow.svg'

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: () => void;
}

const BackButton = ({ children, onClick, ...rest }: BackButtonProps) => {
  return (
    <ButtonContainer className='BackButton' onClick={onClick} {...rest}>
      <img src={leftArrow} alt="voltar" />
      {children}
    </ButtonContainer>
  );
};

export default BackButton;