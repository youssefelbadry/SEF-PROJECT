import React from 'react';
import '../../Css/Style.css';
import Sidenar from '../sidebar';
import { useNavigate } from 'react-router-dom';
import HeaderPages from '../HeaderPages';
import Footer from '../Footer';
import logo from "../../image/seff_logo_transparent.png";
import Sidebar from '../sidebar';

const Articles = () => {
  const navigate = useNavigate();

  function movetoCreatejop(e) {
      e.preventDefault();
      navigate('/Addarticle'); // Navigate to the JobForm page
  }

  const articles = [
    { title: "Here's the article title", category: 'Tech', status: 'Published', dateTime: 'Monday, June 5th 12:30 PM' },
    { title: "Here's the article title", category: 'Education', status: 'Published', dateTime: 'Monday, June 5th 12:30 PM' },
    { title: "Here's the article title", category: 'Business', status: 'Draft', dateTime: 'Monday, June 5th 12:30 PM' },
    { title: "Here's the article title", category: 'Tech', status: 'Draft', dateTime: 'Monday, June 5th 12:30 PM' },
    { title: "Here's the article title", category: 'Education', status: 'Draft', dateTime: 'Monday, June 5th 12:30 PM' },
    { title: "Here's the article title", category: 'Business', status: 'Draft', dateTime: 'Monday, June 5th 12:30 PM' },
  ];

  const TdItem = articles.map((item, index) => {
    let buttonStyle = {};
    let buttonText = "";

    if (index < 2) {
      buttonStyle = {
        backgroundColor: "#BF9B30",
        color: "white",
        borderRadius: "10px",
        border: "none",
        padding: "5px 15px",
      };
      buttonText = "Published";
    } else if (index < 6) {
      buttonStyle = {
        backgroundColor: "gray",
        color: "white",
        borderRadius: "10px",
        border: "none",
        padding: "5px 30px",
      };
      buttonText = "Draft";
    }

    return (
      <table className="table mob-table" key={index}>
        <tbody>
          <tr>
            <td className="col-lg-2 rr zz">
              {" "}
              <strong>Title:</strong>
              {item.title}
            </td>
            <td className="col-lg-2 zz">
              {" "}
              <strong>Category:</strong>
              {item.category}
            </td>
            <td className="col-lg-3 but-lg">
              <button className="btn" style={buttonStyle}>
                {buttonText}
              </button>
            </td>
            <td className="col-lg-3 time zz">
              <strong>Data&Time:</strong>
              {item.dateTime}
            </td>
            <td className="col-lg-3 but-mob">
              <button className="btn" style={buttonStyle}>
                {buttonText}
              </button>
            </td>
            <td className="col-lg-2 rrr zz">
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
  {
    /* SECTION 1 */
  }
  return (
    <div className='text-light'>
    
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
                CREATE NEW ARTICLES
              </button>
            </div>
          </div>
          <div className="sec2 container">
            <div class="left-nav col-sm-12 col-lg-3 det-left">
             <Sidebar/>
            </div>
            <div className="container mt-4">
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
                      <h2 style={{ margin: "20px 0px", color:'white' }}>Articles</h2>
                      <div className="linee d-none d-md-block mx-md-0"></div>
                    </div>
                  
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
                        <td className="col-lg-2">Title</td>
                        <td className="col-lg-2">Category</td>
                        <td className="col-lg-3">Status</td>
                        <td className="col-lg-3">Date & Time</td>
                        <td className="col-lg-2">Delete & Edit</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>

              <div className=" push">
                {TdItem}
                <div className="btn-admin-mob">
                  <button
                    className="btn"
                    style={{ backgroundColor: "#bf9b30" }}
                  >
                    CREATE NEW ARTICLES
                  </button>
                </div>
              </div>
              <div className="pagination mt-4">
            <a href="#" className="arrow">
              <i
                className="fas fa-chevron-left"
                style={{ color: "#BF9530" }}
              ></i>
            </a>

            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <span>.....</span>
            <a href="#" className="arrow">
              <i
                className="fas fa-chevron-right"
                style={{ color: "#BF9530" }}
              ></i>
            </a>
          </div>
            </div>
            
          </div>
          {/* =========================================================================== */}
          
     <Footer/>
        </div>
     
  );
};

export default Articles;
