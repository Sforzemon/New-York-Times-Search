 var key = "key=vUleXwKENYlVeKyufEAPTl3QSJV7UvH1"
 var search = "";
 var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q" + search + key;

 $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
    
      $("#submit").on("click", function(){

      $("seach-term").text();
      $("start-year")
      $("end-year")
    })

    });