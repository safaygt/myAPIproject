import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const API_URL = "http://ws.audioscrobbler.com/2.0/";
const api_key = "1c7924a07e51f21b0ae54fdd4d5edf32";

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




const config = {
    params: { 
    'method': 'chart.gettopartists',
    'api_key': api_key,
    'format': 'json'
}
}

app.get("/", async (req, res) => {

    res.render("index.ejs", {a: "Waiting for data"});
})



app.post("/get-data", async (req, res) => {
try {
const response = await axios.get(API_URL, config);
const result = response.data
const artistUrl = result.artists.artist.map(artist => artist.url);


res.render("index.ejs", { artists: artistUrl });
}catch(error) {
res.render("index.ejs", {artists: error.message});
console.log(error);
}

});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
