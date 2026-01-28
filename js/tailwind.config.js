tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#8b5cf6", // Violet-500
                "primary-dark": "#7c3aed", // Violet-600
                "background-light": "#f3f4f6", // Gray-100
                "background-dark": "#050505", // Near Black
                "card-light": "rgba(255, 255, 255, 0.65)",
                "card-dark": "rgba(20, 20, 20, 0.6)",
            },
            fontFamily: {
                display: ["Outfit", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "1.5rem",
            },
            animation: {
                'blob': 'blob 7s infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        },
    },
};
