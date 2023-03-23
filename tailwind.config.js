/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                violet: {
                    zircon: '#eff0f1',
                },
                black: {
                    acadia: '#0f0f0f',
                },
                red: {
                    default: '#ff0000',
                },
            },
        },
    },
    plugins: [],
};
