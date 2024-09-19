
import React from 'react';
import { NavLink  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AlertMessage = ({ message }) => {
  const navigate = useNavigate();

  function movetogologin(e) {
      e.preventDefault();
      navigate('/login'); // Navigate to the JobForm page
  }

  return (
    <div className='d-flex  justify-content-center  tra align-items-center h-100 position-absolute end-0 start-0 container'>
    <div className="d-flex justify-content-around p-5 alert alert-dismissible show w-50" role="alert" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
    <div>
        {message}
        </div>
        <div className="d-flex justify-content-between" style={{backgroundColor:'#bf9b30'}}>
            <button className='btn btn1 text-white ms-1 px-3' onClick={movetogologin} >
                login
            </button>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
</div>

  );
};

export default AlertMessage;
