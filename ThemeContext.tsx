"use client";

import {
	createContext,
	useContext,
	useState,
	Dispatch,
	SetStateAction,
	useEffect,
	useMemo,
} from "react";
import { ColorName, colorNames } from "./utils/colors";

type Theme = "light" | "dark" | "system";
interface ThemeContextProps {
	theme: Theme;
	currentColor: ColorName;
	setTheme: Dispatch<SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeCtx = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>("" as Theme);

	useEffect(() => {
		if (theme === "system") {
			document.documentElement.className = "";
			localStorage.removeItem("theme");
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.className = "dark";
			}
			return;
		}
		if (theme === "light") {
			document.documentElement.className = "light";
			localStorage.setItem("theme", "light");
		}
		if (theme === "dark") {
			document.documentElement.className = "dark";
			localStorage.setItem("theme", "dark");
		}
	}, [theme]);

	useEffect(() => {
		if (
			!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			setTheme("system");
			document.documentElement.className = "dark";
		} else if ("theme" in localStorage) {
			setTheme(localStorage.getItem("theme") as Theme);
		}
	}, []);

	// Colors
	const [currentColor, setCurrentColor] = useState<ColorName>(colorNames[0]);

	useEffect(() => {
		let currentIdx = 0;

		const rotateColor = () => {
			setCurrentColor(colorNames[currentIdx]);

			currentIdx = (currentIdx + 1) % colorNames.length;
		};

		const intervalID = setInterval(rotateColor, 4000);

		return () => {
			clearInterval(intervalID);
		};
	}, []);

	const value = useMemo(
		() => ({ theme, setTheme, currentColor }),
		[theme, currentColor]
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
