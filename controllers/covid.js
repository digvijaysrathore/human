const fetch = require("node-fetch");

exports.stats = (ctx,req,res)=>{
fetch(`https://coronavirus-worlddata.herokuapp.com/world`)
.then(res=>res.json())
.then((json)=>{
        ctx.reply("Here is the covid19 world stats you have asked for :)")
        ctx.reply("Active Cases:"+""+json.active)
ctx.reply("Cured Cases:"+""+json.cured)
ctx.reply("Deaths Cases:"+""+json.deaths)
ctx.reply("Total Cases:"+""+json.total)
ctx.reply("Stats API by roshan.py")
    })
};