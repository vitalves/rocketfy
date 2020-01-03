import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Label } from './styles';

export default function Cart({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return; // eslint-disable-line
      }

      // retorna o tamano do elemento:
      const targetSize = ref.current.getBoundingClientRect();
      // pega o centro do elemento:
      const targetCenter = targetSize.bottom - targetSize.top / 2;
      // retorna a distancia entre os pontos arrastandos
      const draggedOffset = monitor.getClientOffset();
      // distancia do elemento (arrastado) até o topo da tela:
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return; // eslint-disable-line
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return; // eslint-disable-line
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex; // eslint-disable-line
      item.listIndex = targetListIndex; // eslint-disable-line
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
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
