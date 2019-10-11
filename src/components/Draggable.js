import React from 'react';
import { FlexBoardCard } from '../styles/dndStyles.js';

//Change name to draggable and dropable
// Get id and/or position of the element it is in (So to save on the database)
// Add "hold shift + drag" to copy card/cell
// Add condicions: if dropped in another card,
//                 if dropped in a non dropable element

function Draggable(props) {
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);

    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };
  // const dragLeave = e => {
  //   e.target.style.display = 'none';
  // };

  // const onDrop = e => {
  //   e.target.style.display = 'block';
  // };

  const dragEnd = e => {
    e.target.style.display = 'block';
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  return (
    <FlexBoardCard
      id={props.id}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
      // onDrop={onDrop}
    >
      {props.children}
    </FlexBoardCard>
  );
}

export default Draggable;