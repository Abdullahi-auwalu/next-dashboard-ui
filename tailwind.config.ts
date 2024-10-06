import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        adaSky: "#D1E9F6",
        adaBlue: "#125B9A",
        adaBlueLight: "#C6DCE4",
        adaSkyLight: "#EDF9FD",
        adaPurple: "#CFCEFF",
        adaPink: "#E90074",
        adaPurpleLight: "#F1F0FF",
        adaPinkLight: "#FFE6E6",
        adaPeach: "#FFB0B0",
        adaseeBlue: "#00CCDD",
        adaYellowLight: "#FFF7D1",
        Maroon: "#C75B7A",
        adaMaroonLight: "#F4D9D0",
      },
      // colors: {
      //   adaSky: "#C3EBFA",
      //   adaSkyLight: "#EDF9FD",
      //   adaPurple: "#CFCEFF",
      //   adaPurpleLight: "#F1F0FF",
      //   adaYellow: "#FAE27C",
      //   adaYellowLight: "#FEFCE8",
      // },
    },
  },
  plugins: [],
};
export default config;
