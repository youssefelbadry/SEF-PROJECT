import React, { useState } from 'react';

function FileUpload() {
  
  return (
    <div className="container mt-3 col-12">
      <div className="container">
      <div className="col-md-12">
        <div className="cover-photo" style={{ paddingTop: "50px" }}>
          <h3>Upload Cover Photo</h3>
          <button type="button" className="mb-4" style={{ width: "100%", height: "300px" }}>
            <i className="fas fa-cloud-upload-alt"></i>
            <h6>
              Drag & drop files or{" "}
              <span style={{ color: "#bf9b30", textDecoration: "underline" }}>Browse</span>
            </h6>
            <p style={{ color: "grey" }}>
              Supported Formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, WORD, PPT
            </p>
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default FileUpload;
