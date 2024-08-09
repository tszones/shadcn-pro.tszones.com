import type { Config } from "tailwindcss";
import { createPreset } from "fumadocs-ui/tailwind-plugin";
import svgToDataUri from "mini-svg-data-uri";
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  presets: [
    createPreset({
      preset: "default",
    }),
  ],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,mdx}",
    "./content/**/*.{ts,tsx,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "./src/mdx-components.tsx",
  ],
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100%": { opacity: "0.2" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'blink': 'blink 1.4s infinite both',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.typography-h1': {
          '@apply scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl': {},
        },
        '.typography-h2': {
          '@apply scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10': {},
        },
        '.typography-h3': {
          '@apply scroll-m-20 text-2xl font-semibold tracking-tight mt-8': {},
        },
        '.typography-h4': {
          '@apply scroll-m-20 text-xl font-semibold tracking-tight': {},
        },
        '.typography-p': {
          '@apply leading-7 [&:not(:first-child)]:mt-6': {},
        },
        '.typography-blockquote': {
          '@apply mt-6 border-l-2 pl-6 italic': {},
        },
        '.typography-ul': {
          '@apply my-6 ml-6 list-disc [&>li]:mt-2': {},
        },
        '.typography-inline-code': {
          '@apply relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold': {},
        },
        '.typography-lead': {
          '@apply text-xl text-muted-foreground': {},
        },
        '.typography-large': {
          '@apply text-lg font-semibold': {},
        },
        '.typography-small': {
          '@apply text-sm font-medium leading-none': {},
        },
        '.typography-muted': {
          '@apply text-sm text-muted-foreground': {},
        },
        '.typography-a': {
          '@apply font-medium text-primary underline underline-offset-4': {},
        },
        '.typography-tr': {
          '@apply m-0 border-t p-0 even:bg-muted': {},
        },
        '.typography-td': {
          '@apply border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right': {},
        },
        '.typography-th': {
          '@apply border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right': {},
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    function ({ matchUtilities, theme, addUtilities }: any) {
      matchUtilities(
        {
          dots: (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    require("tailwindcss-animate"),
    require("tailwind-custom-utilities"),
  ],
} satisfies Config;

export default config;
