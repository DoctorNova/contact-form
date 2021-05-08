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
              "@heading-color": orange,
              "@item-hover-bg": orange,
              "@btn-text-hover-bg": orange,
              "@menu-dark-highlight-color": darkGray,
              "@menu-dark-selected-item-text-color": darkGray,
              "@body-background": bodyGray,
              "@component-background": bodyGray,
              "@layout-header-background": darkGray,
              "@layout-body-background": bodyGray,
              "@layout-footer-background": darkGray,
          }
      }
    },
  ],
};
