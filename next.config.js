const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [
      "@medusajs/product",
      "@medusajs/modules-sdk",
    ],
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "medusa-server-testing.s3.amazonaws.com",
      "res.cloudinary.com",
      "localhost",
      'encrypted-tbn0.gstatic.com'
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
