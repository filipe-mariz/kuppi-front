import styled, {css} from 'styled-components';

interface ButtonContainerProps {
  isSecondary: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  margin-left: 1px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  width: 127px;
  height: 40px;
  border-radius: 10px;
  border: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* line-height: 24px; */
  text-align: center;

  &[disabled] {
    background: #AFBCC3;
  }
`;