$(document).on('pagebeforeshow','#page1' ,function(e,data){    
    $(document).on('click', '#eenvoudig-click',function(e) {
    	var words = ['hebben', 'zijn', 'gaan', 'doen', 'luisteren', 'wonen', 'herhalen', 'maken']
    	var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 'img/wijjulliezij.png', 'img/joker.png']
    	var tijdImgs = ['img/PRF.png', 'img/PRE.png', 'img/IMP.png']
    	var zinImgs = ['img/H.png', 'img/HI.png', 'img/IV.png', 'img/V.png']

    	var randomWord = words[Math.floor(Math.random()*words.length)];
    	var randomDobbel_1 = pvnImgs[Math.floor(Math.random()*pvnImgs.length)];
    	var randomDobbel_2 = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];
    	var randomDobbel_3 = zinImgs[Math.floor(Math.random()*zinImgs.length)];
    	$('#kaart-tekst').text(randomWord);
    	$('#dobbel-1').attr('src', randomDobbel_1);
    	$('#dobbel-2').attr('src', randomDobbel_2);
    	$('#dobbel-3').attr('src', randomDobbel_3);
    });
    $(document).on('click', '#eenvoudig-new-click',function(e) {
    	var words = ['hebben', 'zijn', 'gaan', 'doen', 'luisteren', 'wonen', 'herhalen', 'maken']
    	var randomWord = words[Math.floor(Math.random()*words.length)];
    	$('#kaart-tekst').text(randomWord);
    });
    $(document).on('click', '#eenvoudig-roll-click',function(e) {
    	var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 'img/wijjulliezij.png', 'img/joker.png']
    	var tijdImgs = ['img/PRF.png', 'img/PRE.png', 'img/IMP.png']
    	var zinImgs = ['img/H.png', 'img/HI.png', 'img/IV.png', 'img/V.png']

    	var randomDobbel_1 = pvnImgs[Math.floor(Math.random()*pvnImgs.length)];
    	var randomDobbel_2 = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];
    	var randomDobbel_3 = zinImgs[Math.floor(Math.random()*zinImgs.length)];
    	$('#dobbel-1').attr('src', randomDobbel_1);
    	$('#dobbel-2').attr('src', randomDobbel_2);
    	$('#dobbel-3').attr('src', randomDobbel_3);
    });
});
