import { createContext, useState, useMemo, useEffect } from "react";
import languages from "./languages.json";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

export const Context = createContext();

export const Provider = ({ children }) => {
	// set up states to be ready to use
	const [darkmode, setDarkmode] = useState(false);
	const [language, setLanguage] = useState(languages[0]);

	// set up Material UI theme for dynamically changing
	const themeMUI = useMemo(
		() =>
			createTheme({
				palette: {
					type: darkmode ? "dark" : "light",
					primary: {
						main: darkmode ? "#00e676" : "#651fff"
					},
					secondary: {
						main: darkmode ? "#00bcd4" : "#9c27b0"
					}
				},
				typography: {
					fontFamily: language.fontFamily
				}
			}),
		[darkmode, language]
	);

	// functions to do the change
	const handleDarkmode = (boolean) => {
		// get actual true or false
		if (typeof boolean === "string") {
			boolean = boolean.toLowerCase() === "true";
		}
		const bl = typeof boolean === "boolean" ? boolean : false;
		// save the setting
		setDarkmode(bl);
		// localStorage.setItem('darkmode', bl)
	};
	const handleLanguage = (locale) => {
		// find the language
		const found = languages.find((item) => item.locale === locale);
		// get the existing language
		const obj = found || languages[0];
		// do stuff
		// document.title = obj.translation.title
		// save the setting
		setLanguage(obj);
		// localStorage.setItem('language', obj.locale)
	};

	// get viewer's setting once this website load
	useEffect(() => {
		handleDarkmode(/*localStorage.getItem('darkmode')*/);
		handleLanguage(/*localStorage.getItem('language')*/);
	}, []);

	return (
		<Context.Provider
			value={{ darkmode, handleDarkmode, language, handleLanguage }}
		>
			<ThemeProvider theme={themeMUI}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</Context.Provider>
	);
};
