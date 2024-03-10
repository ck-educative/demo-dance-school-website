"use client";
import {Heading1, Content} from '@/components/Common';
import  Timetable, { Class } from '@/components/Timetable';
import { useEffect, useState } from 'react';

const Classes: React.FC = () => {

  // TODO: try if this can be moved to use getStaticProps
  const [classes, setClasses] = useState([]);
  const getClasses = async () => {
  const response = await fetch('/api/classes')
                        .then( res => res.json())
                        .then( data => {
                            setClasses(data);
                         })
  .catch( err => console.log(err) )
}

  useEffect(() => {
    getClasses();
  }, [])

// //   // Define your class schedule
  return (
    <div className="p-10">
      <section>
        <Heading1 text="Classes" /> 
        <section>
          <Content text="We offer Bharatanatyam classes for all ages and skill levels. Whether you are a beginner or an advanced dancer, we have a class for you!"/>
          <Content text="Our experienced instructors provide comprehensive training in Bharatanatyam technique, theory, and repertoire."/>
          <Content text="Check out our class schedule and join us in exploring the rich tradition and artistry of Bharatanatyam!"/>
          <Timetable classes={classes}/>

        </section>
      </section>
    </div>
  );
}

export default Classes;