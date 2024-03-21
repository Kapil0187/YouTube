import React from 'react'
import { useRef,useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkValidaData } from '../utils/Validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { USERLOGO } from '../utils/constants';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = ()=>{
      setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = ()=>{
        const message = checkValidaData(email.current.value,password.current.value);
        setErrorMessage(message);

        if(message)
            return;

        if(!isSignInForm){
            // Sign Up 
            createUserWithEmailAndPassword(
                auth, 
                email.current.value,
                password.current.value
            )
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, 
                    photoURL:USERLOGO
                  }).then(() => {
                    // Profile updated!
                    const {uid,email,displayName}= auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage)
            });
        }
        else{
            // Sign In
            signInWithEmailAndPassword(
                auth, 
                email.current.value,
                password.current.value
            )
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage)
            });
        }
    }
  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-4/12 absolute p-12 bg-black my-28 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input
                ref={name}
                type='text'
                placeholder='Full Name'
                className='p-4 my-4 w-full bg-gray-700'
            />}
            <input 
                ref={email}
                type='text'
                placeholder='Email Address' 
                className='p-4 my-4 w-full bg-gray-700'
            />
            <input 
                ref={password}
                type='password' 
                placeholder='Password' 
                className='p-4 my-4 w-full bg-gray-700'
            />
            <p className='text-red-700 font-bold text-lg py-2'>{errorMessage}</p>
            <button 
                className='p-4 my-6 bg-red-700 w-full'
                onClick={handleButtonClick}>
                {isSignInForm?"Sign In":"Sign Up"}  
            </button>
            <p 
                className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm?"New to YouTube ? Sign Up Now.":"Already registered ? Sign In Now."}
            </p>
        </form>
    </div>
  )
}

export default Login
