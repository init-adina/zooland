/** @type {import('tailwindcss').Config} */
export default {
	content: ["./*{html,js}"],
<<<<<<< HEAD
	
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
=======
	theme: {
		extend: {},
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
					'pink-custom': '#ED8792'
				}
			},
		},
		plugins: [],
	}
>>>>>>> 97864b33842e72c4a0cb97c3b85bff2079eb80a2
}
