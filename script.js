url = "https://api.weatherapi.com/v1/current.json?key=467e2bb02d99481faa242018242409&q=India&aqi=yes"

var req = new Request(url);

fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        current = data.current;
        console.log(current);
        document.getElementById('weather-text').innerText =  ''+data.current.condition.text;
        document.getElementById('wind').innerText = 'Wind (Kph)' + data.current.wind_kph;
        document.getElementById('winddeg').innerText = 'Wind Degree' + data.current.wind_degree;
        document.getElementById('humidity').innerText = 'Humidity' + data.current.humidity;
        document.getElementById('cloud').innerText = 'Cloud'+data.current.wind_kph;
        document.getElementById('windchill').innerText = 'Wind Chill'+data.current.windchill_c;
        document.getElementById('heat').innerText = 'Head(c)'+data.current.heatindex_c;
        document.getElementById('dew').innerText = 'Dew(c)'+data.current.dewpoint_c;
        document.getElementById('uv').innerText = 'Uv'+data.current.uv;
        document.getElementById('co2').innerText = 'CO Qulaity in Air'+data.current.air_quality.co;
        document.getElementById('temp').innerText = ''+data.current.temp_c;
        document.getElementById('no2').innerText = 'NO2 Qulaity in Air'+data.current.air_quality.no2;
    })