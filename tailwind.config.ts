// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garanta que ele olhe dentro da pasta src
  ],
  darkMode: 'class', // Habilita o tema por classe
  theme: {
    extend: {}, // Pode ficar vazio por enquanto
  },
  plugins: [
    require('@tailwindcss/typography'), // Mantenha isso para o `prose`
  ],
} satisfies Config