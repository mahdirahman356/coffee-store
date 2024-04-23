import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext} from "react";
import auth from "../firebase/firebase";


export const AuthContext = createContext()
const Context = ({children}) => {

    // let [user, setUser] = useState()

    let createUser = (email, passward) => {
       return createUserWithEmailAndPassword(auth, email, passward)
    }
    let loginUser = (email, passward) => {
       return signInWithEmailAndPassword(auth, email, passward)
    }


    let authinfo = { createUser, loginUser}
    return (
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
    );
};


export default Context;