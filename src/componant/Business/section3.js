import { React } from "react";
import { Data } from "../..//Data/Articledata/data";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const Section3 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };
  return (
    <div>
      <div className="text-light">
        <div className="container ">
          <div>
            {Data.map((item) => (
              <div key={item.id} className="row mb-5 ">
                <div className="  col-lg-3 col-md-12 ">
                  <div className="image w-75 m-auto">
                    <img src={item.image} className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-9 col-md-12 p-2 ">
                  <div>
                    <h4 className="capli upper">Business</h4>
                    <div className="line mb-2 "></div>
                  </div>
                  <div className="text row position-relative  ">
                    <div className="  col-lg-8 col-md-12 title">
                      <h3>{item.title} </h3>
                    </div>
                    <div className="d-flex justify-content-end  col-lg-4 col-md-12 clck ">
                      {item.icon}
                      <span className="align-self-center ps-2">Business </span>
                    </div>
                    <div className="d-flex">
                      <p className=" p-3 capli upper">{item.text}</p>
                      <span
                        className="align-self-center  font "
                        onClick={handleClick}
                      >
                        {item.next}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Section3;
