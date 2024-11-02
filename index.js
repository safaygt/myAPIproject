import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Weatherstack API key
const API_KEY = 'YOURAPIKEY';

app.get('/', (req, res) => {
    res.render('index.ejs', { weather: null });
});

app.post('/weather', async (req, res) => {
    const city = req.body.city;
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;

    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        if (weatherData.success === false) {
            return res.render('index.ejs', { weather: null });
        }
        if (!weatherData || !weatherData.location) {
            return res.render('index.ejs', { weather: null, error: "Result not found" });
        }
        res.render('index.ejs', { weather: weatherData });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.render('index.ejs', { weather: null });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
