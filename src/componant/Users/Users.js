import React from 'react';
import Sidenar from '../sidebar';
import { useNavigate } from 'react-router-dom';
import logo from "../../image/seff_logo_transparent.png";
import HeaderPages from '../HeaderPages';
import Sidebar from '../sidebar';
import Footer from '../Footer';


const Users = () => {
        // const navigate = useNavigate();

    // function movetoCreatejop(e) {
    //     e.preventDefault();
    //     navigate('/AddUser'); // Navigate to the JobForm page
    // }
    // const users = [
    //     { name: "Here's the username", status: 'Active', userID: 'FE-2303', role: 'Student', email: 'user@gmail.com' },
    //     { name: "Here's the username", status: 'Active', userID: 'BE-2302', role: 'Student', email: 'usertwo@gmail.com' },
    //     { name: "Here's the username", status: 'Inactive', userID: 'BE-2302', role: 'Student', email: 'usertwo@gmail.com' },
    //     { name: "Here's the username", status: 'Inactive', userID: 'BE-2302', role: 'Student', email: 'usertwo@gmail.com' },
    //     { name: "Here's the username", status: 'Inactive', userID: 'BE-2302', role: 'Student', email: 'usertwo@gmail.com' },
    // ];

    // return (
    //     <div className="container mt-3 mb-5">
    //         <div className="row">
    //             <div className="top-bar mb-0 mb-md-5 d-flex justify-content-between align-items-center mb-3">
    //                 <div className="top-info text-white mb-0 mb-md-5">
    //                     <div className="admin-panel-title">
    //                         Admin Panel
    //                         <div className="lineP"></div>
    //                     </div>
    //                     <p className="panel-date mb-0 mb-md-5">6th June 2023</p>
    //                 </div>
    //                 <div className="d-none d-lg-block">
    //                     <button className="btn btn-gold" onClick={movetoCreatejop}>Create New User</button>
    //                 </div>
    //             </div>

    //             <div className="col-lg-3 col-md-12">
    //              <Sidenar/>
    //             </div>

    //             <div className="col-lg-9 col-md-12">
    //                 <div className="row align-items-center justify-content-between mb-3">
    //                     <div className="col-md-5 text-md-start text-center">
    //                         <div className="header-title">
    //                             Users
    //                             <div className="linee mx-auto mx-md-0"></div>
    //                         </div>
    //                     </div>
    //                     <div className="col-md-5 mt-3 mt-md-0">
    //                         <div className="search-container d-none d-md-flex">
    //                             <input type="text" className="search-input" placeholder="Search In Users" />
    //                             <button className="search-btn"><i className="fas fa-search"></i></button>
    //                         </div>
    //                         <div className="d-block d-md-none">
    //                             <div className="mobile-dropdown">
    //                                 <button className="dropdown-btn">
    //                                     Students
    //                                     <i className="fas fa-chevron-down dropdown-arrow"></i>
    //                                 </button>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div className="table-responsive">
    //                     <table className="table table-dark articles-table">
    //                         <thead>
    //                             <tr>
    //                                 <th>Name</th>
    //                                 <th>Status</th>
    //                                 <th className='px-md-1'>User ID</th>
    //                                 <th>Role</th>
    //                                 <th>Email</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             {users.map((user, index) => (
    //                                 <React.Fragment key={index}>

    //                                     {/* Table for Mobile */}
    //                                     <tr className="d-block d-md-none px-0 w-100 col-12 mx-auto">
    //                                         <td className='d-flex mx-auto w-100 mt-3' colSpan="5">
    //                                             <div className="box mb-3 row w-100 mx-auto mt-2">
    //                                                 <div className="col-12 w-100 p-0 mx-auto">
    //                                                     <div className="d-flex justify-content-between align-items-center">
    //                                                         <h6 className='fw-bold fs-6'>Name:</h6>
    //                                                         <span className={`${user.status === 'Active' ? 'bg-primary' : 'bg-grey'} ButtonsTable fs-6 fw-medium text-center py-1`} style={{ width: '35%' }}>
    //                                                             {user.status}
    //                                                         </span>
    //                                                     </div>
    //                                                     <p className="mt-2 mb-0 fs-5 fw-lighter">{user.name}</p>
    //                                                 </div>

    //                                                 <div className="col-5 mt-3 p-0">
    //                                                     <h6 className="fw-bold fs-6">User ID:</h6>
    //                                                     <p className="fw-lighter fs-6">{user.userID}</p>
    //                                                 </div>

    //                                                 <div className="col-7 mt-3 p-0 d-flex flex-column justify-content-end align-items-end">
    //                                                     <h6 className='fw-bold text-start fs-6'>Role:</h6>
    //                                                     <p className="text-start fs-6 fw-lighter ">{user.role}</p>
    //                                                 </div>

    //                                                 <div className="col-12 mt-3 p-0">
    //                                                     <h6 className='fw-bold text-start fs-6'>Email:</h6>
    //                                                     <p className="text-start fs-6 fw-lighter">{user.email}</p>
    //                                                 </div>

    //                                                 <div className='text-end'>
    //                                                     <button className="btn-act me-3"><i className="fas fa-edit"></i></button>
    //                                                     <button className="btn-act"><i className="fas fa-trash-alt"></i></button>
    //                                                 </div>
    //                                             </div>
    //                                         </td>
    //                                     </tr>

    //                                     {/* table for Desktop */}
    //                                     <tr className="d-none d-md-table-row">
    //                                         <td data-label="Name">{user.name}</td>
    //                                         <td data-label="Status"> 
    //                                              <span className={`${user.status === 'Active' ? 'bg-primary' : 'bg-grey'} ButtonsTable  `}>
    //                                             {user.status}
    //                                         </span></td>
    //                                         <td data-label="User ID">{user.userID}</td>
    //                                         <td data-label="Role">{user.role}</td>
    //                                         <td data-label="Email">{user.email}</td>
    //                                         <td className="text-end">
    //                                             <div className="action-buttons">
    //                                                 <button className="me-1 btn-act"><i className="fas fa-edit"></i></button>
    //                                                 <button className="btn-act"><i className="fas fa-trash-alt"></i></button>
    //                                             </div>
    //                                         </td>
    //                                     </tr>
    //                                 </React.Fragment>
    //                             ))}
    //                         </tbody>
    //                     </table>
    //                 </div>

    //                 <div className="pagination">
    //                     <a href="#" className="arrow">
    //                         <i className="fas fa-chevron-left" style={{ color: '#BF9530' }}></i>
    //                     </a>
    //                     <a href="#">1</a>
    //                     <a href="#">2</a>
    //                     <a href="#">3</a>
    //                     <span>.....</span>
    //                     <a href="#" className="arrow">
    //                         <i className="fas fa-chevron-right" style={{ color: '#BF9530' }}></i>
    //                     </a>
    //                 </div>

    //                 <div className="d-block d-lg-none text-center mt-5  d-md-flex justify-content-md-end ">
    //                     <button className="btn btn-gold w-100">Create New Article</button>
    //                 </div>

    //                 <div className="upload-button  d-block d-md-none text-center mt-2  d-md-flex justify-content-md-end mt-md-2">
    //                     <button className=" btn-gold btngoldCertificates w-100">Upload Certificates</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    const UserData = [
      {
        id: 1,
        title: "Here’s the username",
        status: "",
        userid: "FE-2023",
        role: "Admin",
        email: "usertwo@gmail.com",
        icons: "",
      },
      {
        id: 2,
        title: "Here’s the username",
        status: "",
        userid: "BE-2302",
        role: "Editor",
        email: "usertwo@gmail.com",
        icons: "",
      },
      {
        id: 3,
        title: "Here’s the username",
        status: "",
        userid: "BE-2302",
        role: "Instructor",
        email: "usertwo@gmail.com",
        icons: "",
      },
      {
        id: 4,
        title: "Here’s the username",
        status: "",
        userid: "BE-2302",
        role: "student",
        email: "usertwo@gmail.com",
        icons: "",
      },
      {
        id: 5,
        title: "Here’s the username",
        status: "",
        userid: "BE-2302",
        role: "Instructor",
        email: "usertwo@gmail.com",
        icons: "",
      },
      {
        id: 6,
        title: "Here’s the username",
        status: "",
        userid: "BE-2302",
        role: "Admin",
        email: "usertwo@gmail.com",
        icons: "",
      },
    ];
  // DRAWITEM
const UsItem = UserData.map((item, index) => {
  let buttonStyle = {};
  let buttonText = "";

  if (index < 2) {
    buttonStyle = {
      backgroundColor: "#BF9B30",
      color: "white",
      borderRadius: "10px",
      border: "none",
      padding: "5px 30px",
    };
    buttonText = "Active";
  } else if (index < 6) {
    buttonStyle = {
      backgroundColor: "gray",
      color: "white",
      borderRadius: "10px",
      border: "none",
      padding: "5px 30px",
    };
    buttonText = "Inactive";
  }

  return (
    <table className="table mob-table" key={index}>
      <tbody>
        <tr>
          <td className="col-lg-2 rr zz">
            <strong>Name:</strong>
            {item.title}
          </td>
          <td className="col-lg-2 but-lg">
            <button style={buttonStyle}>{buttonText}</button>
          </td>
          <td className="col-lg-2 zz">
            <strong>User Id:</strong>
            {item.userid}
          </td>

          <td className="col-lg-2 time zz">
            <strong>Role:</strong>
            {item.role}
          </td>
          <td className="col-lg-2 time zz">
            <strong>Email:</strong>
            {item.email}
          </td>
          <td className="col-lg-2 but-mob">
            <button style={buttonStyle}>{buttonText}</button>
          </td>
          <td className="col-lg-2 rrr">
            <div className="icons rrr">
              <i class="far fa-trash-alt col-lg-6"></i>
              <i class="far fa-edit col-lg-6"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
});
//===============================================================================

return (
  <div className='text-light'>
    {/* SECTION 1 */}
    
        <HeaderPages />
        {/* ================================================================= */}
        {/* SECTION2 */}
        <div className="admin-banel container">
          <div>
            <span>Admin Panel</span>
            <div className="line"></div>
            <span>6th June 2023</span>
          </div>

          <div className="btn-admin">
            <button className="btn" style={{ backgroundColor: "#bf9b30" }}>
              CREATE NEW USER
            </button>
          </div>
        </div>
        <div className="sec2 container">
          <div class="left-nav col-sm-12 col-lg-3">
           <Sidebar/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="container">
                  <div className="row">
                    <div className="show-phone-ul">
                      <div className="row">
                        <ul className="col">
                          <li className="col-3">
                            <h3>Users</h3>
                          </li>
                          <li className="col-3">
                            <h3>Articles</h3>
                          </li>
                          <li className="col-3">
                            <h3>Jobs</h3>
                          </li>
                          <li className="col-3">
                            <h3>Courses</h3>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="choeses">
                      <select
                        style={{
                          backgroundColor: "rgba(131, 128, 128,0.8)",
                          color: "white",
                        }}
                        class="form-select btn se"
                        aria-label="Default select example"
                      >
                        <option selected>Students</option>
                        <option value="1">Users</option>
                        <option value="2">Articles</option>
                        <option value="3">Jobs</option>
                        <option value="3">Courses</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="hheader container">
                  <div className="line-hight">
                    <h2 style={{ margin: "20px 30px" }}>Users</h2>
                    <div className="line"></div>
                  </div>
                  {/* <div className="search">
                    <div className="" md>
                      <div
                        controlId="floatingInputGrid"
                        className=" form-floating"
                      >
                        <div className="search-container">
                          <input
                            className="form form-control"
                            type="text"
                            placeholder="Search"
                            style={{ backgroundColor: "gray", border: "0" }}
                          />
                          <i class="fas fa-search search-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-md-5 mt-3 mt-md-0">
            <div className="search-container d-none d-md-flex">
              <input
                type="text"
                className="search-input"
                placeholder="Search In Users"
              />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="d-block d-md-none">
              <div className="mobile-dropdown">
                <button className="dropdown-btn">
                  Students
                  <i className="fas fa-chevron-down dropdown-arrow"></i>
                </button>
              </div>
            </div>
          </div>
                </div>
                <table className="table table-mob">
                  <thead>
                    <tr>
                      <td className="col-lg-2">Name</td>
                      <td className="col-lg-2">Status</td>
                      <td className="col-lg-2">User Id</td>
                      <td className="col-lg-2">Role</td>
                      <td className="col-lg-2">EmailL</td>
                      <td className="col-lg-2">Delete & Edit</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

            <div className="col push">
              {UsItem}
              <div
                className="btn-admin-mob" >
                <div>
                  <button
                    className="btn"
                    style={{ backgroundColor: "#bf9b30", margin: "auto" }}
                  >
                    CREATE NEW USER
                  </button>
                </div>
                <div>
                  <button
                    className="btn"
                    style={{
                      borderColor: "#bf9b30",
                      color: "white",
                      margin: "auto",
                    }}
                  >
                    Uploud Certificates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =========================================================================== */}
        <Footer/>
      
      </div>
   
  );
};

export default Users;
