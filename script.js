 var key = "&apikey=vUleXwKENYlVeKyufEAPTl3QSJV7UvH1"
 var search = $("#search-term").val().trim();
 var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q" + search + key;


      $("#submit").on("click", function(){
        event.preventDefault();

        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
      
 
    })

    });