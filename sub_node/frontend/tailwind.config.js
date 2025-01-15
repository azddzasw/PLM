module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}" 
  ],
  
  presets: [require("@relume_io/relume-tailwind")],
};

