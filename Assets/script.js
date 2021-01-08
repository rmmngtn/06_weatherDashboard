$(document).ready(function () {

    $("#searchBtn").on("click", function () {

        var cityName = $("#input").val();
        // api call to get jumbotron information listed 

        let date = new Date();


        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=31581a27df415fae48da576f8172e0c6";

        // Performing our AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                // Log the queryURL
                console.log(queryURL);

                // Log the resulting object
                console.log(response);

                $("#currentDay").text(moment().format("dddd, MMMM Do "));

                // Transfer content to HTML
                $(".city").html("<h1>" + response.name  + "</h1>");
                $(".icon").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
                $(".weatherDesc").html("<h3>" + response.weather[0].main + "</h3>");
                // with conversion to F and 2 decimal points
                $(".temp").html("<h4> Temperature: " + (((response.main.temp - 273.15) * 1.80 + 32).toFixed(2)) + "</h4>");
                $(".humidity").html("<h4> Humidity: " + response.main.humidity + "</h4>");
                $(".wind-speed").html("<h4> Wind Speed: " + response.wind.speed + "</h4>");

                //    need additional API for UV index
            });

        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=31581a27df415fae48da576f8172e0c6"

        var currentHour = moment().hours();
        console.log(currentHour);

        // Performing our 5-Day AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                // Log the queryURL
                console.log(queryURL);

                let result = response.list;

                // Log the resulting object
                console.log(result);

            // algorithm to iterate through array and append cards
                for (let i = 0; i < result.length; i++) {
                        
                    let day = Number(result[i].dt_txt.split('-')[2].split(' ')[0]);
                    let hour = result[i].dt_txt.split('-')[2].split(' ')[1];
                    
              
                    if(result[i].dt_txt.indexOf("12:00:00") !== -1){
                      
                      // get the temperature and convert to fahrenheit 
                      let temp = ((result[i].main.temp - 273.15) * 1.80 + 32).toFixed(2);
                      
                      console.log(temp);
                        
                      var card = $("<div>").addClass("card");
                      var cardBody = $("<div>").addClass("card-body p-3 forecastBody")
                      var cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
                      var icon = $("<img>").attr("src", "https://openweathermap.org/img/w/" + result[i].weather[0].icon + ".png")
                      var temperature = $("<p>").addClass("card-text forecastTemp").text("Temperature: " + temp);
                      var humidity = $("<p>").addClass("card-text forecastHumidity").text("Humidity: " + result[i].main.humidity + "%");
                    
              
                    // adds cards to forecast deck 
              
                      cardBody.append(cityDate, icon, temperature, humidity);
                      card.append(cardBody);
                      $(".card-deck").append(card);
        
        
                    };
                };

            }); 

            // creates city buttons in sidebar with click of search button 
            var cityBtn = $("<li>").addClass("list-group-item").text(cityName);
            $(".city-list").prepend(cityBtn);
            console.log(cityName);

            localStorage.setItem("city", cityName); 
            



     }); 
}); 



         
       