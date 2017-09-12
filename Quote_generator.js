$(document).ready(function(){
function randomChoice(){
	var randomNumber = Math.floor(Math.random() * 100);
	return randomNumber;
}

$(".clicky").on("click", function(e){
	
	$.getJSON("https://talaikis.com/api/quotes/", function(object){
		var talk = object[randomChoice()];
		$('#write').html("<p>- "+ talk.quote + " -</p>" + "<br><em>" + talk.author + "</em>");
		$('#tweet').attr("href","https://twitter.com/intent/tweet?text=" + talk.quote + " - " + talk.author);
	
	});
	
});

});

