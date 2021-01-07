$(document).ready(function () {

    

    $("#searchBtn").on("click", function () {
        var cityBtn = document.createElement("button");
        var input = document.querySelector("input").value;

        cityBtn.innerText = input;
        document.getElementById("city-list-here").appendChild(cityBtn);
        console.log(input);



    })



    // $("button").on("click", function () {
        // In this case, the "this" keyword refers to the button that was clicked
        

        

        // Constructing a URL to search Giphy for the name of the person who said the quote
//         var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=31581a27df415fae48da576f8172e0c6";

//         // Performing our AJAX GET request
//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         })
//             // After the data comes back from the API
//             .then(function (response) {
//                 // Storing an array of results in the results variable
//                 var results = response.data;

//                 // Looping over every result item
//                 for (var i = 0; i < results.length; i++) {

//                     // Only taking action if the photo has an appropriate rating
//                     if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
//                         // Creating a div for the gif
//                         var cityDiv = $("<div>");

//                         // Storing the result item's rating
//                         var rating = results[i].rating;

//                         // Creating a paragraph tag with the result item's rating
//                         var p = $("<p>").text("Rating: " + rating);

//                         // Creating an image tag
//                         var personImage = $("<img>");

//                         // Giving the image tag an src attribute of a proprty pulled off the
//                         // result item
//                         personImage.attr("src", results[i].images.fixed_height.url);

//                         // Appending the paragraph and personImage we created to the "gifDiv" div we created
//                         gifDiv.append(p);
//                         gifDiv.append(personImage);

//                         // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//                         $("#gifs-appear-here").prepend(gifDiv);
//                     }
//                 }
//             });
});


