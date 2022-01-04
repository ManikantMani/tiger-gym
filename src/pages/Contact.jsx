import React, {useState} from 'react';
import "./style.css";

const Contact = () => {

    
  const [data, setData] = useState({
    fullname:"",
    phone:"",
    msg:"",
  });

  let name, value;
  const getUserData = (event) => {
      name = event.target.name;
      value = event.target.value;

      setData({ ...data, [name]: value });
  };


const postData =  () => {
  alert(`Thank you Mr ${data.fullname}, We will contact you by your mobile no.`);
}
    return (
        <>
           <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                Name
                </label>
                <input 
                type="text" 
                class="form-control" 
                id="exampleFormControlInput1" 
                name = "fullname"
                onChange = {getUserData}
                value = {data.fullname}
                autoComplete='off'
                required
                placeholder="Enter Your Name..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                Phone No.
                </label>
                <input 
                type="number" 
                class="form-control" 
                id="exampleFormControlInput1" 
                name = "phone"
                onChange = {getUserData}
                value = {data.phone}
                autoComplete='off'
                required
                placeholder="Enter Your Phone No..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                Message
                </label>
                <textarea 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                name = "msg"
                onChange = {getUserData}
                value = {data.msg}
              ></textarea>
              </div>
              <div className = "col-12">
                <button 
                className = "btn" 
                type = "submit"
                onClick={postData}
                >
                Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>
    );
};

export default Contact;
