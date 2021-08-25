import styled from 'styled-components';

export const Container = styled.div`
  z-index: 200;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 551px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 80px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(26, 26, 26, 0.2);
  border-radius: 8px;
  text-align: center;
  .title {
    font-size: 16px;
    line-height: 24px;
  }
  .subtitle {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 56px;
  }
`;

export const Background = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #00000035;
`;