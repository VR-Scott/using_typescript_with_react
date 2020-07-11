import React from 'react';
import { UserEvent, deleteUserEvent } from '../../redux/user-events';
import { useDispatch } from 'react-redux';

interface Props {
  event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
  // get dispatch () from useDispatch Hook
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    console.log('event_' + event.id);
    // must () using mapDispatch option
    dispatch(deleteUserEvent(event.id));
  };
  return (
    <div key={event.id} className="calendar-event">
      <div className="calendar-event-info">
        <div className="calendar-event-time">10:00 - 12:00</div>
        <div className="calendar-event-title">{event.title}</div>
      </div>
      <button
        className="calendar-event-delete-button"
        onClick={handleDeleteClick}
      >
        &times;
      </button>
    </div>
  );
};

export default EventItem;
