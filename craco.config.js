const CracoAntDesignPlugin = require("craco-antd");

const orange = "#F18815";
const lightGray = "#EDEDED";
const darkGray = "#1E1E1E";
const bodyGray = "#252526";

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": orange,
          "@icon-color": lightGray,
          "@text-color": lightGray,
          "@text-color-secondary": lightGray,
          "@text-color-inverse": darkGray,
          "@select-item-selected-color": darkGray,
          "@heading-color": lightGray,
          "@item-hover-bg": orange,
          "@btn-text-hover-bg": orange,
          "@menu-dark-highlight-color": darkGray,
          "@menu-dark-selected-item-text-color": darkGray,
          "@card-head-background": darkGray,
          "@border-color-base": darkGray,
          "@border-color-split": darkGray,
          "@body-background": bodyGray,
          "@component-background": bodyGray,
          "@input-addon-bg": bodyGray,
          "@layout-header-background": darkGray,
          "@layout-body-background": bodyGray,
          "@layout-footer-background": darkGray,
        },
      },
    },
  ],
};
