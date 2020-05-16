import React from "react";

//For the checking the Login state
const UserContext = React.createContext({
  loggedIn: false,
  setLoggedin: () => {},
  type: "hello",
  settype: () => {},
});
const UserLogContext = React.createContext({});

export default UserContext;
