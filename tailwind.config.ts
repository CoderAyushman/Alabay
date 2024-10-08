import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		textStrokeWidth: {
  			'1': '1px',
  			'2': '2px'
  		},
  		textStrokeColor: {
  			white: '#ffffff',
  			black: '#000000'
  		},
  		fontFamily: {
  			custom: ['cheeseburga']
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [ function ({ addUtilities }:any) {
    addUtilities({
      '.text-shadow': {
          'text-shadow': '2px 2px 0px #0F1B29', // Example: Black shadow
        },
      '.text-stroke-11': {
        '-webkit-text-stroke-width': '5px',
      },
      '.text-stroke-2': {
        '-webkit-text-stroke-width': '2px',
      },
      '.text-stroke-custom': {
        '-webkit-text-stroke-color': '#0F1B29',
      },
      '.text-stroke-white': {
        '-webkit-text-stroke-color': '#fff',
      },
    })
  },
      require("tailwindcss-animate")
],
};
export default config;
