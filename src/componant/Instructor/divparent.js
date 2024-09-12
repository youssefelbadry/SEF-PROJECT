import React from 'react'

function Divparent() {
  return (
    <>
    <div className="d-flex align-items-center justify-content-between d-md-none">
    <h2 className="text-white mb-0 col-8">
      Welcome Back <span style={{ color: "#bf9b30" }}>TARIG ALI</span>
    </h2>
    <button className="btn col-4" style={{ backgroundColor: "#bf9b30" }}>
      View Profile
    </button>
  </div>
  
  
  <div className="row align-items-center d-none d-md-flex">
    <div className="col-10">
      <h2 className="text-white mb-0">  Welcome Back <span style={{ color: "#bf9b30" }}>TARIG ALI</span></h2>
    </div>
    <div className="col-2 text-end">
      <button className="btn" style={{ backgroundColor: "#bf9b30" }}>
        View Profile
      </button>
    </div>
   </div>
   </>
  )
}

export default Divparent
