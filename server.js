const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

let ACCESS_TOKEN = {};

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  server.get('/', (req, res) => {
    app.render(req, res, '/index', {})
  });

  server.get('/about', (req, res) => {
    app.render(req, res, '/about', {})
  });

  server.post('/api/search/genre', async (req, res) => {
    
    let response = await fetchFunction("https://api.spotify.com/v1/recommendations/available-genre-seeds");
    
    res.setHeader('Content-Type', 'application/json');
    if (response.error) {
      res.statusCode = 500;
      res.end(JSON.stringify({message: 'Server Error'}));
    }

    res.statusCode = 200;
    res.end(JSON.stringify(response));
  });

  server.post('/api/search/artist', async (req, res) => {

    let link = "https://api.spotify.com/v1/search?q=" + req.body.query + "&type=artist";
    let response = await fetchFunction(link);

    res.setHeader('Content-Type', 'application/json');
    if (response.error) {
      res.statusCode = 500;
      res.end(JSON.stringify({message: 'Server Error'}));
    }

    res.statusCode = 200;
    res.end(JSON.stringify(response));

  });

  server.get('*', (req, res, next) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('Ready on http://localhost:3000');
  });
});

const fetchFunction = async (link) => {
  const auth = 'Bearer ' + ACCESS_TOKEN.access_token;
  let response = await fetch(link, {
    method: 'GET',
    headers: {
      'Authorization': auth
    }
  });
  let resJSON = await response.json();
  return resJSON;
}

const accessSpotify = async () => {
  let auth = 'Basic ' + process.env.ENCODED_ID_SECRET;
  let token = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': auth
    }
  });
  token = await token.json();
  ACCESS_TOKEN = token;
}

accessSpotify();
setInterval(() => { // generate new access token every hour 
  accessSpotify();
}, 3600000);
