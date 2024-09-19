import React ,{useState} from 'react';
import { useNavigate } from "react-router-dom";



  
const QuationForm = () => {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        textInput: '',
        textArea: '',
        file: null,
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSave = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form data:', formData);
        navigate("/examresult"); // Navigate to the JobForm page
      };
    
      const handleCancel = () => {
        setFormData({
          textInput: '',
          textArea: '',
          file: null,
        });
      };
      const [isFocused, setIsFocused] = useState(false);

      const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };
  return (
    <div className="container  ">
    <div className="form m">
            
            <div className="bg-container pt-5 pb-2 px-4 my-5">
                <h6 >Quation 1 </h6>
                <h4 className='cap pt-2 pb-4'>
                    Chose the right option out the following 
                </h4>

            <div className="mb-3">
       <div className="row">
     
       <div className="col-lg-6 col-md-12">
       <div className="">
        
        <input
          type="text"
          className="form-control border border-0 bg-gray  "
          id="textInput"
          name="textInput"
          value={formData.textInput}
        placeholder=' A : '
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            backgroundColor: isFocused ? 'transparent' : '',
            transition: 'background-color 0.3s ease',}}
        />
        </div>
       </div>
   
       </div>
            </div>
            <div className="mb-3">
       <div className="row">
     
       <div className="col-lg-6 col-md-12">
       <div className="">
        
        <input
          type="text"
          className="form-control border border-0 bg-gray  "
          id="textInput"
          name="textInput"
          value={formData.textInput}
        placeholder=' B : '
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            backgroundColor: isFocused ? 'transparent' : '',
            transition: 'background-color 0.3s ease',}}
        />
        </div>
       </div>
   
       </div>
            </div>
            <div className="mb-3">
       <div className="row">
     
       <div className="col-lg-6 col-md-12">
       <div className="">
        
        <input
          type="text"
          className="form-control border border-0 bg-gray  "
          id="textInput"
          name="textInput"
          value={formData.textInput}
        placeholder=' C : '
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            backgroundColor: isFocused ? 'transparent' : '',
            transition: 'background-color 0.3s ease',}}
        />
        </div>
       </div>
   
       </div>
            </div>
            <h6 className='text-end pe-2 '>2 marks</h6>
            </div>
        </div>
        <div className="form ">
            
            <div className="bg-container pt-5 pb-2 px-4 my-5 ">
                <h6 >Quation 2 </h6>
                <h4 className='cap  pt-2 pb-4'>
                  what is the type of function used in the following example :
                </h4>
                <div className="mb-3">
       <div className="row">
     
       <div className="col-lg-12 col-md-12">
       <div className="bg-gray box p-3">
        
       <p className='' style={{textTransform:'lowercase' , fontSize:'14px'}}>
        <span className='text-warn cap'>function modifyArray </span> (arr,callback)
       {"{"} <br/>
         <span className='capli' style={{fontSize:'15px'}}>//do something to arr here </span><br/>
         arr. <span className='text-warn '>push</span> <span className='capli'>(100);</span><br/>

       <span className='capli' style={{fontSize:'15px'}}>//then excute the callback function that was passed </span><br/>
       <span className='text-warn '>callback</span> () ;
       <br/>
       {"}"}<br/>
       <span className='text-warn '>var </span>arr =[1,2,3,4,5];<br/>
       <span className='text-warn '>modifyArray</span>( arr , <span className='text-warn '>function</span>
        ( ) {"{"}<br/> console.<span className='text-warn '>log</span>(<span className='text-success'>"array has been modified"</span>) , arr );
        <br/>
        {"}"});
       </p>

        </div>
       </div>
   
       </div>
            </div>
            <div className="mb-3">
       <div className="row">
     
       <div className="col-lg-6 col-md-12">
       <div className="">
        
        <input
          type="text"
          className="form-control border border-0 bg-gray  "
          id="textInput"
          name="textInput"
          value={formData.textInput}
        placeholder=' A : '
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            backgroundColor: isFocused ? 'transparent' : '',
            transition: 'background-color 0.3s ease',}}
        />
        </div>
       </div>
   
       </div>
            </div>
            <div className="mb-3">
       <div className="row">
     
       <div className="col-lg-6 col-md-12">
       <div className="">
        
        <input
          type="text"
          className="form-control border border-0 bg-gray  "
          id="textInput"
          name="textInput"
          value={formData.textInput}
        placeholder=' B : '
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            backgroundColor: isFocused ? 'transparent' : '',
            transition: 'background-color 0.3s ease',}}
        />
        </div>
       </div>
   
       </div>
            </div>
            <div className="mb-3">
       <div className="row">
     
       <div className="col-lg-6 col-md-12">
       <div className="">
        
        <input
          type="text"
          className="form-control border border-0 bg-gray  "
          id="textInput"
          name="textInput"
          value={formData.textInput}
        placeholder=' C : '
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            backgroundColor: isFocused ? 'transparent' : '',
            transition: 'background-color 0.3s ease',}}
        />
        </div>
       </div>
   
       </div>
            </div>
            <h6 className='text-end pe-2 '>3 marks</h6>
            </div>
        </div> 
         <div className="mb-3 d-flex justify-content-end my-5 py-4   d-none d-md-flex" >
        
        <button type="button" className="btn btn-secondary text-white py-2 px-5"style={{fontWeight : "500"}} onClick={handleCancel}>CANCEL</button>
        <button type="submit" style={{fontWeight : "500" , backgroundColor:'#bf9b30'}} className="btn btn1 ms-3 text-white py-2 px-5 " onClick={handleSave} >SUBMIT</button>
      </div>
      <div className='d-block d-md-none  mb-3  my-5 py-4'>
        <button type="button" className="btn w-100 btn-secondary text-white py-2 px-5 mb-3 "style={{fontWeight : "500"}} onClick={handleCancel}>CANCEL</button>
        <button type="submit" style={{fontWeight : "500"}} className="btn w-100 btn1  text-white py-2 px-5 " onClick={handleSave} >SUBMIT</button>
      </div> 
    </div>
  )
};

export default QuationForm;