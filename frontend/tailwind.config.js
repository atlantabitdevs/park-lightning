const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            "prk-blue": "#2079FF",
            "prk-blue-light": "#47C8FF",
            "prk-orange": "#C57600",
            "prk-orange-light": "#DEC800",
            "prk-gray-light": "#EFEFEF",
            ...colors
        },
        extend: {
            minHeight: {
                '1/2': '50%'
            },
            fontFamily: {
                body: ['Assistant', 'sans-serif'],
                display: ['Nunito', 'sans-serif']
            }
        }
    },
    plugins: []
};
