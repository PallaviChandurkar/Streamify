import LOGO from "../assets/streamify-logo.png";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../utiles/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../utiles/userSlice";

function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store)=>store.user);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          } else {
            dispatch(removeUser());
         }
        });
          return () => unsubscribe();
      },[dispatch]);

    useEffect(()=>{
        if(user) navigate("/browse");
        else navigate("/");
    },[user,navigate]);

    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error.message);
        });
    }

    return (
        <>
            <div className="w-screen absolute py-2 z-20 bg-gradient-to-b from-black">
                <div className="max-w-6xl mx-auto flex justify-between">
                <img className="w-52" src={LOGO} alt="streamify-logo" />
                {user && <div className="flex gap-2 items-center">
                    <img className="w-10 h-10" src={user.photoURL} alt="profile_img" />
                    <button onClick={handleSignout} className="bg-neutral-800 text-white px-3 py-1 cursor-pointer">Sign Out</button>
                </div>}
                </div>
            </div>
        </>
    )
}

export default Header;