import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: () => void;

  isSecondary?: boolean;
}

const Button = ({ children, onClick, isSecondary=false, ...rest }: ButtonProps) => {
  return (
    <ButtonContainer className='Button' onClick={onClick} isSecondary={isSecondary} {...rest}>
      {children}
    </ButtonContainer>
  );
};

export default Button;