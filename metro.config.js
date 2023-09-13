const { getDefaultConfig } = require("expo/metro-config")

module.exports = (async () => {
  const { resolver: { sourceExts, assetExts } } = await getDefaultConfig(__dirname)
  assetExts.push("db")
  return {
    transformer: {
      babelTransformerPath: require.resolve("./config/customTransformer.js")
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg" && ext !== "db"),
      sourceExts: [...sourceExts, "svg", "cjs", "scss", "sass"],
    },
    resetCache: true,
  }
})()
