const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './public/**/*.html'
    ],
    darkMode: 'class', // enable dark mode based on user's system preference
    theme: {
        extend: {
            colors: {
                neutral: colors.gray,
                info: colors.blue,
                critical: colors.red,
                positive: colors.green,
                urge: colors.purple,
                warning: colors.yellow,
                gray: colors.gray, // needed for a17t
                dark: '#0A0311',
            },
        },
        fontFamily: {
            heading: ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [require('a17t')],
};