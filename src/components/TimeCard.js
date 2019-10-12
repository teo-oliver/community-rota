import React, { useState } from 'react';
import { Card } from './styledComponents/timeCardStyles';
import { userInfo } from 'os';

function TimeCard(props) {
  // const [id, setId] = useState(props.id);
  console.log(props);
  return (
    <Card id={props.position} onClick={e => console.log(e.target)}>
      <div className="main">
        <div className="delete">X</div>
        <div className="shift-time">{`${props.clock_in} - ${props.clock_out}`}</div>
        <div className="break">{`${props.role} - ${props.break}`}</div>
      </div>
    </Card>
  );
}

export default TimeCard;
