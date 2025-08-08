import { useRef, useState } from "react";
import background_image from "../assets/background_image.jpg";
import { checkValidData } from "../utiles/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utiles/firebase";
import { LOGO } from "../utiles/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utiles/userSlice";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);

  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const nameInput = useRef(null);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = () => {
    const message = checkValidData(emailInput.current.value,passwordInput.current.value);
    setErrorMessage(message);
    
    if(message) return;

    {!isSignIn &&  
    createUserWithEmailAndPassword(auth,emailInput.current.value,passwordInput.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
      displayName: nameInput.current.value, photoURL: LOGO
      }).then(() => {
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      }).catch((error) => {
        console.log(error);
    });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+" "+errorMessage);
      // ..
    });}

    {isSignIn && 
    signInWithEmailAndPassword(auth,emailInput.current.value,passwordInput.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+" "+errorMessage);
    });
    }
    }

  return (
    <>
      <div className="relative">
        <img
          className="h-screen w-screen object-cover"
          src={background_image}
          alt="background_image"
        />
        <div className="bg-black/90 text-white rounded-lg absolute top-36 left-1/2 transform -translate-x-1/2 py-12 px-16 w-4/12">
        <form onSubmit={(e)=>e.preventDefault()}>
          <h1 className="text-3xl font-bold my-3">
            {isSignIn ? "Sign In" : "Sign up"}
          </h1>
          {!isSignIn && (
            <input
              className="w-full border border-neutral-400 p-3 rounded-md my-2"
              ref={nameInput}
              type="text"
              placeholder="Name"
            />
          )}
          <input
            className="w-full border border-neutral-400 p-3 rounded-md my-2"
            ref={emailInput}
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full border border-neutral-400 p-3 rounded-md my-2"
            ref={passwordInput}
            type="text"
            placeholder="Password"
          />
          <button onClick={handleSubmit} className="w-full bg-red-600 text-white p-3 rounded-md my-2 cursor-pointer">
            {isSignIn ? "Sign In" : "Sign up"}
          </button>
          <p className="text-red-600">{errorMessage}</p>
          <p onClick={handleSignIn} className="cursor-pointer my-3">
            {isSignIn
              ? "New to Streamify? Sign up now"
              : "Already SignUp? Sign in now"}
          </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
