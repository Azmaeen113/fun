import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* Enhanced FUN Brand Colors */
        "fun-clear": "hsl(var(--fun-clear-green))",
        "fun-mid": "hsl(var(--fun-mid-green))",
        "fun-dark": "hsl(var(--fun-dark-green))",
        "fun-white": "hsl(var(--fun-white))",
        "fun-mint": "hsl(var(--fun-mint-green))",
        "fun-coral": "hsl(var(--fun-coral-pink))",
        "fun-cream": "hsl(var(--fun-cream-white))",
        "fun-sage": "hsl(var(--fun-sage-green))",
        "fun-teal": "hsl(var(--fun-deep-teal))",
        "fun-golden": "hsl(var(--fun-golden-yellow))",
        "fun-lavender": "hsl(var(--fun-lavender))",
        "fun-charcoal": "hsl(var(--fun-charcoal))",
        "paint-red": "hsl(var(--paint-red))",
        "paint-blue": "hsl(var(--paint-blue))",
        "paint-yellow": "hsl(var(--paint-yellow))",
      },
      fontFamily: {
        'title': ['Space Grotesk', 'Inter', 'sans-serif'],
        'body': ['Inter', 'Nunito Sans', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'sans-serif'],
        'accent': ['Nunito Sans', 'Inter', 'sans-serif'],
        'mono': ['Inter', 'monospace'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fly-right-left": "flyRightToLeft 15s linear infinite",
        "fly-left-right": "flyLeftToRight 18s linear infinite",
        "fly-diagonal": "flyDiagonal 20s linear infinite",
        "float": "float 8s ease-in-out infinite",
        "swing": "swing 3s ease-in-out infinite",
        "bounce": "bounce 4s ease-in-out infinite",
        "chaotic-spin": "spin 2s var(--chaotic-ease) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
