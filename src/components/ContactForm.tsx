import React, { useEffect, useRef, useState } from 'react';
import Dropdown from './Dropdown';
import { Content } from './Common';
import Input from './Input';
import Button from './Button';
import SuccessMessage from './SuccessMessage'; // adjust the path as necessary
import FailureMessage from './FailureMessage'; // adjust the path as necessary

// ...


const ContactForm: React.FC = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timing, setTiming] = useState('');
  const [medium, setMedium] = useState('');
  const [form, setForm] = useState({});
  const [saved, setSaved] = useState('');
  const isFirstRender = useRef(true);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can perform form submission logic, such as sending form data to a server
    const formData = { name, email, phone, timing, medium };
    setForm(formData);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      if (!response.ok) {
        throw new Error('Failed to save to DB');
      }
      const data = await response.json();

      if(data === 'OK'){
        setSaved('Form submitted successfully!');
      } else {
        setSaved('Unable to save data.Please try again!');
      }

    } catch (error) {
        setSaved('An error occurred. Please try again.');
    }
//   setName('');
//   setEmail('');
//   setPhone('');
//   setTiming('');
//   setMedium('');
//   setTimeout(() => setSaved(''), 5000); 
  };

  return (
    <div className='p-4'>
    <form onSubmit={handleSubmit}>
      <div>
      <Content text="Name of the contact:"/>
      <Input id="name" type="name" value={name} onChange={(value) => setName(value)}/>
      </div>
      <div>
      <Content text="Email of the contact:"/>
      <Input id="email" type="email" value={email} onChange={(value) => setEmail(value)}/>
      </div>
      <div>
      <Content text="Preferred phone number:"/>
      <Input id="phone" type="tel" value={phone} onChange={(value) => setPhone(value)}/>
      </div>
      <div>
      <Content text="Preferred Timing:"/>
        <Dropdown
            id="timing"
            value={timing}
            onChange={(value) => setTiming(value)}
            options={[
            { label: 'Morning', value: 'morning' },
            { label: 'Afternoon', value: 'afternoon' },
            { label: 'Evening', value: 'evening' },
            ]}
        />
      </div>
      <div>
        <Content text="Preferred Medium:"/>
        <Dropdown
            id="medium"
            value={medium}
            onChange={(value) => setMedium(value)}
            options={[
            { label: 'Online', value: 'online' },
            { label: 'In Person', value: 'inperson' },
            ]}
        />
      </div>
      <div className='p-4'>
      <button type="submit" className="py-2 px-4 bg-purple-500 text-white rounded hover:bg-blue-700 w-1/4">Register</button>
      </div>
    </form>
    {saved === 'Form submitted successfully!' && <SuccessMessage message={saved} />}
    {saved !== 'Form submitted successfully!' && saved && <FailureMessage message={saved} />}
    </div>
  );
};

export default ContactForm;
