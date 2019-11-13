import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { range, inRange } from 'lodash';
import Draggable from './Draggable';
import Rect from './Rect';

const MAX = 5;
const HEIGHT = 80;

const App = () => {
  const items = range(MAX);
  const [state, setState] = useState({
    order: items,
    dragOrder: items, // items order while dragging
    draggedIndex: null
  });

  const handleDrag = useCallback(({ translation, id }) => {
    const delta = Math.round(translation.y / HEIGHT);
    const index = state.order.indexOf(id);
    const dragOrder = state.order.filter(index => index !== id);

    if (!inRange(index + delta, 0, items.length)) {
      return;
    }

    dragOrder.splice(index + delta, 0, id);

    setState(state => ({
      ...state,
      draggedIndex: id,
      dragOrder
    }));
  }, [state.order, items.length]);

  const handleDragEnd = useCallback(() => {
    setState(state => ({
      ...state,
      order: state.dragOrder,
      draggedIndex: null
    }));
  }, []);

  return (
    <Container>
      {items.map(index => {
        const isDragging = state.draggedIndex === index;
        const top = state.dragOrder.indexOf(index) * (HEIGHT + 10);
        const draggedTop = state.order.indexOf(index) * (HEIGHT + 10);

        return (
          <Draggable
            key={index}
            id={index}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            <Rect
              isDragging={isDragging}
              top={isDragging ? draggedTop : top}
            >
              {index}
            </Rect>
          </Draggable>
        );
      })}
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;