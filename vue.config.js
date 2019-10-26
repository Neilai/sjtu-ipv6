const test=require("./mock/test.json")
module.exports = {
  devServer: {
    port: 8080,
    before(app) {
      app.post("/test",(req,res)=>{
        res.json(test)
      })
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/global.scss";
        `
      }
    }
  }
};
