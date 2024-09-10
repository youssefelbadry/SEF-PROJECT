import React, { createContext, useState } from 'react';

// Create the context
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    country: '',
    city: '',
    phone: '',
    email: '',
    honorAward: '', 
    hobbies: '',     
    linkedIn: '',   
    github: '',    
    website: '' ,     
    photo: '' , 
    skills: []
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
