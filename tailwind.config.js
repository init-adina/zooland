/** @type {import('tailwindcss').Config} */
export default {
	content: ["./*{html,js}"],
	
	theme: {
		 container: {
            padding: {
                DEFAULT: "1rem",
            },
        },
		extend: {
			colors: {
				'peach': '#FE9676',
				'pink-custom':'#ED8792'
			}
		},
  },
  plugins: [],
	
}
