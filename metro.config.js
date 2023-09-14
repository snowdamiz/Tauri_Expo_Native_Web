const { getDefaultConfig } = require("expo/metro-config")

module.exports = (() => {
  const { resolver: { sourceExts, assetExts } } = getDefaultConfig(__dirname)
  assetExts.push("db")
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg" && ext !== "db"),
      sourceExts: [...sourceExts, "svg", "cjs"],
    },
    resetCache: true,
  }
})()
