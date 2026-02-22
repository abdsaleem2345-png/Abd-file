import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { containerVariants, itemVariants } from '../../styles/animations';
import { 
  GiHeartOrgan, 
  GiRing, 
  GiTwoHearts, 
  GiBrokenHeartZone 
} from 'react-icons/gi';

const LoveCategory = ({ onSelect }) => {
  const { t } = useLanguage();

  const categories = [
    { 
      id: 'compatibility', 
      icon: <GiTwoHearts />, 
      label: t('love.cat_compatibility') || 'Compatibility Scan' 
    },
    { 
      id: 'soulmate', 
      icon: <GiRing />, 
      label: t('love.cat_soulmate') || 'Soulmate Guidance' 
    },
    { 
      id: 'relationship', 
      icon: <GiHeartOrgan />, 
      label: t('love.cat_relationship') || 'Relationship Advice' 
    },
    { 
      id: 'singles', 
      icon: <GiBrokenHeartZone />, 
      label: t('love.cat_singles') || 'Single\'s Outlook' 
    },
  ];

  return (
    <CategoryWrapper>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {t('love.select_path') || 'Choose Your Path of Heart'}
      </Title>
      
      <Grid
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(cat.id)}
          >
            <IconWrapper>{cat.icon}</IconWrapper>
            <Label>{cat.label}</Label>
            <GlowOverlay />
          </CategoryCard>
        ))}
      </Grid>
      
      <DisclaimerText>
        {t('love.disclaimer_note') || 'Deeply symbolic guidance for your emotional journey.'}
      </DisclaimerText>
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled(motion.h2)`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${({ theme }) => theme.typography.headingFont};
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  max-width: 400px;
`;

const CategoryCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl}; /* 32px */
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

const IconWrapper = styled.div`
  font-size: 2.8rem;
  color: #ff4d94; /* Romantic pinkish-red accent */
  margin-bottom: 12px;
  filter: drop-shadow(0 0 10px rgba(255, 77, 148, 0.4));
`;

const Label = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
`;

const GlowOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255, 77, 148, 0.08) 0%, transparent 70%);
  pointer-events: none;
`;

const DisclaimerText = styled.p`
  margin-top: 2rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
  text-align: center;
  max-width: 250px;
`;

export default LoveCategory;
