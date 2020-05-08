const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const newapiOrgKey = "1df02f86f8594f81bf88d129c3f2094f"
const meaningCloudApiKey = "f4be78fe9ca8f65345144ffc9305bce2"
const telegram_url = process.env.TELEGRAM
app.use(bodyParser.json());

app.post("/greet", (req, res) => {
  const {message} = req.body
  const greet = "Hello, I am Aller. The news services has evolved a lot, it's quite boring to sit down and read those lengthy articles."
  sendMessage(telegram_url, message, greet, res)
  return res.end
});

app.post("/technology", (req, res) => {
  fetch(`http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${newapiOrgKey}`)
  .then(res => res.json())
  .then((json) => {
    const url = json.articles[0].url
    fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=5`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      console.log("NEWS GENERATION SUCCESSFUL")
      return res.send(summary.summary)
    })
  })
});

app.post("/science", (req, res) => {
  fetch(`http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${newapiOrgKey}`)
  .then(res => res.json())
  .then((json) => {
    const url = json.articles[0].url
    fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=5`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      console.log("NEWS GENERATION SUCCESSFUL")
      return res.send(summary.summary)
    })
  })
});

app.post("/business", (req, res) => {
  fetch(`http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${newapiOrgKey}`)
  .then(res => res.json())
  .then((json) => {
    const url = json.articles[0].url
    fetch(`https://api.meaningcloud.com/summarization-1.0?key=${meaningCloudApiKey}&url=${url}&sentences=5`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      console.log("NEWS GENERATION SUCCESSFUL")
      return res.send(summary.summary)
    })
  })
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`HUMAN SERVER IS UP AND RUNNING AT PORT ${port}`)
});
