import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [
        daisyui,
    ],

    // Custom "marin" / "marindark" themes are defined in src/index.css
    // (daisyUI 5 reads themes from CSS, not from this JS config).
    daisyui: {
        themes: ["light", "dark"],
        darkTheme: "marindark",
    },
}
