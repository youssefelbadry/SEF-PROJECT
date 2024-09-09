import React, { useState } from 'react';

function FileUpload() {
  
  return (
    <div className="container mt-3 col-12">
      <div
        className="border border-warning dot rounded p-5"
        style={{ cursor: 'pointer' }}
      >
        <div className="text-center">
          <i className="fas fa-cloud-upload-alt fa-2x text-warning"></i>
          <p className='cap py-2'>drag & drop your files here or
        
          <span >
          <label htmlFor="fileInput" >
            <a className="text-warning ps-1 cap">
            Browse Files
            </a>
          </label>
          </span>
          </p>
          <p className='cap capli ' style={{fontSize:'14px'}}>Support formates : JPEG,PNG,GIF,MP4,PDF,PSD,<br className='d-block d-md-none'/>AL,Word,PPT</p>
        
          <input
            type="file"
            multiple
            className="form-control-file"
            style={{ display: 'none' }}
            id="fileInput"
          />
       
        </div>
      </div>

      {/* {selectedFiles.length > 0 && (
        <div className="mt-3">
          <h5>Selected Files:</h5>
          <ul className="list-group">
            {/* {selectedFiles.map((file, index) => (
              <li key={index} className="list-group-item">
                {file.name}
              </li>
            ))} 
          </ul> 
        </div>
      )}*/}
    </div>
  );
}

export default FileUpload;
