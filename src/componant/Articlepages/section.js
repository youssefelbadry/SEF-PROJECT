import React from 'react';
import { DataSec1 } from '../../Data/Articledata/dataSec1';
import Section2 from './section2';
const Section = () => {


    return (
    
       <div>
        <div className="container mb-5 ">
         
         <div className=''>
            {
            DataSec1.map((item) => (
              <div key={item.id}  className='row   '>
                
                <div className=" col-lg-6 col-md-12  d-flex   bg-container">
                <div className="">
                <div className="position-relative  w ">
                <aside className='vertical-text'>
                  <h1>Featured News</h1>
                </aside>
              </div>
                </div>
                <div className="  p-4  ">
                
                <div className="">
                <h4 className='textGray'>{item.name}</h4>
                <div className="line mb-2 " >
                 </div>
                 <div className="text row  position-relative ">
                                <div className="  col-8 title">
                                    <h3 >{item.title} </h3> 
                                </div>
                                <div className='d-flex justify-content-end  col-4 clck '>
                                {item.icon}
                                  <span className='align-self-center ps-2'> {item.time}  </span>
                                </div>
                                <p className='textGray'>
                                    {item.text}
                                </p>
                  </div>
                </div>
             
                 </div>
                </div>
                <div className="col-lg-6 col-md-12   bg-container ">
                <div className="  ">
                <div className=" bg-container p-4 ">
                <h4 className='textGray'>{item.name}</h4>
                <div className="line mb-2 " >
                 </div>
                 <div className="text row position-relative  ">
                                <div className="  col-lg-9 col-md-12 title ">
                                    <h4 >{item.title}</h4> 
                                </div>
                                <div className='d-flex justify-content-end  col-lg-3 col-md-12  '>
                                {item.icon}
                                  <span className='align-self-center ps-2'> {item.time}  </span>
                                </div>
                                <p className='textGray'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate ipsa laborum, quae consequatur sed ab
                            </p>
                  </div>
                </div>
                <div className=" p-4 bg-container res ">
                <h4 className='textGray'>{item.name}</h4>
                <div className="line mb-2 " >
                 </div>
                 <div className="text row   ">
                                <div className="  col-lg-9 col-md-12 title">
                                    <h4 >{item.title} </h4> 
                                </div>
                                <div className='d-flex justify-content-end  col-lg-3 col-md-12  '>
                                {item.icon}
                                  <span className='align-self-center ps-2'> {item.time}  </span>
                                </div>
                                <p className='textGray'>
                                repellat at repudiandae accusamus deleniti repellendus, facilis blanditiis provident laborum esse enim, in quaerat a?
                            </p>
                  </div>
                </div>
             
            </div>
            
               </div>
      
                         
            </div>
                    
             
            ))
          }
           
          </div>
      
         
       
         </div>
         <div className=''>
           <Section2/>
         </div>
       </div>
      );
      };
      
      export default Section;