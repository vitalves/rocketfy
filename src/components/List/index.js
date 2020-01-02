import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

import Card from '../Card';

export default function Board() {
  return (
    <Container>
      <header>
        <h2>Tarefas</h2>
        <button type="button">
          <MdAdd size={24} color="#fff" />
        </button>
      </header>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}