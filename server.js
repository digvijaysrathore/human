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

bot.launch()

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`HUMAN SERVER IS UP AND RUNNING AT PORT ${port}`)
});
