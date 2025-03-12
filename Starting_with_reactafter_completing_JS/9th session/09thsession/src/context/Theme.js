// import { createContext ,useContext } from "react";

// export const  ThemeContext = createContext({
//     themeMode : "light",
//     darkTheme :()=>{

//     },
//     lightTheme: ()=>{

//     }
// });


// export const ThemeProvider = ThemeContext.Provider

// export default function useTheme()
// {
//     return useContext(ThemeContext);
// }

import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
