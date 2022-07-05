module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				wrapper: '0px 10px 20px rgba(0, 0, 0, 0.04)',
				card: '0px 14px 30px rgba(0, 0, 0, 0.05)',
			},
			colors: {
				grey: '#9D9D9D',
				lightGreen: '#D6FFC8',
				lightRed: '#FEF0F0',
				priceGrey: '#BDBDBD',
			},
		},
	},
	plugins: [],
}
