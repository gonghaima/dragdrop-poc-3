
import React from 'react';
import Draggable from './Draggble';

const App = () => {
  return (
    <div>
      <Draggable onDrag={console.log} id="uniqueId">
        <h2>Drag me</h2>
      </Draggable>
    </div>
  );
};

export default App;
