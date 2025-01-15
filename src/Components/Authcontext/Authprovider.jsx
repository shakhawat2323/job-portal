import React, { useEffect, useState } from "react";
import AuthContxt from "./Authcontext";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./firebase";

const provider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const Registeruser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Signinusers = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const UserLogOUt = () => {
    setLoding(true);
    return signOut(auth);
  };
  const Googlepupop = () => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      console.log(currentuser);
      setLoding(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const Authinfo = {
    user,
    loding,
    setUser,
    setLoding,
    Registeruser,
    Signinusers,
    UserLogOUt,
    Googlepupop,
  };
  return <AuthContxt.Provider value={Authinfo}>{children}</AuthContxt.Provider>;
};

export default Authprovider;
