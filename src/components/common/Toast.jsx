import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  // Ye function global events sunta hai notifications dikhane ke liye
  useEffect(() => {
    const handleToast = (e) => {
      setMessage(e.detail.message);
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    };

    window.addEventListener('show-toast', handleToast);
    return () => window.removeEventListener('show-toast', handleToast);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <ToastContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <Glow />
          <Text>{message}</Text>
        </ToastContainer>
      )}
    </AnimatePresence>
  );
};

const ToastContainer = styled(motion.div)`
  position: fixed;
  bottom: 100px;
  left: 20px;
  right: 20px;
  background: rgba(26, 16, 60, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 243, 255, 0.3);
  border-radius: 20px;
  padding: 15px 20px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const Glow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  box-shadow: inset 0 0 15px rgba(0, 243, 255, 0.2);
  pointer-events: none;
`;

const Text = styled.p`
  color: white;
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
`;

export default Toast;
