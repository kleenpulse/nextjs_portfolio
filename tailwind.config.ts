import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./utils/**/*.{js,ts,jsx,tsx,mdx}",
		"./wrapper/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				slideDown: "slideDown 1s ease forwards",
				loadspin: "loadspin 1.5s linear infinite",
			},
			keyframes: {
				loadspin: {
					"100%": {
						transform: "rotate(360deg)",
					},
				},

				slideDown: {
					"50%": {
						opacity: "0.7",
						transform: "translateY(50)",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
				fadeOut: {
					"50%": {
						opacity: "0.7",
						transform: "translateY(50)",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
			},
			fontFamily: {
				dmSans: ["DM Sans", "sans-serif"],
				rajdhani: ["Rajdhani", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
