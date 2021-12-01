import * as React from "react";

export const useFirebase = () => {
  const firebase = React.useContext(React.createContext(null));
  return firebase;
};
