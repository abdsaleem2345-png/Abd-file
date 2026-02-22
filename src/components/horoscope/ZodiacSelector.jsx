import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { containerVariants, itemVariants } from '../../styles/animations';
import { zodiacData } from '../../utils/zodiacData';

const ZodiacSelector = ({ onSelect, selectedSign }) => {
  const { t } = useLanguage();

  return (
    <SelectorContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {t('horoscope.choose_sign') || 'Select Your Zodiac Sign'}
      </Title>
      
      <Grid
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {zodiacData.map((zodiac) => (
          <ZodiacItem
            key={zodiac.id}
            variants={itemVariants}
            isSelected={selectedSign === zodiac.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(zodiac.id)}
          >
            <IconWrapper>{zodiac.icon}</IconWrapper>
            <SignName>{t(`zodiac.${zodiac.id}`) || zodiac.name}</SignName>
            <SignDate>{zodiac.dateRange}</SignDate>
            {selectedSign === zodiac.id && <ActiveIndicator layoutId="active" />}
          </ZodiacItem>
        ))}
      </Grid>
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  padding: 10px;
  width: 100%;
`;

const Title = styled(motion.h3)`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`;

const ZodiacItem = styled(motion.div)`
  background: ${({ theme, isSelected }) => 
    isSelected ? theme.colors.secondaryGradient : theme.colors.glass};
  border: 1px solid ${({ theme, isSelected }) => 
    isSelected ? theme.colors.accent : theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s ease;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 8px;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));
`;

const SignName = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const SignDate = styled.span`
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 2px;
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent};
`;

export default ZodiacSelector;
