import React from 'react';
import { Card } from '../styles/timeCardStyles';

function TimeCard() {
  return (
    <Card onClick={e => console.log(e.target)}>
      <div className="main">
        <div className="delete">X</div>
        <div className="shift-time">10am - 4pm</div>
        <div className="break">Supervisor(30min)</div>
      </div>
    </Card>
  );
}

export default TimeCard;
