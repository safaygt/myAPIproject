<h1>Weathery 🌤️</h1> 


<p>Weathery is a simple Node.js based weather application where users can get updated weather by city name.</p>
<p>This app integrates with the Weatherstack API and provides information such as operating temperature, felt temperature, wind speed, visibility and current weather.</p>

<h2>Features 📋</h2> 
<li>By entering the city name, users can see current weather information for the selected city.</li>
<li>Includes temperature, felt temperature, wind speed, wind direction and weather icons.</li>
<li>Displays the current date and time formatted according to the user's local time zone.</li>

<h2>Setup 🛠️ </h2>
<code>git clone https://github.com/safaygt/myAPIproject.git</code>
<code>cd myAPIproject</code>

<h2>Install the required packages</h2>
<code>npm install</code>


<h2> Add Weatherstack API Key </h2>

<p>You can get a free API key to use the Weatherstack API: <a href="https://weatherstack.com/"> Weatherstack. </a> </p>
<p>In the index.js file, add your own API key to the API_KEY variable:</p>




<code> const API_KEY = 'YourAPIKey'; </code>

<h2>Start Server</h2>
<code>nodemon index.js</code>
<p>Your application should now be running at <strong>http://localhost:3000</strong>.</p>



<h2>Technologies Used 🛠️</h2>


<li>Node.js & Express.js - To process server and API requests. </li>
<li>EJS - As a page templating engine.</li>
<li>Bootstrap - UI design and page layout.</li>
<li>CSS - To use specific designs. </li>
<li>Weatherstack API - To provide weather data.</li>
