import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Signup.scss";

function SignUp(props) {
  let Sname = "";
  let SlastName = "";
  let Sphone = "";
  let Semail = "";
  let Spassword = "";

  let [nameStyle, setNameStyle] = useState();
  let [lastNameStyle, setLastNameStyle] = useState();
  let [phoneStyle, setPhoneStyle] = useState();
  let [emailStyle, setEmailStyle] = useState();
  let [passwordStyle, setPasswordStyle] = useState();
  let [temp, setTemp] = useState(true);

  let nameHandler = (e) => {
    Sname = e.target.value;
    
    if(Sname === "" || Sname.match(/[0-9]/) || Sname.match(/[!@#&%*$^]/) || Sname.includes("  ") || Sname.length < 2){
      setNameStyle(true);
    }else{
      setNameStyle(false);
    }

    props.setBio({...props.bio, name : Sname});
  }
  
  let lastNameHandler = (e) => {
    SlastName = e.target.value;

    if(SlastName === "" || SlastName.match(/[0-9]/) || SlastName.match(/[!@#&%*$^]/) || SlastName.includes("  ") || SlastName.length < 2){
      setLastNameStyle(true);
    }else{
      setLastNameStyle(false); 
    }

    props.setBio({...props.bio, lastName : SlastName});
  }
  
  let phoneHandler = (e) => {
    Sphone = e.target.value;

    if(Sphone.length === "" || Sphone.length < 9 || Number.isInteger(Sphone)){
      setPhoneStyle(true);
    }else{
      setPhoneStyle(false); 
    }

    props.setBio({...props.bio, phone : Sphone});
  }
  
  let emailHandler = (e) => {
    Semail = e.target.value;

    if(Semail.match(/[a-z]/) == null || Semail.match(/[0-9]/) == null || Semail.match(/[!@#$%^&*]/) == null || Semail.length <= 8){
      setEmailStyle(true)
    }else{
      setEmailStyle(false) 
    }

    props.setBio({...props.bio, email : Semail});
  }

  let passwordHandler = (e) => {
    Spassword = e.target.value;

    if(Spassword.match(/[A-Z]/) == null || Spassword.match(/[0-9]/) == null || Spassword.match(/[!@#$%^&*]/) == null || Spassword.length <= 8){
      setPasswordStyle(true);
    } else{
      setPasswordStyle(false);
    }

    props.setBio({...props.bio, password : Spassword});

    if(nameStyle === true && lastNameStyle === true && phoneStyle === true && emailStyle === true && passwordStyle === true){
      setTemp(true);
    } else{
      setTemp(false);
    }
  }

  return (
    <div className='signup d-flex'>
      <div className='signup__left col-6'>
        <div className='signup__img-wrapper'>
          <img src="https://imgur.com/mCnkXy2.png" alt="singup" />
        </div>
      </div>
      <div className='signup__right col-6'>
        <div className='signup__wrapper'>
          <h2 className='signup__title'>
            Sign up
          </h2>
          <form className='signup__form'>
            <input type="text" className='form-control signup__name' placeholder='First name' onChange={nameHandler} required style={{border : nameStyle ? "2px solid red" : "1px solid #ced4da"}} />
            <input type="text" className='form-control signup__lastName' placeholder='Last name' required onChange={lastNameHandler} style={{border : lastNameStyle ? "2px solid red" : "1px solid #ced4da"}} />
            <input type="text" className='form-control signup__phone' placeholder='Phone' required onChange={phoneHandler} style={{border : phoneStyle ? "2px solid red" : "1px solid #ced4da"}} />
            <input type="email" className='form-control signup__email' placeholder='Email' required onChange={emailHandler} style={{border : emailStyle ? "2px solid red" : "1px solid #ced4da"}} />
            <input type="password" className='form-control signup__password' placeholder='Password' required onChange={passwordHandler} style={{border : passwordStyle ? "2px solid red" : "1px solid #ced4da"}} /> 
            <Link 
              to={'/home'}
            >
              <button className='signup__btn' disabled={temp} >
                  Next Step
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
