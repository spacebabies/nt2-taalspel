//$().ready(function() {
//            alert("hello world");
//        });

//$(document).on('pagebeforechange', '#page1', function() {
//	alert("hello world!";)
//});

$(document).on('pagebeforeshow','#page1' ,function(e,data){    
    $(document).on('click', '#eenvoudig-click',function(e) {
    	var words = ['hebben', 'zijn', 'gaan', 'doen', 'luisteren', 'wonen', 'herhalen', 'maken']
    	var randomword = words[Math.floor(Math.random()*words.length)];
    	$('#kaart-tekst').text(randomword);
    });    
});

