import React from "react";
import UserContest from "./UserContext";

import { useState } from "react";
const UserContextprovider = ({ children }) => {
  const [user, setuser] = useState(null);

  return (
    <UserContest.Provider value={{ user, setuser }}>
      {children}
    </UserContest.Provider>
  );
};

export default UserContextprovider;
