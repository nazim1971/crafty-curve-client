import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";




export const AuthContext = createContext(null);
// google auth
const googleProvider = new GoogleAuthProvider();

// github provider
const githubProvider = new GithubAuthProvider();



const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
    const [loading, setLoader] = useState(true);
    

    // create user
    const createUser = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

      // update user profile
  const updateUserProfile = (name, photo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

    // login user
    const login = (email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

     // Google Login
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Github Login
  const githubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

     // logOut
  const logOut = () => {
    setLoader(true)
    return signOut(auth);
  };

        // Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

    // All values
    const allValues = {
        createUser,
        user,
        setUser,
        setLoader,
        login,
        logOut,
        updateUserProfile,
        googleLogin,
        githubLogin,
        loading
    }


    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;