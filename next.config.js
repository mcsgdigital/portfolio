module.exports = {
  output: 'export', // Ensures the app is exported as a static site
  distDir: 'build', // Changes the output directory from "out" to "build"
  images: {
    unoptimized: true, // Disables Next.js image optimization
  },
};