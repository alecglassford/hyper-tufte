const colors = {};
colors.black = colors.lightBlack = '#594a7d';
colors.red = colors.lightRed = '#f35970';
colors.green = colors.lightGreen = '#83d996';
colors.yellow = colors.lightYellow = '#f5e566';
colors.blue = colors.lightBlue = '#62bff7';
colors.magenta = colors.lightMagenta = '#f15195';
colors.cyan = colors.lightCyan = '#48ecd3';
colors.white = colors.lightWhite = '#ffffff';

exports.decorateConfig = function(config) {
  return Object.assign({}, config, {
    cursorColor: colors.blue + 'aa', // opacity of 2/3
    foregroundColor: colors.yellow,
    backgroundColor: colors.black,
    borderColor: colors.magenta,
    colors
  });
};
