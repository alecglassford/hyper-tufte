const colors = {
  black: '#594a7d',
  red: '#f35970',
  green: '#83d996',
  yellow: '#ffffff',
  blue: '#62bff7',
  magenta: '#f15195',
  cyan: '#48ecd3',
  white: '#f5e566',
};
colors.lightBlack = colors.black;
colors.lightRed = colors.red;
colors.lightGreen = colors.green;
colors.lightYellow = colors.yellow;
colors.lightBlue = colors.blue;
colors.lightMagenta = colors.magenta;
colors.lightCyan = colors.cyan;
colors.lightWhite = colors.white;

exports.decorateConfig = function tufteDecorateConfig(config) {
  return Object.assign({}, config, {
    cursorColor: `${colors.blue}aa`, // opacity of 2/3
    foregroundColor: colors.white,
    backgroundColor: colors.black,
    borderColor: colors.magenta,
    colors,
  });
};
