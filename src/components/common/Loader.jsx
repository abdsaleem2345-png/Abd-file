import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = ({ fullScreen }) => {
  return (
    <LoaderWrapper fullScreen={fullScreen}>
      <Spinner />
      <Text>Connecting to the Stars...</Text>
    </LoaderWrapper>
  );
};

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.5; transform: scale(1); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  ${props => props.fullScreen && `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0f0c29;
    z-index: 9999;
  `}
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 243, 255, 0.1);
  border-top: 3px solid #00f3ff;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  filter: drop-shadow(0 0 10px #00f3ff);
`;

const Text = styled.p`
  margin-top: 20px;
  color: #94a3b8;
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: ${pulse} 2s ease-in-out infinite;
`;

export default Loader;
