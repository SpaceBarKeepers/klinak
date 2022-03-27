import * as React from 'react';
import LandingPage from './pages/LandingPage';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = React.useState(theme);

  React.useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded, theme]);

  return <LandingPage />;
}

export default App;
