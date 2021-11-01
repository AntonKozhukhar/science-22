module.exports = {
  publicPath: '/science-22/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  }
}
