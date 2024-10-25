/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				main: "#fe005f"
			}
		},
		fontFamily: {
			sans: ["Poppins, sans-serif"],
			Anton: ["Anton", "sans-serif"]
		}
	},
	plugins: []
};
