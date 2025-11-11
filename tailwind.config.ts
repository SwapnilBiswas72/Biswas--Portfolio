import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./data/**/*.{ts,tsx}'],
  theme: { extend: { colors: { brand: '#1658cd' } } },
  plugins: []
}
export default config