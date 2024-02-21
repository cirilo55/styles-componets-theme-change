import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState('white');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function toogleTheme()
  {
    setTheme(PrevState => PrevState=== 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={toogleTheme} 
              selectedTheme={theme}

      />
    </ThemeProvider>
  );
};

export default App;
