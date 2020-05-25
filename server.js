require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const newapiOrgKey = process.env.NEWSAPI
const meaningCloudApiKey = process.env.MC
const token = process.env.TELEGRAM
const Telegraf = require('telegraf')
app.use(bodyParser.json());

const bot = new Telegraf(process.env.TELEGRAM)

bot.start((ctx) => ctx.reply("Hello, I am Aller (crafted by Digvijay). News services have evolved a lot.  It's so boring to sit down and read lengthy news articles. I perform text analysis to deliver crisp news straight to your inbox. Explore and stay updated. 1. Text me 'technology' for tech genre. 2. 'business' for some busines news. 3. and 'science' for some scientific dose. /help for recieving these guidelines again, anytime."));

const {help, feedback} = require("./controllers/basic");

bot.hears('/help', help);
bot.hears('/feedback',feedback);

const {technology, business, science} = require("./controllers/news");

bot.hears('technology', technology);
bot.hears('Technology', technology);

bot.hears('Business', business);
bot.hears('business', business);

bot.hears('science', science);
bot.hears('Science', science);

const {stats} = require("./controllers/covid");

bot.hears('covid19stats', stats);
bot.hears('covidstats', stats);

const bot = new Telegraf("1239168966:AAFnwpTimA_6DHHo9P6y-z3VIachnu6gKQo")
bot.start((ctx) => ctx.reply("Hello, I am Aller (crafted by Digvijay & @iamharshdeb). News services have evolved a lot.  It's so boring to sit down and read lengthy news articles. I perform text analysis to deliver crisp news straight to your inbox. Explore and stay updated. 1. Text me 'technology' for tech genre. 2. 'business' for some busines news. 3. and 'science' for some scientific dose. 4.COVID19 for covid19 related news and stats. /help for recieving these guidelines again, anytime."))
bot.hears('/help', (ctx) => {
  ctx.reply("Heyya, I think you are stuck somewhere. I perform text analysis to deliver crisp news straight to your inbox. Explore and stay updated. 1. Text me 'technology' for tech genre. 2. 'business' for some busines news. 3. and 'science' for some scientific dose.4.COVID19 for covid19 related news and stats. /help for recieving these guidelines again, anytime. /feedback to give me a feedback. Tweet about any issue, twitter at novadigvijay.")
})
bot.hears('/feedback', (ctx) => {
  ctx.reply("You can give me a feedback by leaving a tweet at novadigvijay (remember: Twitter at novadigvijay). I am waiting for it!")
})
bot.hears('technology', (ctx, req, res) => { 
  fetch(`http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${newapiOrgKey}`)
  .then(res => res.json())
  .then((json) => {
    const url = json.articles[0].url
    fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      console.log("NEWS GENERATION SUCCESSFUL")
      ctx.reply(json.articles[0].title)
      ctx.reply(summary.summary)
      ctx.reply(json.articles[0].url)
    })
  })
})

bot.hears('Technology', (ctx, req, res) => { 
  fetch(`http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${newapiOrgKey}`)
  .then(res => res.json())
  .then((json) => {
    const url = json.articles[0].url
    fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      console.log("NEWS GENERATION SUCCESSFUL")
      ctx.reply(json.articles[0].title)
      ctx.reply(summary.summary)
      ctx.reply(json.articles[0].url)
    })
  })
})

bot.hears('business', (ctx, req, res) => { 
  fetch(`http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${newapiOrgKey}`)
  .then(res => res.json())
  .then((json) => {
    const url = json.articles[0].url
    fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      console.log("NEWS GENERATION SUCCESSFUL")
      ctx.reply(json.articles[0].title)
      ctx.reply(summary.summary)
      ctx.reply(json.articles[0].url)
    })
  })
})

bot.hears('Business', (ctx, req, res) => { 
  fetch(`http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${newapiOrgKey}`)
  .then(res => res.json())
  .then((json) => {
    const url = json.articles[0].url
    fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      console.log("NEWS GENERATION SUCCESSFUL")
      ctx.reply(json.articles[0].title)
      ctx.reply(summary.summary)
      ctx.reply(json.articles[0].url)
    })
  })
})

bot.hears('science', (ctx, req, res) => { 
fetch(`http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${newapiOrgKey}`)
  .then(res => res.json())
  .then((json) => {
    const url = json.articles[0].url
    fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      console.log("NEWS GENERATION SUCCESSFUL")
      ctx.reply(json.articles[0].title)
      ctx.reply(summary.summary)
      ctx.reply(json.articles[0].url)
    })
  })
})

bot.hears('Science', (ctx, req, res) => { 
fetch(`http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${newapiOrgKey}`)
  .then(res => res.json())
  .then((json) => {
    const url = json.articles[0].url
    fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      console.log("NEWS GENERATION SUCCESSFUL")
      ctx.reply(json.articles[0].title)
      ctx.reply(summary.summary)
      ctx.reply(json.articles[0].url)
    })
  })
})

bot.hears('covid',(ctx,req,res)=>{
fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
.then(res=>res.json())
.then((json)=>{
const url=json.news[1].link

fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      ctx.reply(json.news[1].title)
      ctx.reply(summary.summary)
      ctx.reply(json.news[1].link)
    })
  })
})

bot.hears('covidnews',(ctx,req,res)=>{
fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
.then(res=>res.json())
.then((json)=>{
const url=json.news[1].link

fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      ctx.reply(json.news[1].title)
      ctx.reply(summary.summary)
      ctx.reply(json.news[1].link)
    })
  })
})

bot.hears('corona',(ctx,req,res)=>{
fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
.then(res=>res.json())
.then((json)=>{
const url=json.news[1].link

fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      ctx.reply(json.news[1].title)
      ctx.reply(summary.summary)
      ctx.reply(json.news[1].link)
    })
  })
})

bot.hears('COVID',(ctx,req,res)=>{
fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
.then(res=>res.json())
.then((json)=>{
const url=json.news[1].link

fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      ctx.reply(json.news[1].title)
      ctx.reply(summary.summary)
      ctx.reply(json.news[1].link)
    })
  })
})

bot.hears('covid19',(ctx,req,res)=>{
fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
.then(res=>res.json())
.then((json)=>{
const url=json.news[1].link

fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      ctx.reply(json.news[1].title)
      ctx.reply(summary.summary)
      ctx.reply(json.news[1].link)
    })
  })
})

bot.hears('Coronanews',(ctx,req,res)=>{
fetch(`https://cryptic-ravine-96718.herokuapp.com/`)
.then(res=>res.json())
.then((json)=>{
const url=json.news[1].link

fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=3`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      ctx.reply(json.news[1].title)
      ctx.reply(summary.summary)
      ctx.reply(json.news[1].link)
    })
  })
})

bot.hears('covidstats',(ctx,req,res)=>{
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
})

bot.hears('covid19stats',(ctx,req,res)=>{
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
})

bot.hears('hey',(ctx)=>{
ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
})

bot.hears('Hey',(ctx)=>{
ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
})

bot.hears('hi',(ctx)=>{
ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
})

bot.hears('Hi',(ctx)=>{
ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
})

bot.hears('Hola',(ctx)=>{
ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
})

bot.hears('hola',(ctx)=>{
ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
})

bot.hears('Hello',(ctx)=>{
ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
})

bot.hears('hello',(ctx)=>{
ctx.reply("Hola! How are you. Hope you are doing absolutely fine😊.How may i help you?")
})
 f2c71239c1130119670678e120fe7796936f3b34

bot.launch()

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`HUMAN SERVER IS UP AND RUNNING AT PORT ${port}`)
});
