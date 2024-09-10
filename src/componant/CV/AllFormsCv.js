
import React, { useContext, useState } from 'react';
//npm install react-phone-input-2
import PhoneInput from 'react-phone-input-2';
import { FormContext } from './CvFormAutoEdit'; // Import the context

export const Form1 = () => {
    const { formData, setFormData } = useContext(FormContext); 

 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setFormData({ ...formData, photo: reader.result }); 
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    return (
        <form className="pt-4 p-2 ps-md-4  text-white rounded">
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                </div>
                <div className="col-md-6 mt-3 mt-md-auto">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="profession" className="form-label">Profession</label>
                    <input
                        type="text"
                        className="form-control"
                        id="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        placeholder="Your Major"
                    />
                </div>
                <div className="col-md-6 mt-3 mt-md-auto">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input
                        type="text"
                        className="form-control"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                    />
                </div>
                <div className="col-md-6 mt-3 mt-md-auto">
                    <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                    <PhoneInput
                        country={'eg'}
                        value={formData.phone}
                        onChange={(value) => setFormData({ ...formData, phone: value })}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Name@gmail.com"
                    />
                </div>
            </div>


            <div className="row mb-3">
                {/* Honor & Award */}
                <div className="col-md-6">
                    <label htmlFor="honorAward" className="form-label">Honor & Award</label>
                    <input
                        type="text"
                        className="form-control"
                        id="honorAward"
                        value={formData.honorAward}
                        onChange={handleChange}
                        placeholder="Enter your awards"
                    />
                </div>

               
            </div>


            {/* Social Profiles: LinkedIn, GitHub, Website */}
            <div className="row mb-3">
                <div className="col-md-6">
                    {/* LinkedIn */}
                    <label htmlFor="linkedIn" className="form-label">LinkedIn</label>
                    <input
                        type="text"
                        className="form-control"
                        id="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleChange}
                        placeholder="LinkedIn Profile"
                    />
                </div>

                <div className="col-md-6 mt-3 mt-md-auto">


                    {/* Website */}
                    <label htmlFor="website" className="form-label">Website</label>
                    <input
                        type="text"
                        className="form-control"
                        id="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Personal Website"
                    />
                </div>


            </div>
            <div className='row mb-3'>
                <div className="col-md-12">
                    {/* GitHub */}
                    <label htmlFor="github" className="form-label">GitHub</label>
                    <input
                        type="text"
                        className="form-control"
                        id="github"
                        value={formData.github}
                        onChange={handleChange}
                        placeholder="GitHub Profile"
                    />
                </div>
            </div>

            {/* upload ur Personal Photo*/}
            <label htmlFor="PersonalPhoto" className="text-white">Personal Photo</label>
            <div className="rounded mt-2 custom-logo-upload">
                <input
                    type="file"
                    name="photo"
                    className="d-none"
                    id="PersonalPhoto"
                    onChange={handlePhotoUpload}
                />
                <label htmlFor="PersonalPhoto" className="text-center mb-0 px-3 w-100 h-100 d-flex flex-column justify-content-center">
                    <div className="upload-icon">
                        <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div>
                        Drag & drop files or <span className="Browse">Browse</span>
                    </div>
                    <small className="form-text text-muted text-center mt-2">
                        Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
                    </small>
                </label>
            </div>
        </form>
    );
};



// Form 2
export const Form2 = () => {
    const { formData, setFormData } = useContext(FormContext); // Get form data and update function
    const [skill, setSkill] = useState(''); // Local state to manage the current skill
    const [isEditing, setIsEditing] = useState(false); 
    const [editedIndex, setEditedIndex] = useState(null);

    // Start editing the selected skill
    const handleEdit = (currentSkill, index) => {
        setIsEditing(true);
        setSkill(currentSkill); // Update the input with the current skill
        setEditedIndex(index); // Store the index
    };

    // Add new skill or update an existing one
    const addSkill = () => {
        if (skill.trim()) {
            if (isEditing && editedIndex !== null) {
                // إذا كنت في وضع التعديل، قم بتحديث المهارة بدلاً من إضافة جديدة
                const updatedSkills = [...formData.skills];
                updatedSkills[editedIndex] = skill; // تعديل المهارة في القائمة
                setFormData({ ...formData, skills: updatedSkills });
                setIsEditing(false); // إنهاء وضع التعديل
                setEditedIndex(null); // إعادة تعيين الفهرس
            } else {
                // إذا لم تكن في وضع التعديل، أضف مهارة جديدة
                setFormData({
                    ...formData,
                    skills: [...(formData.skills || []), skill], // إضافة المهارة الجديدة
                });
            }
            setSkill(''); // مسح الـ input بعد الإضافة أو التعديل
        }
    };

    // Remove the selected skill
    const handleRemoveSkill = (skillToRemove) => {
        setFormData({
            ...formData,
            skills: formData.skills.filter((skill) => skill !== skillToRemove),
        });
    };

    // Handle skill input changes
    const handleSkillChange = (e) => {
        setSkill(e.target.value); 
    };
    return (
        <form className="p-4">
        {/* skills */}
        <div className="mb-3 skills-input">
            <label htmlFor="skill" className="form-label text-white mb-3"> Skills</label>
            <div className="relative-container" style={{ position: 'relative' }}>
                <input
                    type="text"
                    className="form-control"
                    id="skills"
                    name="skillInput"
                    placeholder="Add a skill or edit"
                    value={skill} 
                    onChange={handleSkillChange}
                    
                />
                <button
                    type="button"
                    className=" btn-gold px-4 px-md-4 py-2 text-white"
                    style={{ position: 'absolute', right: '0px', top: '0px', borderRadius: "17px 3px 3px 17px" }}
                    onClick={addSkill} 
                >
                    {isEditing ? 'Update' : 'Add'} 
                </button>
            </div>

         
<div className="skills-list mt-3 w-100">
    {formData.skills && formData.skills.length > 0 ? (
        formData.skills.map((skill, index) => (
            <span
                key={index}
                className="skill-tag d-flex justify-content-between align-items-center flex-nowrap w-100 p-2 rounded"
                style={{ 
                    border:  '1px solid #BF9530',  
                  
                }}
            >
                <span
                    className="text-break me-2 flex-grow-1"
                    onClick={() => handleEdit(skill, index)} 
                    style={{ cursor: 'pointer' }}
                >
                    {skill}
                </span>
                <i
                    className="fas fa-times flex-shrink-0"
                    onClick={() => handleRemoveSkill(skill)}
                    style={{ cursor: 'pointer' }}
                ></i>
            </span>
        ))
    ) : (
        <p className="text-white">No skills added yet.</p>
    )}
</div>

        </div>
    </form>
    
    );
};


// Form3 Component
export const Form3 = () => {
    const { formData, setFormData } = useContext(FormContext); 
    const [hobby, setHobby] = useState(''); 
    const [isEditing, setIsEditing] = useState(false); 
    const [editedIndex, setEditedIndex] = useState(null); 
    
    const handleEdit = (currentHobby, index) => {
      setIsEditing(true);
      setHobby(currentHobby); 
      setEditedIndex(index); 
    };
  
   
    const addHobby = () => {
      if (hobby.trim()) {
        if (isEditing && editedIndex !== null) {
          
          const updatedHobbies = [...formData.hobbies];
          updatedHobbies[editedIndex] = hobby; 
          setFormData({ ...formData, hobbies: updatedHobbies });
          setIsEditing(false);
          setEditedIndex(null);
        } else {
         
          setFormData({
            ...formData,
            hobbies: [...(formData.hobbies || []), hobby], 
          });
        }
        setHobby(''); 
      }
    };
  

    const handleRemoveHobby = (hobbyToRemove) => {
      setFormData({
        ...formData,
        hobbies: formData.hobbies.filter((hobby) => hobby !== hobbyToRemove),
      });
    };
  
    
    const handleHobbyChange = (e) => {
      setHobby(e.target.value); 
    };
  
    return (
      <form className="p-4">
     
        <div className="mb-3 hobbies-input">
          <label htmlFor="hobby" className="form-label text-white mb-3">
            Hobbies & Interests
          </label>
          <div className="relative-container" style={{ position: 'relative' }}>
            <input
              type="text"
              className="form-control"
              id="hobbies"
              name="hobbyInput"
              placeholder="Add a Hobby or Interest"
              value={hobby} 
              onChange={handleHobbyChange}
            />
            <button
              type="button"
              className="btn btn-gold px-4 px-md-4 py-2 text-white"
              style={{
                position: 'absolute',
                right: '0px',
                top: '0px',
                borderRadius: '17px 3px 3px 17px',
              }}
              onClick={addHobby} 
            >
              {isEditing ? 'Update' : 'Add'} 
            </button>
          </div>
  
         
          <div className="hobbies-list mt-3 w-100">
            {formData.hobbies && formData.hobbies.length > 0 ? (
              formData.hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="skill-tag mt-2 d-flex justify-content-between align-items-center flex-nowrap w-100 p-2 rounded"
                  style={{
                    border: '1px solid #BF9530', 
                   
                  }}
                >
                  <span
                    className="text-break me-2 flex-grow-1"
                    onClick={() => handleEdit(hobby, index)} 
                    style={{ cursor: 'pointer' }}
                  >
                    {hobby}
                  </span>
                  <i
                    className="fas fa-times flex-shrink-0"
                    onClick={() => handleRemoveHobby(hobby)}
                    style={{ cursor: 'pointer' }}
                  ></i>
                </span>
              ))
            ) : (
              <p className="text-white">No Hobbies & Interests added yet</p>
            )}
          </div>
        </div>
      </form>
    );
  };

  export const Form4 = () => {
    const { formData, setFormData } = useContext(FormContext); 
    const [about, setAbout] = useState(formData.about || ''); 
  
  
    const handleAboutChange = (e) => {
      setAbout(e.target.value);
      setFormData({ ...formData, about: e.target.value }); 
    };
  
    return (
      <form className="p-4">
    
        <div className="mb-3">
          <label htmlFor="about" className="form-label text-white mb-3">
            About
          </label>
          <textarea
            id="about"
            className="form-control"
            name="aboutInput"
            placeholder="Write something about yourself"
            rows="5"
            value={about}
            onChange={handleAboutChange}
          />
        </div>
      </form>
    );
  };