import {React } from 'react';
import {Data} from '../../Data/Articledata/data'; 


const Section2 = () => {
 
  return (
    
    <>
    
    <div className='text-white mt-5 '>

      <div className="container ">
       
          
                <div className=''>
                {
                Data.map((item) => (
                  <div key={item.id}  className='row mb-5 '>
                    
                    <div className="  col-lg-3 col-md-12 ">
                           <div className="image w-75 m-auto">
                           <img src={item.image} className='img-fluid'/>
                           </div>
                    </div>
                    <div className="col-lg-9 col-md-12 p-2 ">
                      <div>
                         <h4 className='textGray'>{item.name}</h4>
                        <div className="line mb-2 " ></div>
                      </div>
                       <div className="text row position-relative  ">
                              <div className="  col-lg-8 col-md-12 title">
                                  <h3 >{item.title} </h3> 
                              </div>
                              <div className='d-flex justify-content-end  col-lg-4 col-md-12 clck '>
                              {item.icon}
                                <span className='align-self-center ps-2'>{item.time}  </span>
                              </div>
                             <div className="d-flex">
                                <p className=' p-3 textGray'>
                                {item.text}
                                
                                </p>
                                <span className="text-dark align-self-center  font "
                                
                                
                                >{item.next}</span>
                             </div>
                             
                </div>
                      </div>    
                  </div>
                ))
              }
               
          </div>
        
        </div>
    
      
            
        <div>
 </div>  

            
    </div>
                
    </>
  );
};

export default Section2;