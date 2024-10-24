require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/weather/show', async (req, res) => {
    res.render('./weather/show.ejs')
});

app.post('/weather', async (req, res) => {
    const zipCode = req.body.zipcode;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${process.env.WEATHER_KEY}`)
    .then(response => response.json())
    .then(data => {
      apiData = data;
      })
    res.redirect('/weather/show');
  });

app.listen(3000, () => {
    console.log('The Express server is running!')
});