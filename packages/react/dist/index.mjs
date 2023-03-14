var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D"
};
var space = {
  1: "0.25rem",
  /* 4px */
  2: "0.5rem",
  /* 8px */
  3: "0.75rem",
  /* 12px */
  4: "1rem",
  /* 16px */
  5: "1.25rem",
  /* 20px */
  6: "1.5rem",
  /* 24px */
  7: "1.75rem",
  /* 28px */
  8: "2rem",
  /* 32px */
  10: "2.5rem",
  /* 40px */
  12: "3rem",
  /* 48px */
  16: "4rem",
  /* 64px */
  20: "5rem",
  /* 80px */
  40: "10rem",
  /* 160px */
  64: "16rem",
  /* 256px */
  80: "20rem"
  /* 320px */
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var fontSizes = {
  xxs: "0.625rem",
  /* 10px */
  xs: "0.75rem",
  /* 12px */
  sm: "0.875rem",
  /* 14px */
  md: "1rem",
  /* 16px */
  lg: "1.125rem",
  /* 18px */
  xl: "1.25rem",
  /* 20px */
  "2xl": "1.5rem",
  /* 24px */
  "4xl": "2rem",
  /* 32px */
  "5xl": "2.25rem",
  /* 36px */
  "6xl": "3rem",
  /* 48px */
  "7xl": "4rem",
  /* 64px */
  "8xl": "4.5rem",
  /* 72px */
  "9xl": "6rem"
  /* 96px */
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space
  }
});

// src/index.tsx
var Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite300",
  borderRadius: "$sm",
  border: 0,
  fontWeight: "bold",
  color: "$white",
  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4"
      },
      big: {
        fontSize: 16,
        padding: "$3 $6"
      }
    }
  },
  defaultVariants: {
    size: "small"
  }
});
export {
  Button
};
