import React, { useState } from 'react';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Header from '../../components/Header/Header';
import './Signup.css'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Signup() {

    const navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleSignIn=async()=>{
        setSubmitButtonDisabled(true);

        // if (!formValues.email || !formValues.pass) {
        //     console.log("Fill all fields");
        //     return;
        //   }

    try{
     const{email, password}=formValues;
     setSubmitButtonDisabled(false);
     await createUserWithEmailAndPassword(firebaseAuth, email, password)
    }catch(err){
        // setSubmitButtonDisabled(false);
     console.log(err)
    }
    }

    onAuthStateChanged(firebaseAuth, (currentUser)=>{
 if(currentUser){
    navigate("/")
 }
    })
    return (
        <div className='container1' showPassword={showPassword}>
            <BackgroundImage />
            <div className="content">
                <Header login />
                <div className="body flex column a-center j-center">
                    <div className="text flex column">
                        <h1>Unlimited movies, TV shows and more</h1>
                        <h4>Watch anywhere. Cancle anytime</h4>
                        <h6>Ready to watch? Enter your email to create or restart membership</h6>
                    </div>
                    <div className="form">
                        {/* <input type='name' placeholder='Name' name='name'></input> */}
                        <input type='email' placeholder='Email Address' name='email' value={formValues.email} onChange={(e)=>setFormValues({...formValues, [e.target.name]:e.target.value})}></input>
                        {
                            showPassword && (
                                <input type='password' placeholder='Password ' name='password' value={formValues.password} onChange={(e)=>setFormValues({...formValues, [e.target.name]:e.target.value})}></input>
                            )
                        }
                        {!showPassword && (<button onClick={() => setShowPassword(true)}>Get Started</button>)}
                    </div>
                    <button onClick={handleSignIn} onChange={onAuthStateChanged} disabled={submitButtonDisabled} className='btn'> Sign Up</button>
                    <p >
            Already have an account?{" "}
            <span >
              <Link to="/login" className='already'>Login</Link>
            </span>
          </p>
                </div>
            </div>
        </div>
    )
}



