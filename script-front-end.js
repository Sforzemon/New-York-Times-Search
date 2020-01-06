$(document).on("click", "#submit", articleSearch)
$(document).on("click", "#reset", articleClear)

var searchQuery = "";
var articleCount = 0;
var startYear = 0;
var endYear = 0;

function articleSearch(event) {
    event.preventDefault();
    var searchQuery = $("#search-term").val();
    var articleCount = $("#article-num").val();
    console.log("find me news about " + searchQuery + " I want " + articleCount + " articles")

}
function articleClear(event) {
    event.preventDefault();
    console.log("delete that shit")
}