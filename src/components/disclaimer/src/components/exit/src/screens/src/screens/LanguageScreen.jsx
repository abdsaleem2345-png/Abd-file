import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { pageVariants, containerVariants, itemVariants } from '../styles/animations';
import { GiGlobe } from 'react-icons/gi';

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'it', name: 'Italian', native: 'Italiano' },
  { code: 'ko', name: 'Korean', native: '한국어' },
];

const LanguageScreen = () => {
  const navigate = useNavigate();
  const { language, changeLanguage, t } = useLanguage();

  const handleSelect = (code) => {
    changeLanguage(code);
  };

  const handleContinue = () => {
    navigate('/onboarding');
  };

  return (
    <Container
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header>
        <IconWrapper>
          <GiGlobe size={48} />
        </IconWrapper>
        <Title>Choose Your Language</Title>
        <Subtitle>Select the language for your cosmic guidance</Subtitle>
      </Header>

      <LanguageGrid
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {languages.map((lang) => (
          <LanguageCard
            key={lang.code}
            variants={itemVariants}
            isSelected={language === lang.code}
            onClick={() => handleSelect(lang.code)}
            whileTap={{ scale: 0.95 }}
          >
            <NativeName isSelected={language === lang.code}>
              {lang.native}
            </NativeName>
            <EnglishName>{lang.name}</EnglishName>
            {language === lang.code && <ActiveIndicator layoutId="activeLang" />}
          </LanguageCard>
        ))}
      </LanguageGrid>

      <Footer>
        <ContinueButton
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleContinue}
        >
          {t('common.continue') || 'Continue'}
        </ContinueButton>
      </Footer>
    </Container>
  );
};

const Container = styled(motion.div)`
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.typography.headingFont};
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const LanguageGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  flex: 1;
`;

const LanguageCard = styled(motion.div)`
  background: ${({ theme, isSelected }) => 
    isSelected ? theme.colors.secondaryGradient : theme.colors.glass};
  border: 1px solid ${({ theme, isSelected }) => 
    isSelected ? theme.colors.accent : theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl}; /* 32px */
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
`;

const NativeName = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme, isSelected }) => isSelected ? '#fff' : theme.colors.text};
`;

const EnglishName = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 4px;
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent};
`;

const Footer = styled.div`
  margin-top: 40px;
`;

const ContinueButton = styled(motion.button)`
  width: 100%;
  padding: 18px;
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
`;

export default LanguageScreen;
