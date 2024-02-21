import React from 'react';

import { Container } from './styles';

const currentYear = new Date().getFullYear();

export default function Footer({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <span>Cid's Blog. Todos os direitos reservados {currentYear}.</span>
      <button 
      type="button"
      onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌑' }
      </button>
    </Container>
  );
}