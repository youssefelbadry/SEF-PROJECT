import React, { createContext, useState } from 'react';

// Create the context
export const FormContext = createContext();

 const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    country: '',
    city: '',
    phone: '',
    email: '',
    honorAward: [
      { awardName: '', year: '', description: '' }, 
    ],
    hobbies: '',
    website: '',
    photo: '',
    skills: [],
    experience: [
      {
        companyName: '',
        position: '',
        fromDate: '',
        toDate: '',
        companyLogo: '',
        description: '',
      },
    ],
    education: [
      {
        organizationName: '',
        degree: '',
        fromDate: '',
        toDate: '',
        description: '',
      }
    ],
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormProvider