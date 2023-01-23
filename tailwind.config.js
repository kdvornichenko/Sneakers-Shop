module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				card: '0px 14px 30px rgba(0, 0, 0, 0.05)',
				cart: '-10px 4px 24px rgba(0, 0, 0, 0.1)',
				wrapper: '0px 10px 20px rgba(0, 0, 0, 0.04)',
			},
			colors: {
				black: '#000000',
				grey: '#9D9D9D',
				greyDark: '#696969',
				greyLight: '#F3F3F3',
				green: '#9DD458',
				greenDarkBtn: '#81B93A',
				greenLightBtn: '#ABE462',
				greenLight: '#D6FFC8',
				redLight: '#FEF0F0',
				priceGrey: '#BDBDBD',
				red: '#FF8585',
			},
		},
	},
	plugins: [],
}
