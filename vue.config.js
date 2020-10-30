const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack:config  => {
    config.resolve.alias
      .set("@",resolve("src"))
      .set("components",resolve("src/components"))
      .set("assets",resolve("src/assets"))
      .set("utils",resolve("src/utils"))
  },
  pluginOptions: {
    i18n: {
      locale: 'cn',
      fallbackLocale: 'cn',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  devServer:{
    proxy:{
      '/article':{
        target:'http://localhost:3000/article',
        wx:false,
        changeOrigin:true,
        pathRewrite:{
          '^/article': ''  //路径重写 
        }
      }
    }
  }
}
