import React from 'react';
import styles from '../styles/Hero.module.css'; // Import CSS module

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Welcome to Our Dance School</h1>
          <p>Embark on a journey of rhythm and grace</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;