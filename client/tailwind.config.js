/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(38, 61%, 73%)",
				secondary: "hsl(38, 100%, 89%)",
				tertiary: "hsl(38, 69%, 56%)",
			},
		},
	},
	plugins: [],
};
