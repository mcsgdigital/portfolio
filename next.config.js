/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export', // Ensures the app is exported as a static site
  distDir: 'out', // Optional: Specify the output folder (default is "out")
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};