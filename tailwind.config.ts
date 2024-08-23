import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
    content: [
        `./components/**/*.{vue,js,ts}`,
        `./content/**/*.{md,json}`,
        `./layouts/**/*.vue`,
        `./pages/**/*.vue`,
        `./composables/**/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
        `./utils/**/*.{js,ts}`,
        `./App.{js,ts,vue}`,
        `./app.{js,ts,vue}`,
        `./Error.{js,ts,vue}`,
        `./error.{js,ts,vue}`,
        `./app.config.{js,ts}`,
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Cabin"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    dark: '#060B26',
                    light: '#FFFFFF',
                    background: '#F4F6FF',
                },
                accent: {
                    purple: '#321B64',
                    blue: '#08005E',
                    green: '#01365D',
                    pink: '#D0C5E7',
                    lilac: '#C7CAE8',
                    babyblue: '#A0CCEB',
                },
            },
        },
    },
    plugins: [],
};
