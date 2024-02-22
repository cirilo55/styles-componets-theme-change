import React from 'react';

import { Container } from './styles';

export default function Header({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <div className='title'>
        <h1>TO DO</h1>
        <button type="button"
                onClick={onToggleTheme}
        >
          {selectedTheme === 'dark' ? '🌞' : '🌑' }
        </button>
      </div>
    </Container>
  );
}