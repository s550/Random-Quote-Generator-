$(document).ready(function(){
function randomChoice(){
	var randomNumber = Math.floor(Math.random() * 100);
	return randomNumber;
}
// To get everything working I had to abandon the fancy Twitter button and make my own button to play nice with my code. 
$(".clicky").on("click", function(e){
	// e.preventDefault();
	$.getJSON("https://talaikis.com/api/quotes/", function(object){
		var talk = object[randomChoice()];
		$('#write').html("<p>- "+ talk.quote + " -</p>" + "<br><em>" + talk.author + "</em>");
		$('#tweet').attr("href","https://twitter.com/intent/tweet?text=" + talk.quote + " - " + talk.author);
		// var go = $('#write').html();
		// $('#tweet').attr("href","https://twitter.com/intent/tweet?text=adfjsljlkjlkj" + go);

		// api is working perfectly and does provide random 100 quotes
		// next step is to make a randomizer fucntion like your color game and then use it to pick a random object quote and author
		// then you can build your site around the button and then implement a twitter posting of it. 
		// new step is to add back in the authors of the quotes and start designing my page. 
		// As you figured out in order to select a random object and "save it" you had to assign it to a variable.



		// $.each(quote, function(i, quotes){
		// 	$('#write').append('<p>' + quotes.content + '</p>' + '<br>' + "<em> '" +quotes.title + "' </em>");
		// });
		// To get to the information inside the object i needed to loop through it.
		// With a nested .each function and then using the parameter for that i was able to write out the content. 
		// $("#write").text(quote.content);
		// console.log(quote);
		// I have to make sure the quote selection is random
		// I can use ajax or json it doesnt matter but It has to randomize on button press.
		// have to find a way to seperate the posts into something legable that just contains the quote.
		// that may mean figuring out what the key and value pairs are. 
// you  may be able to write a random number function if you can find the objects name so you can do obj.length use a random number function and make calls that select a random number in the object array. 
	});
	
// first thing is to make the href change then work on turning clicky into a class and apply the json call to both the twitter button and the quote button

});
// This is space outside of the main quote function
// var go = $('#write').html();
// $("#tweet").on("click",function(){
// 	$('#tweet').attr("href","https://twitter.com/intent/tweet?text= " + go);
// });

});

// tweet http can be used without an actual twitter button  