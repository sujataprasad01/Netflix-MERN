import React, { useState } from 'react';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Header from '../../components/Header/Header';
import './Login.css'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
export default function Login() {

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password)
    } catch (err) {
      console.log(err)
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) { navigate("/")}

  })
  return (
    <div className='container4'>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex-column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className='title'>
              <h3>Login</h3>
            </div>
            <div className="container4 flex column">
              <input type='email' placeholder='Email Address' name='email' value={formValues.email} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}></input>
              <input type='password' placeholder='Password ' name='password' value={formValues.password} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}></input>
              <button onClick={handleLogIn} onChange={onAuthStateChanged}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



