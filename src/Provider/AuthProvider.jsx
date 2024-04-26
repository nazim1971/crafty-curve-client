import { createContext } from "react";

export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {


    // All values
    const allValues = 'data'


    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;