import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { GiStarsStack, GiCompass, GiMoonOrbit } from 'react-icons/gi';
import { itemVariants } from '../../styles/animations';

const GuidanceCard = ({ guidance }) => {
  const { t } = useLanguage();
  
  // Default values if AI response is still loading or partially failed
  const {
    energy = "Harmonious",
    focus = "Self-reflection and inner peace.",
    embrace = ["Patience", "Meditation"],
    avoid = ["Impulsive decisions", "Conflict"],
    luckyElement = "Silver"
  } = guidance;

  return (
    <CardContainer
      variants={itemVariants}
      initial="hidden"
      animate="show"
    >
      <Header>
        <GiStarsStack size={32} />
        <Title>{t('guidance.daily_reflection') || "Daily Reflection"}</Title>
      </Header>

      <Section>
        <SectionTitle>
          <GiCompass /> {t('guidance.todays_energy') || "Today's Energy"}
        </SectionTitle>
        <EnergyText>{energy}</EnergyText>
      </Section>

      <Section>
        <SectionTitle>
          <GiMoonOrbit /> {t('guidance.emotional_focus') || "Emotional Focus"}
        </SectionTitle>
        <FocusText>{focus}</FocusText>
      </Section>

      <DualGrid>
        <ListBlock type="embrace">
          <ListTitle>{t('guidance.embrace') || "Embrace"}</ListTitle>
          {embrace.map((item, i) => (
            <ListItem key={i}>✨ {item}</ListItem>
          ))}
        </ListBlock>

        <ListBlock type="avoid">
          <ListTitle>{t('guidance.avoid') || "Avoid"}</ListTitle>
          {avoid.map((item, i) => (
            <ListItem key={i}>🌑 {item}</ListItem>
          ))}
        </ListBlock>
      </DualGrid>

      {luckyElement && (
        <LuckyElement>
          <span className="label">{t('guidance.lucky_element') || "Lucky Element"}:</span>
          <span className="value">{luckyElement}</span>
        </LuckyElement>
      )}
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(15px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl}; /* 32px */
  padding: 24px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.accent};
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  background: ${({ theme }) => theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const EnergyText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const FocusText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const DualGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 24px;
`;

const ListBlock = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${props => props.type === 'embrace' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
`;

const ListTitle = styled.h4`
  font-size: 0.85rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

const ListItem = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LuckyElement = styled.div`
  margin-top: 24px;
  padding: 12px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  display: flex;
  justify-content: center;
  gap: 8px;
  
  .label {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
  }
  .value {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export default GuidanceCard;
