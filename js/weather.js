// Docs at http://simpleweatherjs.com
$(document).ready(function() {

  $.simpleWeather({
    woeid: '', //2357536	
    location: 'Huntsville,AL',    
    unit: 'f',
	
    success: function(weather) {
	
	var d = new Date();
	var n = d.getHours();
	var timeofday = "d";
	if (n >= 19 || n < 6)
		timeofday = "n";
	else 
		timeofday = "d";
	

	var background = setbackground(timeofday,weather.code);
	var middle = setmiddle(weather.code);
	var precip = setprecip(weather.code);
    html = '<h4 id="cardheader">Current Weather - '+weather.city+'</h4><hr id="cardline">';
	html += '<img id="largeweather" style="z-index:201;" src="images/weather/'+background+'" >';
	html +='<img id="largeweather" style="z-index:202;" src="images/weather/'+middle+'" >';
	html +='<img id="largeweather" style="z-index:203;" src="images/weather/'+precip+'" >';
	html += '<h3 style="position:absolute;top:-80px;right:15px;font-size:112px;">'+weather.temp+'&deg;</h4>';
	var timestamp = moment(weather.updated);
    html += '<p style="position:absolute;top:280px;right:15px;">Updated at '+moment(timestamp).format('h:mma')+'</p>';	
    html += '<span style="width:140px;position:absolute;top:110px;right:35px;"><h5 style="text-align:center;">'+weather.currently+'</h5></span>  <hr style="border: 0;position:absolute;color: rgb(230,230,230);background-color: rgb(230,230,230);top:305px;height:1px;width:95%;">          <hr style="border: 0;position:absolute;color: rgb(230,230,230);background-color: rgb(230,230,230);top:305px;left:200px;height:185px;width:1px;">																				<hr style="border: 0;position:absolute;color:color: rgb(230,230,230);background-color: rgb(230,230,230);top:305px;left:300px;height:185px;width:1px;">																				<hr style="border: 0;position:absolute;color: rgb(230,230,230);background-color: rgb(230,230,230);top:400px;left:200px;height:1px;width:50%;">';
	
	html += '<img src="images/weather/fairsun.gif" style="width:35px;position:absolute;top:200px;left:15px;">'
	html += '<span style="position:absolute;top:170px;left:60px;"><h6 style="text-align:left;">'+weather.sunrise+'</h6></span>';
	html += '<img src="images/weather/fairmoon.gif" style="width:35px;position:absolute;top:245px;left:15px;">'
	html += '<span style="position:absolute;top:215px;left:60px;"><h6 style="text-align:left;">'+weather.sunset+'</h6></span>';
	
	var barometer = "Steady";
	var barimg = "barometer-steady.gif";
	if (weather.rising==1)
	{
		barometer = "Rising";
		barimg = "barometer-rising.gif";
	}
	else if (weather.rising==2)
	{
		barometer = "Falling";
		barimg = "barometer-falling.gif";
	}
	html += '<img src="images/weather/'+barimg+'" style="width:35px;position:absolute;top:200px;left:140px;">'
	html += '<span style="position:absolute;top:170px;left:185px;"><h6 style="text-align:left;">'+barometer+'</h6></span>';
	var humidityround = Math.round(weather.humidity / 10) * 10;
	html += '<img src="images/weather/humidity/humidity'+humidityround+'.gif" style="height:35px;position:absolute;top:245px;left:140px;z-index:300;">'
	html += '<span style="position:absolute;top:215px;left:185px;"><h6 style="text-align:left;">'+weather.humidity+' %</h6></span>';
	html += '<img src="images/weather/wind.gif" style="width:35px;position:absolute;top:200px;left:270px;">'
	html += '<span style="position:absolute;top:170px;left:315px;"><h6 style="text-align:left;">'+weather.wind.chill+' &deg;F</h6></span>';
	html += '<img src="images/weather/visibility.gif" style="width:35px;position:absolute;top:245px;left:270px;">'
	html += '<span style="position:absolute;top:215px;left:315px;"><h6 style="text-align:left;">'+weather.visibility+' '+weather.units.distance+'</h6></span>';
	html += '<span style="width:140px;position:absolute;top:280px;left:15px;"><h5 style="text-align:left;">Today</h5></span>';
	background = setbackground("d",weather.todayCode);
	middle = setmiddle(weather.todayCode);
	precip = setprecip(weather.todayCode);
	html += '<img id="smallweather" style="left:15px;z-index:201;" src="images/weather/'+background+'" >';
	html +='<img id="smallweather" style="left:15px;z-index:202;" src="images/weather/'+middle+'" >';
	html +='<img id="smallweather" style="left:15px;z-index:203;" src="images/weather/'+precip+'" >';
	html += '<span style="width:140px;position:absolute;top:400px;left:15px;"><h5 style="text-align:center;">'+weather.forecast[0].text+'</h5></span>';
	html += '<div id="highlow" style="left:115px;"><h2 style="position:absolute;left:5px;color:#e51c23;font-size:36px;font-weight:bold;">'+weather.high+'&deg;</h2>';
	html += '<h2 style="position:absolute;top:55px;left:5px;color:#5492f7;font-size:36px;font-weight:bold;margin-top:10px;">'+weather.low+'&deg;</h2></div>';
	
	html += '<span style="position:absolute;top:280px;left:205px;"><h6 style="text-align:left;">'+weather.forecast[1].day+'</h6></span>';
	background = setbackground("d",weather.forecast[1].code);
    middle = setmiddle(weather.forecast[1].code);
    precip = setprecip(weather.forecast[1].code);
	html += '<img id="extrasmallweather" style="top:340px;left:205px;z-index:201;" src="images/weather/'+background+'" >';
	html +='<img id="extrasmallweather" style="top:340px;left:205px;z-index:202;" src="images/weather/'+middle+'" >';
	html +='<img id="extrasmallweather" style="top:340px;left:205px;z-index:203;" src="images/weather/'+precip+'" >';
	html += '<div style="position:absolute;top:300px;left:265px;">';
	html += '<h6 style="position:absolute;color:#e51c23;font-size:20px;">'+weather.forecast[1].high+'&deg;</h6>';
	html += '<h6 style="position:absolute;top:55px;color:#5492f7;margin-top:10px;font-size: 20px; ">'+weather.forecast[1].low+'&deg;</h6></div>';
	
	html += '<span style="position:absolute;top:280px;left:305px;"><h6 style="text-align:left;">'+weather.forecast[2].day+'</h6></span>';
	background = setbackground("d",weather.forecast[2].code);
    middle = setmiddle(weather.forecast[2].code);
    precip = setprecip(weather.forecast[2].code);
	html += '<img id="extrasmallweather" style="top:340px;left:305px;z-index:201;" src="images/weather/'+background+'" >';
	html +='<img id="extrasmallweather" style="top:340px;left:305px;z-index:202;" src="images/weather/'+middle+'" >';
	html +='<img id="extrasmallweather" style="top:340px;left:305px;z-index:203;" src="images/weather/'+precip+'" >';
	html += '<div style="position:absolute;top:300px;left:365px;">';
	html += '<h6 style="position:absolute;color:#e51c23;font-size:20px;">'+weather.forecast[2].high+'&deg;</h6>';
	html += '<h6 style="position:absolute;top:55px;color:#5492f7;margin-top:10px;font-size: 20px; ">'+weather.forecast[2].low+'&deg;</h6></div>';
	
	html += '<span style="position:absolute;top:370px;left:205px;"><h6 style="text-align:left;">'+weather.forecast[3].day+'</h6></span>';
	background = setbackground("d",weather.forecast[3].code);
    middle = setmiddle(weather.forecast[3].code);
    precip = setprecip(weather.forecast[3].code);
	html += '<img id="extrasmallweather" style="top:430px;left:205px;z-index:201;" src="images/weather/'+background+'" >';
	html +='<img id="extrasmallweather" style="top:430px;left:205px;z-index:202;" src="images/weather/'+middle+'" >';
	html +='<img id="extrasmallweather" style="top:430px;left:205px;z-index:203;" src="images/weather/'+precip+'" >';
	html += '<div style="position:absolute;top:380px;left:265px;">';
	html += '<h6 style="position:absolute;color:#e51c23;font-size:20px;">'+weather.forecast[3].high+'&deg;</h6>';
	html += '<h6 style="position:absolute;top:55px;color:#5492f7;margin-top:10px;font-size: 20px; ">'+weather.forecast[3].low+'&deg;</h6></div>';
	
	html += '<span style="position:absolute;top:370px;left:305px;"><h6 style="text-align:left;">'+weather.forecast[4].day+'</h6></span>';
	background = setbackground("d",weather.forecast[4].code);
    middle = setmiddle(weather.forecast[4].code);
    precip = setprecip(weather.forecast[4].code);
	html += '<img id="extrasmallweather" style="top:430px;left:305px;z-index:201;" src="images/weather/'+background+'" >';
	html +='<img id="extrasmallweather" style="top:430px;left:305px;z-index:202;" src="images/weather/'+middle+'" >';
	html +='<img id="extrasmallweather" style="top:430px;left:305px;z-index:203;" src="images/weather/'+precip+'" >';
	html += '<div style="position:absolute;top:380px;left:365px;">';
	html += '<h6 style="position:absolute;color:#e51c23;font-size:20px;">'+weather.forecast[3].high+'&deg;</h6>';
	html += '<h6 style="position:absolute;top:55px;color:#5492f7;margin-top:10px;font-size: 20px; ">'+weather.forecast[4].low+'&deg;</h6></div>';
     
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
function setbackground(t,c)
	{
		if ((c>= 23 && c <= 25)||(c>=31 && c <= 34)||c==36)	// ------------------------------------fair------------------------
		{
			if	(t=="d")
				return "fairsun.gif";
			else 
				return "fairmoon.gif";
		}
		else if (c==3||c==4||c==11||c==12||(c>=15&&c<=17)||(c>=26&&c<=28)||(c>=41&&c<=46))// -------------------------upper cloudy------------------------
			return "otherclouds.gif";
		else if (!((c>= 23 && c <= 25)||(c>=31 && c <= 34)||c==36||c==0||c==3200||(c >= 19 && c <= 22))) // -------------------------cloudy------------------------
		{
			if	(t=="d")
				return "cloudsun.gif";
			else 
				return "cloudmoon.gif";
		}
		else if (c == 0) // ------------------------------------tornado------------------------
			return "tornado.gif";
		else if (c >= 19 && c <= 22)
			return "fog.gif";// --------------------------------fog----------------------------
		else
			return "question.gif";
	}
function setmiddle(c)
	{
		if (!((c>= 23 && c <= 25)||(c>=31 && c <= 34)||c==36||c==0||c==3200||(c >= 19 && c <= 22)))
			return "cloud.gif";
		else
			return "none.gif";
	}
function setprecip(c)
	{
		if ((c>=37&&c<=40)||c==47)
			return "scatteredthunder.gif";
		else if (c==3||c==4||c==45)
			return "severethunder.gif";
		else if (c==9)
			return "lightrain.gif";
		else if (c==11||c==12)
			return "heavyrain.gif";
		else if (c==17||c==35)
			return "hail.gif";
		else if (c==15||c==16||(c>=41&&c<=43)||c==46)
			return "heavysnow.gif";
		else if (c==13||c==14)
			return "lightsnow.gif";
		else if ((c>=5&&c<=8)||c==10||c==18)
			return "mix.gif";
		else
			return "none.gif";
	}
/*! simpleWeather v3.0.2 - http://simpleweatherjs.com */
!function(e){"use strict";function t(e,t){return Math.round("f"===e?5/9*(t-32):1.8*t+32)}e.extend({simpleWeather:function(i){i=e.extend({location:"",woeid:"",unit:"f",success:function(){},error:function(){}},i);var o=new Date,n="https://query.yahooapis.com/v1/public/yql?format=json&rnd="+o.getFullYear()+o.getMonth()+o.getDay()+o.getHours()+"&diagnostics=true&callback=?&q=";if(""!==i.location)n+='select * from weather.forecast where woeid in (select woeid from geo.placefinder where text="'+i.location+'" and gflags="R" limit 1) and u="'+i.unit+'"';else{if(""===i.woeid)return i.error({message:"Could not retrieve weather due to an invalid location."}),!1;n+="select * from weather.forecast where woeid="+i.woeid+' and u="'+i.unit+'"'}return e.getJSON(encodeURI(n),function(e){if(null!==e&&null!==e.query&&null!==e.query.results&&"Yahoo! Weather Error"!==e.query.results.channel.description){var o,n=e.query.results.channel,r={},s=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],a="https://s.yimg.com/os/mit/media/m/weather/images/icons/l/44d-100567.png";r.title=n.item.title,r.temp=n.item.condition.temp,r.code=n.item.condition.code,r.todayCode=n.item.forecast[0].code,r.currently=n.item.condition.text,r.high=n.item.forecast[0].high,r.low=n.item.forecast[0].low,r.text=n.item.forecast[0].text,r.humidity=n.atmosphere.humidity,r.pressure=n.atmosphere.pressure,r.rising=n.atmosphere.rising,r.visibility=n.atmosphere.visibility,r.sunrise=n.astronomy.sunrise,r.sunset=n.astronomy.sunset,r.description=n.item.description,r.city=n.location.city,r.country=n.location.country,r.region=n.location.region,r.updated=n.item.pubDate,r.link=n.item.link,r.units={temp:n.units.temperature,distance:n.units.distance,pressure:n.units.pressure,speed:n.units.speed},r.wind={chill:n.wind.chill,direction:s[Math.round(n.wind.direction/22.5)],speed:n.wind.speed},r.heatindex=n.item.condition.temp<80&&n.atmosphere.humidity<40?-42.379+2.04901523*n.item.condition.temp+10.14333127*n.atmosphere.humidity-.22475541*n.item.condition.temp*n.atmosphere.humidity-6.83783*Math.pow(10,-3)*Math.pow(n.item.condition.temp,2)-5.481717*Math.pow(10,-2)*Math.pow(n.atmosphere.humidity,2)+1.22874*Math.pow(10,-3)*Math.pow(n.item.condition.temp,2)*n.atmosphere.humidity+8.5282*Math.pow(10,-4)*n.item.condition.temp*Math.pow(n.atmosphere.humidity,2)-1.99*Math.pow(10,-6)*Math.pow(n.item.condition.temp,2)*Math.pow(n.atmosphere.humidity,2):n.item.condition.temp,"3200"==n.item.condition.code?(r.thumbnail=a,r.image=a):(r.thumbnail="https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/"+n.item.condition.code+"ds.png",r.image="https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/"+n.item.condition.code+"d.png"),r.alt={temp:t(i.unit,n.item.condition.temp),high:t(i.unit,n.item.forecast[0].high),low:t(i.unit,n.item.forecast[0].low)},r.alt.unit="f"===i.unit?"c":"f",r.forecast=[];for(var m=0;m<n.item.forecast.length;m++)o=n.item.forecast[m],o.alt={high:t(i.unit,n.item.forecast[m].high),low:t(i.unit,n.item.forecast[m].low)},"3200"==n.item.forecast[m].code?(o.thumbnail=a,o.image=a):(o.thumbnail="https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/"+n.item.forecast[m].code+"ds.png",o.image="https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/"+n.item.forecast[m].code+"d.png"),r.forecast.push(o);i.success(r)}else i.error({message:"There was an error retrieving the latest weather information. Please try again.",error:e.query.results.channel.item.title})}),this}})}(jQuery);