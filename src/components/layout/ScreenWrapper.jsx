import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ScreenWrapper = ({ children }) => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cosmic background elements */}
      <StarField />
      <GlowSpot color="#1a103c" top="10%" left="10%" />
      <GlowSpot color="#0f0c29" bottom="10%" right="10%" />
      
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  position: relative;
  z-index: 5;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StarField = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0));
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0.15;
  z-index: 1;
`;

const GlowSpot = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: ${props => props.color};
  filter: blur(100px);
  border-radius: 50%;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  right: ${props => props.right || 'auto'};
  z-index: 2;
  opacity: 0.5;
`;

export default ScreenWrapper;
