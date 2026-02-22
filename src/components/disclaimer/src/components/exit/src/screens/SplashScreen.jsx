import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { GiStarSattelites } from 'react-icons/gi';

const SplashScreen = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    // Duration for the splash animation
    const timer = setTimeout(() => {
      if (user.isSetupComplete) {
        navigate('/home');
      } else {
        navigate('/language');
      }
    }, 3500); // 3.5 seconds to allow animation to breathe

    return () => clearTimeout(timer);
  }, [navigate, user.isSetupComplete]);

  return (
    <Container>
      <CosmicBg />
      
      <LogoContainer
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <LogoWrapper>
          <GiStarSattelites size={80} color="#00f3ff" />
          <ScannerLine
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </LogoWrapper>
        
        <Title
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          AI Palm Reader
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Tarot & Astrology Guidance
        </Subtitle>
      </LogoContainer>

      <Footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Decoding the Cosmic Blueprint...
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  position: relative;
`;

const CosmicBg = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle at center, #1a103c 0%, #0f0c29 70%);
  animation: rotate 20s linear infinite;
  z-index: 1;

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const LogoContainer = styled(motion.div)`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 15px rgba(0, 243, 255, 0.5));
`;

const ScannerLine = styled(motion.div)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.accent};
  opacity: 0.7;
  z-index: 3;
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 2.5rem;
  background: ${({ theme }) => theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  letter-spacing: 2px;
`;

const Subtitle = styled(motion.p)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-top: 10px;
`;

const Footer = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  z-index: 2;
`;

export default SplashScreen;
