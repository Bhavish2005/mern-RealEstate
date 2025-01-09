import React from 'react'
import Google_icon from '../assets/Google.png'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { app } from '../firebase';
import { signInSuccess } from '../Redux/user/userSlice';
import { useNavigate } from 'react-router-dom';


function OAuth() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider=new GoogleAuthProvider();
            const auth=getAuth(app)
            const result=await signInWithPopup(auth,provider)  
            const res=await fetch('api/auth/googlelogin',{
              method:'POST',
              headers:{
                'Content-Type':'application/json',
              },
              body:JSON.stringify({
               name:result.user.displayName,email:result.user.email,photo:result.user.photoURL
              }),
            })
            const data=await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            // console.log("could not Sign in with Google",error);
        }
    }
  return (
    // <button className="bg-red-500">OAuth</button>
    <button  onClick={handleGoogleClick} type='button' className='bg-gray-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 font-semibold flex items-center justify-center'><img src={Google_icon} alt="Google Icon" className=" w-6 h-6 mr-2"/>Sign In with GOOGLE </button>
  )
}

export default OAuth