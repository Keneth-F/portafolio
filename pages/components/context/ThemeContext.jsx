import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("229, 57, 53");
  return (<>
    <style jsx global>{`
        :root {
           --primary:rgb(${currentTheme})
        }
      `}</style>
    <ThemeContext.Provider value={{
      currentTheme,
      setCurrentTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  </>

  )
}
export default ThemeProvider
export const useTheme = () => useContext(ThemeContext);