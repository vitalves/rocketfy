import React from 'react';

import { Container, Label } from './styles';

export default function Board({ data }) {
  return (
    <Container>
      <header>
        {data.labels.map(label => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt={data.content} />}
    </Container>
  );
}
