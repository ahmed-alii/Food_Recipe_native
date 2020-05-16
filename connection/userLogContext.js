import React, { useState } from "react";
const UserLogContext = React.createContext();

export const UserLogProvider = ({ children }) => {
  
 //For making the data availble in favrouite screen and auto login
  
  const [id, setid] = useState(-1);
  const [type, settype] = useState("");

  return (
    <UserLogContext.Provider
      value={{ data1: [id, setid], data2: [type, settype] }}
    >
      {children}
    </UserLogContext.Provider>
  );
};

export default UserLogContext;
