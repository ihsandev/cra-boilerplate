const {
  override,
  addDecoratorsLegacy,
  addWebpackAlias,
  addBundleVisualizer,
  overrideDevServer,
  watchAll
} = require("customize-cra");
const path = require("path");

module.exports = {
  webpack: override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),

    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

    // add an alias for "ag-grid-react" imports
    addWebpackAlias({
      Pages: path.resolve(__dirname, "src/containers/Pages"),
      Templates: path.resolve(__dirname, "src/containers/Templates"),
      Utils: path.resolve(__dirname, "src/utils"),
      Components: path.resolve(__dirname, "src/components")
    })
  ),
  // dev server
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};
