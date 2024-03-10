"use client";
import { Heading1, Content } from '@/components/Common';
import ContactForm from '@/components/ContactForm';

export default function RegistrationForm() {
  return (
    <div className= 'p-10'>
      <Heading1 text="Register Your Interest"/>
      <ContactForm />
    </div>
  );
};