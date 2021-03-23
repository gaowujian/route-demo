const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require("customize-cra");
const path = require("path");

module.exports = override(
  fixBabelImports("import", {
    //配置按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addWebpackAlias({
    //路径别名
    "@": path.resolve(__dirname, "src"),
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "layout-header-background": "lightcoral",
      "layout-sider-background": "lightgreen",
      "layout-content-background": "lightblue",
    },
  })
);
