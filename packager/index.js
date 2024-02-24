(async ()=>{
    console.log("Getting ready to build...")
    const fs = require("fs")
    const nodeCmd = require('node-cmd');
    const buildOrder = require("../src/buildOrder.json")

    console.log("Building JS bundle")
    var jsBundle = ""
    buildOrder.js.forEach((e)=>{
        let fileData = fs.readFileSync("../src/js/"+e,"utf-8")
        jsBundle+="\n//"+e+"\n"
        jsBundle+=fileData+"\n"
    })
    console.log("Built JS bundle successfuly!")

    await fs.writeFileSync("../dist/bundle.js",jsBundle,"utf-8")

    console.log("Building CSS bundle")
    var cssBundle = ""
    buildOrder.css.forEach((e)=>{
        let fileData = fs.readFileSync("../src/css/"+e,"utf-8")
        cssBundle+="\n/* "+e+" */\n"
        cssBundle+=fileData+"\n"
    })
    console.log("Built CSS bundle successfuly!")

    await fs.writeFileSync("../dist/bundle.css",cssBundle,"utf-8")


    console.log("Done building bundles!")
    // console.log("Making docs... (if this fails use 'npm install -g documentation')")
    // await nodeCmd.runSync('documentation build ../dist/bundle.js -f html -o ../docs')
    // console.log("Finished creating docs")
})()
