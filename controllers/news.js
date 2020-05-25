const fetch = require("node-fetch");
const newapiOrgKey = process.env.NEWSAPI
const meaningCloudApiKey = process.env.MC

exports.technology = (ctx, req, res) => { 
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
};

exports.business = (ctx, req, res) => { 
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
};

exports.science = (ctx, req, res) => { 
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
};