<h1>Weathery 🌤️</h1> 


<p>Weathery, kullanıcıların şehir adına göre güncel hava durumu bilgilerini alabileceği basit bir Node.js tabanlı hava durumu uygulamasıdır. </p>
<p>Bu uygulama, Weatherstack API'si ile entegre olup, kullanıcılara sıcaklık, hissedilen sıcaklık, rüzgar hızı, yönü ve güncel hava durumu gibi bilgileri sunar. </p>

<h2>Özellikler 📋</h2> 
<li>Kullanıcılar şehir adı girerek, seçilen şehir için güncel hava durumu bilgilerini görebilir.</li>
<li>Sıcaklık, hissedilen sıcaklık, rüzgar hızı, rüzgar yönü ve hava durumu ikonlarını içerir.</li>
<li>Güncel tarih ve saati, kullanıcının yerel zaman dilimine göre biçimlendirilmiş şekilde görüntüler.</li>

<h2>Kurulum 🛠️ </h2>
<code>git clone https://github.com/safaygt/myAPIproject.git</code>
<code>cd myAPIproject</code>

<h2>Gerekli paketleri kurun</h2>
<code>npm install</code>


<h2> Weatherstack API Anahtarını Ekleyin </h2>

<p>Weatherstack API kullanmak için ücretsiz bir API anahtarı alabilirsiniz: <a href="https://weatherstack.com/"> Weatherstack. </a> </p>
<p>index.js dosyasında, API_KEY değişkenine kendi API anahtarınızı ekleyin:</p>

<code> const API_KEY = 'Sizin_API_Anahtarınız'; </code>

<h2>Sunucuyu Başlatın</h2>
<code>nodemon index.js</code>
<p>Uygulamanız artık <strong>http://localhost:3000</strong> adresinde çalışıyor olmalıdır.</p>
