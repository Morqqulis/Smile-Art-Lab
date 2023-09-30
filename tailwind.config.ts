import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		screens: {
			1250: { max: '1250.99px' },
			pc: { max: '1199.99px' },
			tablets: { max: '991.99px' },
			mobile: { max: '767.99px' },
			middle: { max: '566.99px' },
			small: { max: '479.99px' },

			mtablets: { min: '991.99px' },
			mmobile: { min: '767.99px' },
			mmiddle: { min: '566.99px' },
			msmall: { min: '479.99px' },
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				// 'heroBg-1': './public/hero/bg-1.jpg',
			},
			colors: {
				gg: '#C3A24D',
				gray: 'rgba(233, 232, 228, 0.50)',
			},
			boxShadow: {
				card: '35px 35px 60px 0px rgba(0, 0, 0, 0.15)',
			},
		},
	},
	plugins: [],
};
export default config;
