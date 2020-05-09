const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const newapiOrgKey = "1df02f86f8594f81bf88d129c3f2094f"
const meaningCloudApiKey = "f4be78fe9ca8f65345144ffc9305bce2"
const TelegramBot = require("node-telegram-bot-api")
app.use(bodyParser.json());

const token = "1239168966:AAFnwpTimA_6DHHo9P6y-z3VIachnu6gKQo";


const Telegraf = require('telegraf') // import telegram lib

const bot = new Telegraf("1239168966:AAFnwpTimA_6DHHo9P6y-z3VIachnu6gKQo") // get the token from envirenment variable
bot.start((ctx) => ctx.reply("Hello, I am Aller (crafted by Digvijay). News services have evolved a lot.  It's so boring to sit down and read lengthy news articles. I perform text analysis to deliver crisp news straight to your inbox. Explore and stay updated. 1. Text me 'technology' for tech genre. 2. 'business' for some busines news. 3. and 'science' for some scientific dose. /help for recieving these guidelines again, anytime."))
bot.hears('/help', (ctx) => {
  ctx.reply("Heyya, I think you are stuck somewhere. News services have evolved a lot.  It's so boring to sit down and read lengthy news articles. I perform text analysis to deliver crisp news straight to your inbox. Explore and stay updated. 1. Text me 'technology' for tech genre. 2. 'business' for some busines news. 3. and 'science' for some scientific dose. /help for recieving these guidelines again, anytime. Tweet about any issue, Twitter at novadigvijay.")
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
bot.launch()

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`HUMAN SERVER IS UP AND RUNNING AT PORT ${port}`)
});
