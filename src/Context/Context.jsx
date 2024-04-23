import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase";
import PropTypes from 'prop-types';


export const AuthContext = createContext()
const Context = ({children}) => {

    let [user, setUser] = useState()

    let createUser = (email, passward) => {
       return createUserWithEmailAndPassword(auth, email, passward)
    }
    let loginUser = (email, passward) => {
       return signInWithEmailAndPassword(auth, email, passward)
    }


    let authInfo = {user, createUser, loginUser}
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

Context.propTypes={
      children: PropTypes.node.isRequired
}
export default Context;