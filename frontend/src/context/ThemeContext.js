import { createContext, useState } from "react";

const themeContext = createContext();

const BACKGROUND = "#c3d2ff";

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); 	
	const [textTheme, setTextTheme] = useState(theme == "light" ? "dark": "light")
	const [background, setBackground] = useState(theme == "light" ? BACKGROUND : "#000000");
	
	const toggleTheme = () => {
		if (theme == "dark"){
			localStorage.setItem("theme", "light");
			setTheme("light");
			setTextTheme("dark");
			setBackground(BACKGROUND);
		}
		else{
			localStorage.setItem("theme", "dark");
			setTheme("dark");
			setTextTheme("light");
			setBackground("#000000");
		}
	}

    return (
        <themeContext.Provider value={{ theme, textTheme, background, toggleTheme }}>
            {props.children}
        </themeContext.Provider>
    );
}

export {ThemeContextProvider, themeContext};