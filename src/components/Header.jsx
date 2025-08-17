import LOGO from "../assets/streamify-logo.png";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../utiles/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../utiles/userSlice";
import { toggleSearchMovie } from "../utiles/searchSlice";
import { Language_Options } from "../utiles/constants";
import { addlanguagechoice } from "../utiles/configSlice";

function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store)=>store.user);

    const isSearch = useSelector((store)=>store.search?.searchMovie);

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

    const handleSearch = () => {
        dispatch(toggleSearchMovie());
    }

    const handleChange = (e) => {
        dispatch(addlanguagechoice(e.target.value));
    }

    return (
        <>
            <div className="w-full absolute md:px-6 py-2 z-20 bg-gradient-to-b from-black">
                <div className="md:max-w-6xl mx-auto flex flex-wrap md:justify-between">
                <img className="w-40 mx-auto md:w-52 md:m-0" src={LOGO} alt="streamify-logo" />
                {user && <div className="flex mx-auto md:m-0 gap-2 items-center">
                    <img className="w-10 h-10" src={user.photoURL} alt="profile_img" />
                    <button onClick={handleSignout} className="bg-neutral-800 text-white px-1 md:px-3 py-1 cursor-pointer rounded-md">Sign Out</button>
                    <button onClick={handleSearch} className="bg-red-700 text-white px-1 md:px-3 py-1 cursor-pointer rounded-md">{isSearch ? "Home Page" : "Search Page"}</button>
                    {
                        isSearch && 
                        <select onChange={handleChange} className="text-white bg-amber-800 p-1 md:p-2 focus:outline-none cursor-pointer rounded-md">
                        {
                            Language_Options.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                        }
                        </select>
                    }
                </div>}
                </div>
            </div>
        </>
    )
}

export default Header;