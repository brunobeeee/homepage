const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './public/**/*.html'
    ],
    theme: {
        extend: {
            colors: {
                neutral: colors.gray,
                info: colors.blue,
                critical: colors.red,
                positive: colors.green,
                urge: colors.purple,
                warning: colors.yellow,
                gray: colors.gray, // wichtig für a17t
            },
        },
    },
    plugins: [require('a17t')],
};