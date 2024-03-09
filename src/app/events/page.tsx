import { Content, Heading1 } from '@/components/Common';
import React from 'react';

interface Event {
  day: string;
  time: string;
  eventName: string;
  venue: string;
}

interface TimetableProps {
  events: Event[];
}

const EventTimetable: React.FC<TimetableProps> = ({ events }) => {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '10px' }}>Day</th>
          <th style={{ border: '1px solid black', padding: '10px' }}>Time</th>
          <th style={{ border: '1px solid black', padding: '10px' }}>Event Name</th>
          <th style={{ border: '1px solid black', padding: '10px' }}>Venue</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index}>
            <td style={{ border: '1px solid black', padding: '10px' }}>{event.day}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{event.time}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{event.eventName}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{event.venue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Events: React.FC = () => {
  // Define your event schedule
  const events = [
    { day: 'Monday', time: '9:00 - 10:00', eventName: 'Event 1', venue: 'Online', level: 'Beginner' },
    // More events...
  ];

  return (
    <div className="p-10">
      <section>
        <Heading1 text="Upcoming Events" /> 
        <section>
          <Content text="Check out our upcoming events!"/>
          <EventTimetable events={events} /> {/* Use the Timetable component */}
        </section>
      </section>
    </div>
  );
}

export default Events;