export const theme = {
  colors: {
    background: '#0f0c29', // Deepest midnight blue
    backgroundSecondary: '#1a103c', // Slightly lighter for cards
    
    // Primary Gradients
    primaryGradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', // Blue to Purple
    secondaryGradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', // Lighter variant
    accentGradient: 'linear-gradient(135deg, #00f3ff 0%, #0066ff 100%)', // Cyan/Neon Blue (Glowing)
    
    // Solid Colors
    text: '#ffffff',
    textSecondary: '#94a3b8', // Soft Gray
    accent: '#00f3ff', // Cyan Neon
    danger: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
    
    // Glassmorphism
    glass: 'rgba(255, 255, 255, 0.05)',
    glassBorder: 'rgba(255, 255, 255, 0.1)',
    glassHighlight: 'rgba(255, 255, 255, 0.15)',
    
    // Shadows
    glow: '0 0 20px rgba(139, 92, 246, 0.5)',
    shadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
  },
  
  borderRadius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px', // Large rounded corners rule
    full: '9999px'
  },
  
  typography: {
    fontFamily: "'Inter', sans-serif",
    headingFont: "'Outfit', sans-serif",
    
    // Font Sizes
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    body: '1rem',
    small: '0.875rem',
    tiny: '0.75rem'
  },
  
  transitions: {
    default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s ease-in-out',
    spring: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  },
  
  zIndices: {
    base: 1,
    card: 10,
    header: 100,
    modal: 1000,
    toast: 2000
  }
};

export default theme;
