import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Context Providers
import { AppProvider } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';
import { UserProvider } from './context/UserContext';

// Global Styles
import GlobalStyles from './styles/GlobalStyles';
import ScreenWrapper from './components/layout/ScreenWrapper';
import Loader from './components/common/Loader';
import Toast from './components/common/Toast';

// Lazy Load Screens for Performance
const SplashScreen = lazy(() => import('./screens/SplashScreen'));
const LanguageScreen = lazy(() => import('./screens/LanguageScreen'));
const OnboardingScreen = lazy(() => import('./screens/OnboardingScreen'));
const ProfileSetupScreen = lazy(() => import('./screens/ProfileSetupScreen'));
const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const PalmScanScreen = lazy(() => import('./screens/PalmScanScreen'));
const PalmChatScreen = lazy(() => import('./screens/PalmChatScreen'));
const TarotScreen = lazy(() => import('./screens/TarotScreen'));
const LoveReadingScreen = lazy(() => import('./screens/LoveReadingScreen'));
const DailyGuidanceScreen = lazy(() => import('./screens/DailyGuidanceScreen'));
const HoroscopeScreen = lazy(() => import('./screens/HoroscopeScreen'));
const SettingsScreen = lazy(() => import('./screens/SettingsScreen'));
const PrivacyPolicyScreen = lazy(() => import('./screens/PrivacyPolicyScreen'));

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/language" element={<LanguageScreen />} />
        <Route path="/onboarding" element={<OnboardingScreen />} />
        <Route path="/profile" element={<ProfileSetupScreen />} />
        <Route path="/home" element={<ScreenWrapper><HomeScreen /></ScreenWrapper>} />
        <Route path="/palm/scan" element={<ScreenWrapper><PalmScanScreen /></ScreenWrapper>} />
        <Route path="/palm/chat" element={<ScreenWrapper><PalmChatScreen /></ScreenWrapper>} />
        <Route path="/tarot" element={<ScreenWrapper><TarotScreen /></ScreenWrapper>} />
        <Route path="/love" element={<ScreenWrapper><LoveReadingScreen /></ScreenWrapper>} />
        <Route path="/daily" element={<ScreenWrapper><DailyGuidanceScreen /></ScreenWrapper>} />
        <Route path="/horoscope" element={<ScreenWrapper><HoroscopeScreen /></ScreenWrapper>} />
        <Route path="/settings" element={<ScreenWrapper><SettingsScreen /></ScreenWrapper>} />
        <Route path="/privacy" element={<ScreenWrapper><PrivacyPolicyScreen /></ScreenWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  // Handle PWA installation prompt here if needed later
  
  return (
    <Router>
      <LanguageProvider>
        <UserProvider>
          <AppProvider>
            <GlobalStyles />
            <Suspense fallback={<Loader fullScreen />}>
              <AnimatedRoutes />
            </Suspense>
            <Toast />
          </AppProvider>
        </UserProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
