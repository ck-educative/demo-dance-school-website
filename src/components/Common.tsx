import React from 'react';

interface HeadingProps {
  text: string;
}

interface ContentProps {
  text: string;
  children?: React.Component;
}

const Heading1: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h1 style={{ 
        color: 'rgba(136, 13, 237, 0.872)', 
        fontSize: '3em', 
        padding: '10px', 
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        fontFamily: 'fantasy' // Add text shadow
    }}>{text}</h1>
  );
};

const Heading2: React.FC<HeadingProps> = ({ text }) => {
    return (
      <h2 style={{ 
          color: 'rgba(114, 13, 237, 0.872)', 
          fontSize: '2em', 
          padding: '10px', 
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          fontFamily: 'fantasy'
      }}>{text}</h2>
    );
  };

  const Heading3: React.FC<HeadingProps> = ({ text }) => {
    return (
      <h3 style={{ 
          color: 'rgba(144, 13, 237, 0.779)',
          fontSize: '1em', 
          padding: '12px', 
          textShadow: '0.5px 0.5px 2px rgba(0, 0, 0, 0.5)',
          fontFamily: 'fantasy'// Add text shadow
      }}>{text}</h3>
    );
  };


  const Content: React.FC<ContentProps> = ({ text }) => {
    return (
      <p style={{ 
          color: 'rgba(146, 3, 172, 0.951)', 
          fontSize: '1em', 
          padding: '10px', 
          fontFamily: 'fantasy', // Add monospace font
      }}>{text}</p>
    );
  };

  const EmailLink: React.FC<HeadingProps> = ({text}) => {
      return (
        <div>
        <a style={{ 
            color: 'rgba(22, 7, 222, 0.951)', 
            fontSize: '1em', 
            padding: '10px', 
            fontFamily: 'fantasy', // Add monospace font
        }}>{text}</a>
      </div>
      );  
  };

export { Heading1, Heading2, Heading3, Content, EmailLink };