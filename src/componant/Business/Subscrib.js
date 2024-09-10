import React from 'react';
import Footer from '../Footer';
// import AddArtical from '../CreateNewArtical/AddArtical';

const SubcribeSection = () => {


    return (
    
       <div className='text-light'>
        <div className="container  pt-5 mt-5">
             <div className=" text-center pt-5 ">
              <h1>
                 Subscribe to our newsletter
              </h1>
              <p className='txt'>
                be the first to get latest news
              </p>
             </div>
         
         
         
         </div>
         <div className="container  ">
             <div className=" text-center py-4 mb-5 ">
              <div className=" dflex   ">
                <div className=" content  w-50 py-3">
                      <div className="">

                      </div>
                </div>
                <div className="   ">
                  <button className='btn1  py-3 px-5 rounded-0 round text-white fs-3'>SubScrib</button>
                </div>
              </div>
             </div>
         
         
         </div>

         <div className='mt-5'>
          <Footer/>
         </div>
         
        
       </div>
      );
      };
      
      export default SubcribeSection;