(async ()=>{
    const fs = require("fs")
    const buildOrder = require("../src/buildOrder.json")

    var jsBundle = ""
    buildOrder.js.forEach((e)=>{
        let fileData = fs.readFileSync("../src/js/"+e,"utf-8")
        jsBundle+="\n//"+e+"\n"
        jsBundle+=fileData+"\n"
    })
    fs.writeFileSync("../dist/bundle.js",jsBundle,"utf-8")

    var cssBundle = ""
    buildOrder.css.forEach((e)=>{
        let fileData = fs.readFileSync("../src/css/"+e,"utf-8")
        cssBundle+="\n/* "+e+" */\n"
        cssBundle+=fileData+"\n"
    })
    fs.writeFileSync("../dist/bundle.css",cssBundle,"utf-8")

})()
