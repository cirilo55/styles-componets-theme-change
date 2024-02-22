import React from 'react';

import { Container } from './styles';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Container>
      <span>Drag and drop to replace order</span>

    </Container>
  );
}