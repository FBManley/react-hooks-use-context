import React, { useState }from "react";
// CREATE THE CONTEXT
const UserContext = React.createContext();

// create a  special "provider" component that will give access to the context data to its child components
function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
  }
  
  export { UserContext, UserProvider };