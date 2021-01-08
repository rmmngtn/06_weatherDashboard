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
                $(".city").html("<h1>" + response.name  + "</h1>");
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

                // Log the resulting object
                console.log(response);

                var timeBlock = document.querySelectorAll(".time-block");
    console.log(timeBlock.length);

    // forEach loop over hour blocks
    $(".time-block").each(function () {
        // get value from html for current hour 
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockHour);


        // change div timeblock colors depending on time of day
        // check if currentHour > or < blockHour
        // add css classes according to time
        if (currentHour > blockHour) {
            // testing that my loop is working
            console.log("div is grey");
            $(this).addClass("past");

        }
        else if (currentHour < blockHour) {
            // testing that my loop is working
            console.log("div is green");
            $(this).addClass("future");
        }

        else {
            // testing that my loop is working
            console.log("div is red");
            $(this).addClass("present");

        }

    });

            
            });



         





    });
}); 

    
