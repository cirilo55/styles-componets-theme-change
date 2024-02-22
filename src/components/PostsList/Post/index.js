import React from 'react';

import { Container } from './styles';

export default function Post({ title, description }) {
  return (
    <Container>
      <div className='complete'>
        <span className="dot"></span>
      </div>
      <h2>{description}</h2>
      <div className='delete'>❌</div>
    </Container>
  );
}