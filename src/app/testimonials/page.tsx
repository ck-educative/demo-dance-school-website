import { Heading1 } from '@/components/Common';
import React from 'react';

interface Testimonial {
  name: string;
  testimonial: string;
}

interface CardProps {
  name: string;
  testimonial: string;
}

const Card: React.FC<CardProps> = ({ name, testimonial }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden p-4 mb-4">
      <h2 className="text-2xl mb-2 font-bold">{name}</h2>
      <p className="text-xl text-gray-700">{testimonial}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'John Doe',
      testimonial: 'This dance school is fantastic! The instructors are very professional and friendly.',
    },
    {
      name: 'Jane Smith',
      testimonial: 'I love the classes at this dance school. They are fun and I have learned so much.',
    },
    // More testimonials...
  ];

  return (
      <div className="p-10">
        <Heading1 text="Testimonials"/>
        {testimonials.map((testimonial, index) => (
          <Card key={index} name={testimonial.name} testimonial={testimonial.testimonial} />
        ))}
      </div>
  );
};

export default Testimonials;
