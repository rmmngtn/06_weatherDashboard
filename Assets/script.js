$(document).ready(function () {

    $("#searchBtn").on("click", function () {

        var cityName = $("#input").val();
        // api call to get jumbotron information listed 

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
                $(".city").html("<h1>" + response.name + "</h1>");
                $(".weatherDesc").html("<h3>" + response.weather[0].main + "</h3>");
                // with conversion to F and 2 decimal points
                $(".temp").html("<h4> Temperature: " + (((response.main.temp - 273.15) * 1.80 + 32).toFixed(2)) + "</h4>");
                $(".humidity").html("<h4> Humidity: " + response.main.humidity + "</h4>");
                $(".wind-speed").html("<h4> Wind Speed: " + response.wind.speed + "</h4>");

                //    need additional API for UV index
            });

        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=31581a27df415fae48da576f8172e0c6"

        // Performing our 5-Day AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                // Log the queryURL
                console.log(queryURL);

                // Log the resulting object
                console.log(response);


            
            });



            // Transfer content to HTML
        //    $(".city").html("<h1>" + response.name + "</h1>");
        //    $(".weatherDesc").html("<h3>" + response.weather[0].main + "</h3>");
        //     // with conversion to F and 2 decimal points
        //    $(".temp").html("<h4> Temperature: "+ (((response.main.temp - 273.15) * 1.80 + 32).toFixed(2)) + "</h4>");
        //    $(".humidity").html("<h4> Humidity: " + response.main.humidity + "</h4>");
        //    $(".wind-speed").html("<h4> Wind Speed: " + response.wind.speed + "</h4>");





    });
}); 

    
