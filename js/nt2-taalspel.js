//Dit deel geldt voor het deel Eenvoudige zinnen van het menu.
$(document).on('pagebeforeshow','#page1' ,function(e,data){
    $(document).on('click', '#eenvoudig-click',function(e) {
        var currentOption = $('#cube').attr('class');
        var options = ['show-front','show-back', 'show-left', 'show-right', 'show-top', 'show-bottom'];
        var randomOption = options[Math.floor(Math.random()*options.length)];
        $('#cube').removeClass(currentOption).addClass(randomOption);

        var words = ['hebben', 'zijn', 'gaan', 'doen', 'luisteren', 'wonen', 'herhalen', 'maken']
        var randomWord = words[Math.floor(Math.random()*words.length)];
        $('#kaart-tekst-ev').text(randomWord);
    });

    $(document).on('click', '#eenvoudig-new-click',function(e) {
        var words = ['hebben', 'zijn', 'gaan', 'doen', 'luisteren', 'wonen', 'herhalen', 'maken']
        var randomWord = words[Math.floor(Math.random()*words.length)];
        $('#kaart-tekst-ev').text(randomWord);
    });

    $(document).on('click', '#eenvoudig-roll-click',function(e) {
        $('#cube').each(function(){
            var currentOption = $(this).attr('class');
            var options = ['show-front','show-back', 'show-left', 'show-right', 'show-top', 'show-bottom'];
            var randomOption = options[Math.floor(Math.random()*options.length)];
            $(this).removeClass(currentOption).addClass(randomOption);
        });
    });
});
// // Dit deel gaat over het menudeel Gevorderden > Werkwoorden.
//     $(document).on('click', '#ww-click',function(e) {
//         var words = ['vinden','weten','durven','streven','veranderen']
//         var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 'img/wijjulliezij.png', 'img/joker.png']
//         var tijdImgs = ['img/PRF.png', 'img/PRE.png', 'img/IMP.png']
//         var zinImgs = ['img/H.png', 'img/HI.png', 'img/IV.png', 'img/V.png']
//         var randomWord = words[Math.floor(Math.random()*words.length)];
//         var randomDobbel_1 = pvnImgs[Math.floor(Math.random()*pvnImgs.length)];
//         var randomDobbel_2 = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];
//         var randomDobbel_3 = zinImgs[Math.floor(Math.random()*zinImgs.length)];

//         $('#kaart-tekst-ww').text(randomWord);
//         $('#dobbel-1-ww').attr('src', randomDobbel_1);
//         $('#dobbel-2-ww').attr('src', randomDobbel_2);
//         $('#dobbel-3-ww').attr('src', randomDobbel_3);
//         $('#dobbel-4-ww').attr('style', "width: 60px; height: 60px; opacity: 0.0");
//     });
//     $(document).on('click', '#ww-new-click',function(e) {
//         var words = ['vinden','weten','durven','streven','veranderen']
//         var voegwoordImgs = ['img/en.png', 'img/want.png', 'img/omdat.png', 'img/maar.png', 'img/hoewel.png']
//         var randomWord = words[Math.floor(Math.random()*words.length)];
//         var randomDobbel_4 = voegwoordImgs[Math.floor(Math.random()*voegwoordImgs.length)];

//         $('#kaart-tekst-ww').text(randomWord);
//         $('#dobbel-4-ww').attr('src', randomDobbel_4);
//         $('#dobbel-4-ww').attr('style', "width: 60px; height: 60px;");
//     });
//     $(document).on('click', '#ww-roll-click',function(e) {
//         var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 'img/wijjulliezij.png', 'img/joker.png']
//         var tijdImgs = ['img/PRF.png', 'img/PRE.png', 'img/IMP.png']
//         var zinImgs = ['img/H.png', 'img/HI.png', 'img/IV.png', 'img/V.png']
//         var voegwoordImgs = ['img/en.png', 'img/want.png', 'img/omdat.png', 'img/maar.png', 'img/hoewel.png']
//         var randomDobbel_1 = pvnImgs[Math.floor(Math.random()*pvnImgs.length)];
//         var randomDobbel_2 = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];
//         var randomDobbel_3 = zinImgs[Math.floor(Math.random()*zinImgs.length)];
//         var randomDobbel_4 = voegwoordImgs[Math.floor(Math.random()*voegwoordImgs.length)];

//         $('#dobbel-1-ww').attr('src', randomDobbel_1);
//         $('#dobbel-2-ww').attr('src', randomDobbel_2);
//         $('#dobbel-3-ww').attr('src', randomDobbel_3);
//         $('#dobbel-4-ww').attr('src', randomDobbel_4);
//         $('#dobbel-4-ww').attr('style', "width: 60px; height: 60px;");
//     });
// });
// // Dit deel van het menu is voor Gevorderden > Conjuncties.




