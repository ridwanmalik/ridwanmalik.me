/** @type {import('next').NextConfig} */
const nextConfig = {
  // @react-pdf/renderer must load from node_modules at runtime (not be bundled),
  // otherwise Next's server bundling gives its reconciler a mismatched React instance.
  serverExternalPackages: ["@react-pdf/renderer"],
}

module.exports = nextConfig
