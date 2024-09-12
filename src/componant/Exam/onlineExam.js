import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProgressBarComponent from "./progressBar";
import Caption from "./caption";
import QuationForm from "./QuationForm";
import HeaderPages from "../HeaderPages";
import Footer from "../Footer";
import BarStudent from "../BarStudent";

const OnlineExam = () => {

  
  const [formData, setFormData] = useState({
    textInput: "",
    textArea: "",
    file: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data:", formData);
    
  };

  const handleCancel = () => {
    setFormData({
      textInput: "",
      textArea: "",
      file: null,
    });
  };
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div>
      <BarStudent/>
    <div className="text-white">
    <HeaderPages/>
      <div>
        <div className=" d pb-4  mt-4 ">
          <Caption />
        </div>
      </div>

      <div className="container d-none d-md-block">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-end pe-2 pt-5">55:00</h3>
            <div className="progress my-4  ">
              <ProgressBarComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="container d-none d-md-block">
        <div className="row">
          <div className="col-lg-12">
            <QuationForm />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default OnlineExam;
