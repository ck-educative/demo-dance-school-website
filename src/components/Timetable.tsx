import React from 'react';

export interface Class {
  day: string;
  time: string;
  subject: string;
  type: 'Online' | 'In-person';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface TimetableProps {
  classes: Class[];
}

const Timetable: React.FC<TimetableProps> = ({ classes }) => {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '10px' }}>Day</th>
          <th style={{ border: '1px solid black', padding: '10px' }}>Time</th>
          <th style={{ border: '1px solid black', padding: '10px' }}>Subject</th>
          <th style={{ border: '1px solid black', padding: '10px' }}>Type</th>
          <th style={{ border: '1px solid black', padding: '10px' }}>Level</th>
        </tr>
      </thead>
      <tbody>
        {classes.map((classItem, index) => (
          <tr key={index}>
            <td style={{ border: '1px solid black', padding: '10px' }}>{classItem.day}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{classItem.time}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{classItem.subject}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{classItem.type}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{classItem.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Timetable;