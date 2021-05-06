const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
          customizeTheme: {
              "@primary-color": "#F18815",
              "@text-color-inverse": "#1E1E1E",
              "@menu-dark-highlight-color": "#1E1E1E",
              "@menu-dark-selected-item-text-color": "#1E1E1E",
              "@body-background": "#252526",
              "@component-background": "#252526",
              "@layout-header-background": "#1E1E1E",
              "@layout-body-background": "#252526",
              "@layout-footer-background": "#1E1E1E",
          }
      }
    },
  ],
};
