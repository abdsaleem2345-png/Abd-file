import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { GiInfo } from 'react-icons/gi';

const DisclaimerBanner = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide or allow dismissal could be added here, 
  // but for compliance, it usually remains visible.
  
  return (
    <AnimatePresence>
      {isVisible && (
        <BannerWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Content>
            <IconWrapper>
              <GiInfo />
            </IconWrapper>
            <Text>
              {t('disclaimer.short') || "Interpretations are for spiritual guidance and entertainment only. No guarantees of accuracy are provided."}
            </Text>
          </Content>
        </BannerWrapper>
      )}
    </AnimatePresence>
  );
};

const BannerWrapper = styled(motion.div)`
  width: calc(100% - 40px);
  margin: 10px 20px;
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius.lg}; /* 24px */
  padding: 12px 16px;
  z-index: ${({ theme }) => theme.zIndices.base};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const Text = styled.p`
  font-size: 0.7rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  font-style: italic;
`;

export default DisclaimerBanner;
