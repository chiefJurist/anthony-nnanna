/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // ← THIS IS THE LINE THAT FIXES IT
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
