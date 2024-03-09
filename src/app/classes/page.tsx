import {Heading1, Content} from '@/components/Common';
import Timetable from '@/components/Timetable';


const Classes: React.FC = () => {
  // Define your class schedule
  const classes = [
    { day: 'Monday', time: '9:00 - 10:00', subject: 'Bharatanatyam', type: 'Online', level: 'Beginner' },
    { day: 'Wednesday', time: '9:00 - 10:00', subject: 'Bharatanatyam', type: 'In-person', level: 'Beginner' },
    { day: 'Friday', time: '9:00 - 10:00', subject: 'Bharatanatyam', type: 'Online', level: 'Beginner' },
    { day: 'Monday', time: '11:00 - 12:00', subject: 'Bharatanatyam', type: 'Online', level: 'Intermediate' },
    { day: 'Wednesday', time: '11:00 - 12:00', subject: 'Bharatanatyam', type: 'In-person', level: 'Intermediate' },
    { day: 'Friday', time: '11:00 - 12:00', subject: 'Bharatanatyam', type: 'Online', level: 'Intermediate' },
    { day: 'Monday', time: '1:00 - 2:00', subject: 'Bharatanatyam', type: 'Online', level: 'Advanced' },
    { day: 'Wednesday', time: '1:00 - 2:00', subject: 'Bharatanatyam', type: 'In-person', level: 'Advanced' },
    { day: 'Friday', time: '1:00 - 2:00', subject: 'Bharatanatyam', type: 'Online', level: 'Advanced' },
  ];

  return (
    <div className="p-10">
      <section>
        <Heading1 text="Classes" /> 
        <section>
          <Content text="We offer Bharatanatyam classes for all ages and skill levels. Whether you are a beginner or an advanced dancer, we have a class for you!"/>
          <Content text="Our experienced instructors provide comprehensive training in Bharatanatyam technique, theory, and repertoire."/>
          <Content text="Check out our class schedule and join us in exploring the rich tradition and artistry of Bharatanatyam!"/>
          {/* TODO:// fix red for line below */}
          <Timetable classes={classes} /> {/* Use the Timetable component */}
        </section>
      </section>
    </div>
  );
}

export default Classes;