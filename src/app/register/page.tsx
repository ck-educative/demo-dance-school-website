"use client";
import { Content } from '@/components/Common';
import React, { useState } from 'react';


const RegistrationForm: React.FC = () => {
  const [form, setForm] = useState({
    email: '',
    contactNumber: '',
    timing: '',
    medium: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission...
    console.log(form);
  };

  // ...
  
  return (
      <div className="p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="block">
            <Content text="Email:"/> 
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 block w-1/2 rounded-md border-1 border-gray-900 shadow-sm"  />
          </label>
          <label className="block">
          <Content text="Contact Number:"/> 
            <input type="tel" name="contactNumber" value={form.contactNumber} onChange={handleChange} required className="mt-1 block w-1/2 border-1 rounded-md border-gray-800 shadow-sm"  />
          </label>
          <label className="block">
          <Content text="Preferred Timing:"/> 
            <input type="text" name="timing" value={form.timing} onChange={handleChange} required className="mt-1 block w-1/2 rounded-md border-1 border-gray-800 shadow-sm"  />
          </label>
          <label className="block">
          <Content text="Medium of Instruction:"/> 
            <select name="medium" value={form.medium} onChange={handleChange} required className="mt-1 block w-1/2 rounded-md border-1 border-blue-800 shadow-sm" >
              <option value="">--Please choose an option--</option>
              <option value="online">Online</option>
              <option value="in-person">In-person</option>
            </select>
          </label>
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 w-1/4">Register</button>
        </form>
      </div>
  );

};

export default RegistrationForm;