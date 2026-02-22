import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { containerVariants, itemVariants } from '../../styles/animations';
import { GiHeartWings, GiBriefcase, GiCoins, GiStairsGoal } from 'react-icons/gi';

const TarotCategory = ({ onSelect }) => {
  const { t } = useLanguage();

  const categories = [
    { id: 'love', icon: <GiHeartWings />, label: t('tarot.categories.love') || 'Love & Relationships' },
    { id: 'career', icon: <GiBriefcase />, label: t('tarot.categories.career') || 'Career & Work' },
    { id: 'finance', icon: <GiCoins />, label: t('tarot.categories.finance') || 'Money & Finance' },
    { id: 'growth', icon: <GiStairsGoal />, label: t('tarot.categories.growth') || 'Personal Growth' },
  ];

  return (
    <CategoryWrapper>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {t('tarot.select_category') || 'Choose your focus'}
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
            <Glow />
          </CategoryCard>
        ))}
      </Grid>
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;
  max-width: 400px;
`;

const CategoryCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 12px;
  filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.accent}44);
`;

const Label = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const Glow = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 243, 255, 0.05) 0%, transparent 70%);
  pointer-events: none;
`;

export default TarotCategory;
