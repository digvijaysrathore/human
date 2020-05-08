const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const newapiOrgKey = "1df02f86f8594f81bf88d129c3f2094f"
const meaningCloudApiKey = "f4be78fe9ca8f65345144ffc9305bce2"
app.use(bodyParser.json());

app.post("/backend/technology", (req, res) => {
  fetch(`http://newsapi.org/v2/top-headlines?category=technology&apiKey=${newapiOrgKey}`)
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

app.post("/backend/science", (req, res) => {
  fetch(`http://newsapi.org/v2/top-headlines?category=science&apiKey=${newapiOrgKey}`)
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

app.post("/backend/business", (req, res) => {
  fetch(`http://newsapi.org/v2/top-headlines?category=business&apiKey=${newapiOrgKey}`)
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

const port = 8000;
app.listen(port, () => {
    console.log(`HUMAN SERVER IS UP AND RUNNING AT PORT ${port}`)
});
