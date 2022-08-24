/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#81AFDD",
				secondary: "#FF4820",
				"main-bg": "#040C18",
				"secondary-bg": "#052D56",
				"secondary-text": "#3D6184",
				"half-transparent": "rgba(0, 0, 0, 0.5)",
			},
		},
	},
	plugins: [],
};
