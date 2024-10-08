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


    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=b8572c5aaf164d3f8fc634e11cb9f0e1&pageSize=10';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        article = data.articles;
        num = Math.floor(Math.random() * 10);
        s = article[num];
        document.getElementById('mainh').innerText = s.title;
        document.getElementById('mainp').innerText = s.description;
        my = document.getElementById('maind').setAttribute('data', JSON.stringify(s));
        document.getElementById('maind').style.backgroundImage = 'url(' + s.urlToImage+')'; 
    })


    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=b8572c5aaf164d3f8fc634e11cb9f0e1';

    var req = new Request(url);

    fetch(req)
    .then(function(response) {
        return response.json();
    }).then(function(data){
        console.log(data);
        article = data.articles;
        for(i = 0;i< article.length;i++){
        datas = article[i];
        console.log(datas);
        if(datas.title == "[Removed]"){

        }
        else{
            div = document.createElement('div');
            div.classList.add('card');
            h4 = document.createElement('h4');
            h4.innerText = datas.title;
            div.appendChild(h4);
            p = document.createElement('p');
            p.innerText = datas.description;
            div.appendChild(p);
            div.style.backgroundImage = 'url('+datas.urlToImage+')';
            div.setAttribute('data', JSON.stringify(datas));
            div.onclick = function(){
                detail(this);
            }
            document.getElementById('trend').appendChild(div);
        }
    } 
})


function detail(element){
    window.location.href = "detail.php?data=" + encodeURIComponent(element.getAttribute('data'));
}


function menu(){
    document.getElementById('mobile').classList.toggle('show');
}