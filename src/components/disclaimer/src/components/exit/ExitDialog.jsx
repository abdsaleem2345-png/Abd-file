import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { GiExitDoor } from 'react-icons/gi';

const ExitDialog = ({ isOpen, onConfirm, onCancel }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <DialogContainer
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <IconWrapper>
              <GiExitDoor />
            </IconWrapper>
            
            <Title>{t('exit.title') || "Depart the Cosmic Realm?"}</Title>
            <Message>
              {t('exit.message') || "Are you sure you wish to close your connection to the stars for now?"}
            </Message>

            <ButtonStack>
              <ExitButton 
                whileTap={{ scale: 0.95 }}
                onClick={onConfirm}
              >
                {t('exit.confirm') || "Exit App"}
              </ExitButton>
              
              <CancelButton 
                whileTap={{ scale: 0.95 }}
                onClick={onCancel}
              >
                {t('exit.cancel') || "Stay"}
              </CancelButton>
            </ButtonStack>
          </DialogContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 5, 30, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndices.modal};
  padding: 20px;
`;

const DialogContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  background-image: radial-gradient(circle at top right, rgba(139, 92, 246, 0.15), transparent);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl}; /* 32px */
  padding: 32px 24px;
  width: 100%;
  max-width: 320px;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 102, 241, 0.1);
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 16px;
  filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.accent}44);
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.headingFont};
`;

const Message = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 24px;
`;

const ButtonStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ExitButton = styled(motion.button)`
  width: 100%;
  padding: 14px;
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 1rem;
`;

const CancelButton = styled(motion.button)`
  width: 100%;
  padding: 14px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 500;
  font-size: 0.9rem;
`;

export default ExitDialog;
