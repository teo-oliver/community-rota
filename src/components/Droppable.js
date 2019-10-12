import React from 'react';
import { FlexboxBoard } from './styledComponents/dndStyles';

function Droppable(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const card = document.getElementById(card_id);
    card.style.display = 'block';

    e.target.appendChild(card);

    console.log(e.target.tagName);
    console.log(e.target.id);
    console.log(e.target.childNodes[0].id);
    // console.log(e.target.firstChild.id);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <FlexboxBoard id={props.id} onDrop={drop} onDragOver={dragOver}>
      {props.children}
    </FlexboxBoard>
  );
}

export default Droppable;
