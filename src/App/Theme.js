import { tint } from "../../node_modules/polished";

const basicColors = {
    colors: {
        black: '#000',
        white: '#fff',
        primary: '#D67E45',
        blue: '#1E90FF',
        red: '##FF0000'
    }
};

const theme = {
    colors: {
      ...basicColors,
      grayDark: tint(0.8, basicColors.black),
    },
  };

  export default theme;