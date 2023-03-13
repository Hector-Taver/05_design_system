"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeights: () => lineHeights,
  radii: () => radii,
  space: () => space
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
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

// src/space.ts
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

// src/radii.ts
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};

// src/fonts.ts
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};

// src/font-weights.ts
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};

// src/font-sizes.ts
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

// src/line-heights.ts
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space
});