function icon(condition){
  var day = "#82aeff"
  var night = "#4064a2"
  switch(condition){
    case "chanceflurries":
    case "chancesnow":
    case "flurries":
    case "snow":
      $("body").css("background-color", day);
      return "<img src='/localweather/Icons/snow.png'>";
    case "nt_chanceflurries":
    case "nt_chancesnow":
    case "nt_flurries":
    case "nt_snow":
      $("body").css("background-color", night);
      return "<img src='/localweather/Icons/snow.png'>";
    case "chancerain":
    case "rain":
      $("body").css("background-color", day);
      return "<img src='/localweather/Icons/rain.png'>";
    case "nt_chancerain":
    case "nt_rain":
      $("body").css("background-color", night);
      return "<img src='/localweather/Icons/rain.png'>";
    case "chancesleet":
    case "sleet":
      $("body").css("background-color", day);
      return "<img src='/localweather/Icons/sleet.png'>";
    case "nt_chancesleet":
    case "nt_sleet":
      $("body").css("background-color", night);
      return "<img src='/localweather/Icons/sleet.png'>";
    case "chancetstorms":
    case "tstorms":
      $("body").css("background-color", day);
      return "<img src='/localweather/Icons/tstorms.png'>";
    case "nt_chancetstorms":
    case "nt_tstorms":
      $("body").css("background-color", night);
      return "<img src='/localweather/Icons/tstorms.png'>";
    case "clear":
    case "sunny":
      $("body").css("background-color", day);
      return "<img src='/localweather/Icons/clear.png'>";
    case "cloudy":
      $("body").css("background-color", day);
      return "<img src='/localweather/Icons/cloudy.png'>";
    case "nt_cloudy":
      $("body").css("background-color", night);
      return "<img src='/localweather/Icons/cloudy.png'>";
    case "fog":
    case "hazy":
      $("body").css("background-color","#6fa2ff");
      return "<img src='/localweather/Icons/fog.png'>";
    case "nt_fog":
    case "nt_hazy":
      $("body").css("background-color","#4064a2");
      return "<img src='/localweather/Icons/fog.png'>";
    case "mostlycloudy":
    case "partlycloudy":
    case "mostlysunny":
    case "partlysunny":
      $("body").css("background-color","#6fa2ff");
      return "<img src='/localweather/Icons/partlycloudy.png'>";
    case "nt_clear":
    case "nt_sunny":
      $("body").css("background-color","#4064a2");
      return "<img src='/Icons/ntclear.png'>";
    case "nt_mostlycloudy":
    case "nt_mostlysunny":
    case "nt_partlycloudy":
    case "nt_partlysunny":
      $("body").css("background-color","#4064a2");
      return "<img src='/localweather/Icons/ntpartlycloudy.png'>";
  }
}


function success(pos){
  $.getJSON("https://api.wunderground.com/api/e85066391497416f/conditions/forecast/alert/q/" + pos.coords.latitude + "," + pos.coords.longitude + ".json",function(loc){
    $(".city").html(loc.current_observation.observation_location.full);
    $(".temp").html(loc.current_observation.temp_f + " &degF");
    $(".weather-icon").html(icon(loc.current_observation.icon_url.match(/\w*.gif/g).toString().split(".")[0]));
    $(".weather").html(loc.current_observation.weather);
    $(".btn-group").show();
    $(".footer").show();
    $(".degC").click(function(){
      $(".temp").html(loc.current_observation.temp_c + " &degC");
    });
    $(".degF").click(function(){
      $(".temp").html(loc.current_observation.temp_f + " &degF");
    });
  });

}

function fail(){
  alert("Uh oh, you seem to have accessed the site over an unsecure connection. Please change the url to https to continue!")
}

$(document).ready(function(){
  $(".footer").hide();
  $(".btn-group").hide();
  navigator.geolocation.getCurrentPosition(success, fail);
});
