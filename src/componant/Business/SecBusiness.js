import React from "react";
import { DataSec1 } from "../../Data/dataSec1";
// import SubcribeSection from '../Subscripe/Subscrib';
import Titlee from "./titleBusiness";
import Section3 from "./section3";
import HeaderPages from "../HeaderPages";
import Bar from "../Bar";
const SecBusiness = () => {
  return (
    <div>
    <Bar/>
    <div className="text-light">
      <HeaderPages />
      <div className="container pb-5 ">
        <Titlee />

        <div className="">
          {DataSec1.map((item) => (
            <div key={item.id} className="row   ">
              <div className=" col-lg-6 col-md-12  d-flex  my-4  bg-container">
                <div className=""></div>
                <div className="  p-4  ">
                  <div className="">
                    <h4 className="capli">Business</h4>
                    <div className="line1 mb-2 "></div>
                    <div className="text row  position-relative ">
                      <div className="  col-8 title">
                        <h2 className="upper">{item.title} </h2>
                      </div>
                      <div className="d-flex justify-content-end  col-4  ">
                        {item.icon}
                        <span className="align-self-center ps-2">
                          {" "}
                          {item.time}{" "}
                        </span>
                      </div>
                      <p className="capli">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12    ">
                <div className=" p-4  ">
                  <div className=" bg-container p-4 ">
                    <h4 className="capli upper">Business</h4>
                    <div className="line1 mb-2 "></div>
                    <div className="text row position-relative  ">
                      <div className="  col-lg-9 col-md-12 title ">
                        <h4>{item.title}</h4>
                      </div>
                      <div className="d-flex justify-content-end  col-lg-3 col-md-12  ">
                        {item.icon}
                        <span className="align-self-center ps-2">
                          {" "}
                          {item.time}{" "}
                        </span>
                      </div>
                      <p className="capli upper">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus cupiditate ipsa laborum, quae consequatur sed
                        ab
                      </p>
                    </div>
                  </div>
                  <div className=" p-4 bg-container res ">
                    <h4 className="capli upper">Business</h4>
                    <div className="line1 mb-2 "></div>
                    <div className="text row   ">
                      <div className="  col-lg-9 col-md-12 title">
                        <h4 className="upper">{item.title} </h4>
                      </div>
                      <div className="d-flex justify-content-end  col-lg-3 col-md-12  ">
                        {item.icon}
                        <span className="align-self-center ps-2">
                          {" "}
                          {item.time}{" "}
                        </span>
                      </div>
                      <p className="capli upper">
                        repellat at repudiandae accusamus deleniti repellendus,
                        facilis blanditiis provident laborum esse enim, in
                        quaerat a?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5  py-5">
        <Section3 />
      </div>

      {/* <div><SubcribeSection/></div> */}
    </div>
    </div>

  );
};

export default SecBusiness;
