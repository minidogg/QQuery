(async ()=>{
    const fs = require("fs")
    const buildOrder = require("../src/buildOrder.json")
    var bundle = ""//`(()=>{\n`
    
    buildOrder.files.forEach((e)=>{
        let fileData = fs.readFileSync("../src/"+e,"utf-8")
        bundle+="\n//"+e+"\n"
        bundle+=fileData+"\n"
    })
    // bundle+="})"
    fs.writeFileSync("../dist/bundle.js",bundle,"utf-8")
})()
