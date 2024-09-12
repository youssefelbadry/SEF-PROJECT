import React from "react";
import { Business } from "../../Data/Business";
import HeaderPages from "../HeaderPages";
import Subscrib from "./Subscrib";
import Bar from "../Bar";

const MainBusiness = () => {
  return (
    <div>
    <Bar/>
    <div className="text-light bg-container">
    <HeaderPages/>
      <div className="container  position-relative mb-5 ">
        <div className="">
          {Business.map((item) => (
            <div key={item.id}>
              <div className="  div1 ">
                <div className=" p-4   ">
                  <div>
                    <h4 className="textGray mt-5 upper">{item.name}</h4>
                    <div className="line mb-2 "></div>

                    <div className="text row  position-relative  py-3 ">
                      <div className="  col-10 title ">
                        <h2 className="upper">{item.title} </h2>
                      </div>
                      <div className="  col-2 clck text-white ">
                        {item.icon} {item.time}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container  position-relative mb-5">
                <div className="w-100 text-center">
                  <div className="image w-100 m-auto">
                    {/* Background image applied correctly */}
                    <div
                      className="col-10"
                      style={{
                        margin: "auto",
                        height: "400px",
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius:'10px'
                      }}
                    ></div>
                    {/* Text content */}
                    <div>
                      <p className="txt">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Subscrib/>
    </div>
    </div>
  );
};

export default MainBusiness;
