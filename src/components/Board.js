import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Table, Th, Td } from './styledComponents/boardStyles';
import Droppable from './Droppable';
import Draggable from './Draggable';
import TimeCard from './TimeCard';
import { fetchUser } from '../redux/actions/user';
import { fetchTimeCard } from '../redux/actions/timecard';

const Board = props => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  //Think in a way to save table state

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const createHeaders = () => {
    return weekdays.map(day => <Th>{day}</Th>);
  };

  const checkTimeCardExists = (user, dropId) => {
    if (user.timecards) {
      return user.timecards.map(timecard => {
        if (timecard.position === dropId) {
          return (
            <Draggable key={Math.random()} id={Math.random()} draggable="true">
              <TimeCard
                position="cellId"
                clock_in={timecard.clock_in}
                clock_out={timecard.clock_out}
                break={timecard.break}
                role={timecard.role}
              />
            </Draggable>
          );
        }

        return;
      });
    }
  };

  const createRows = () => {
    return props.users.map(user => {
      return (
        <tr key={user.last_name}>
          <Td>{user.first_name}</Td>
          {weekdays.map(day => (
            <Td>
              <Droppable id={`${user.first_name}-${day}`}>
                {checkTimeCardExists(user, `${user.first_name}-${day}`)}
              </Droppable>
            </Td>
          ))}
        </tr>
      );
    });
  };

  return (
    <div className="Board">
      <Table>
        <thead>
          <tr>
            <Th></Th>
            {createHeaders()}
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: Object.values(state.users),
    timecards: Object.values(state.timecards)
  };
};

export default connect(
  mapStateToProps,
  { fetchUser, fetchTimeCard }
)(Board);
