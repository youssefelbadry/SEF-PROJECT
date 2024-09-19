import React from 'react';
import '../../Css/Style.css';
import Sidenar from '../sidebar';
import { useNavigate } from 'react-router-dom';
import HeaderPages from '../HeaderPages';
import Footer from '../Footer';
import logo from "../../image/seff_logo_transparent.png";
import Sidebar from '../sidebar';
import BarAdmin from '../BarAdmin';
import UlPhone from '../UlPhone';
import ChoosePhone from '../ChoosePhone';

const Articles = () => {
  const navigate = useNavigate();

  function movetoCreateArticals(e) {
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
    <div>
    <BarAdmin/>
    <div className='container mt-3 mb-5 text-light'>
    
          <HeaderPages />
          {/* ================================================================= */}
          {/* SECTION2 */}
          <div className='row'>
          <div className="top-bar mb-0 mb-md-5 d-flex justify-content-between align-items-center mb-3">
          <div className="top-info text-white mb-0 mb-md-5 ">
            <div className="admin-panel-title">
              Admin Panel
              <div className="lineP "></div>
            </div>
            <p className="panel-date mb-0 mb-md-5">6th June 2023</p>
          </div>
          <div className="d-none d-lg-block">
            <button className="btn btn-warning" style={{backgroundColor:'#bf9b30', color:'white'}} onClick={movetoCreateArticals}>
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
                     <UlPhone/>
                    <ChoosePhone/>
                    </div>
                  </div>
                  <div className="hheader container">
                    <div className="line-hight">
                      <h2 style={{ margin: "20px 0px", color:'white' }}>Articles</h2>
                    <div className="line"></div>
                      
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
          </div>
        </div>

          {/* =========================================================================== */}
          
     <Footer/>
        </div>
  );
};

export default Articles;
