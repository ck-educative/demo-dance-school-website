import React from 'react';
import { Content, Heading1, Heading2, Heading3 } from '@/components/Common';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <Heading1 text="About Us"/>
      <div className={styles.director}>
        <img src="/nandana.jpeg" alt="Director Nandana Krishnakumar" />
        <div>
          <Heading2 text="Nandana Krishnakumar"/>
          <Heading3 text="Director, Dance School"/>
          <section>
          <Content text="PhD in Bharatanatyam"/>
          <Content text="Expertise in Karnas and Traditional Indian Dance Forms"/>
          <Content text="Nandana Krishnakumar is the director of our dance school, bringing years of experience and expertise in Bharatanatyam. With a PhD in Bharatanatyam, she is deeply knowledgeable about the art form and its nuances."/>
          <Content text="Her passion for teaching and preserving the rich cultural heritage of Indian dance is reflected in her dedication to training students in Karnas, a unique aspect of Bharatanatyam, and other traditional Indian dance forms."/>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
