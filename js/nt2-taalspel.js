$(document).on('pagebeforeshow','#page1' ,function(e,data){
//Dit deel geldt voor het deel Eenvoudig > Werkwoorden van het menu.
   $(document).on('click', '#eenvoudig-click',function(e) {
        var words = ['hebben', 'zijn', 'gaan', 'doen', 'luisteren', 'wonen', 'herhalen','maken']
        var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 'img/wijjulliezij.png', 'img/joker.png']
        var tijdImgs = ['img/PRF.png', 'img/PRE.png', 'img/IMP.png']
        var zinImgs = ['img/H.png', 'img/HI.png', 'img/IV.png', 'img/V.png']
        var randomWord = words[Math.floor(Math.random()*words.length)];
        var randomDobbel_1 = pvnImgs[Math.floor(Math.random()*pvnImgs.length)];
        var randomDobbel_2 = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];
        var randomDobbel_3 = zinImgs[Math.floor(Math.random()*zinImgs.length)];

        $('#kaart-tekst-ev').text(randomWord);
        $('#dobbel-1-ev').attr('src', randomDobbel_1);
        $('#dobbel-2-ev').attr('src', randomDobbel_2);
        $('#dobbel-3-ev').attr('src', randomDobbel_3);
    });

    $(document).on('click', '#eenvoudig-new-click',function(e) {
        var words = ['hebben', 'zijn', 'gaan', 'doen', 'luisteren', 'wonen', 'herhalen','maken']
        var randomWord = words[Math.floor(Math.random()*words.length)];

        $('#kaart-tekst-ev').text(randomWord);
    });

    $(document).on('click', '#eenvoudig-roll-click',function(e) {
        var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 'img/wijjulliezij.png', 'img/joker.png']
        var tijdImgs = ['img/PRF.png', 'img/PRE.png', 'img/IMP.png']
        var zinImgs = ['img/H.png', 'img/HI.png', 'img/IV.png', 'img/V.png']
        var randomDobbel_1 = pvnImgs[Math.floor(Math.random()*pvnImgs.length)];
        var randomDobbel_2 = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];
        var randomDobbel_3 = zinImgs[Math.floor(Math.random()*zinImgs.length)];

        $('#dobbel-1-ev').attr('src', randomDobbel_1);
        $('#dobbel-2-ev').attr('src', randomDobbel_2);
        $('#dobbel-3-ev').attr('src', randomDobbel_3);
    });

// Dit deel gaat over het menudeel Eenvoudig > Conjuncties.
    $(document).on('click', '#basis-click',function(e) {
        var classState = $('#kaart-basis').attr('class')
        $('#kaart-basis').removeClass(classState).addClass('on-card');

        var words = ['maken', 'doen', 'vergeten', 'hebben', 'zijn']
        var basisImgs = ['img/Omdat.png', 'img/Hoewel.png', 'img/Als.png', 'img/Toen.png', 'img/Sinds.png', 'img/Terwijl.png']
        var randomWord = words[Math.floor(Math.random()*words.length)];
        var randomDobbel = basisImgs[Math.floor(Math.random()*basisImgs.length)];

        $('#kaart-tekst-basis').text(randomWord);
        $('#dobbel-basis').attr('src', randomDobbel);
    });

    $(document).on('click', '#basis-new-click',function(e) {
        var classState = $('#kaart-basis').attr('class')
        if (classState == 'on-card') {
            var words = ['maken', 'doen', 'vergeten', 'hebben', 'zijn']
            var randomWord = words[Math.floor(Math.random()*words.length)];
            $('#kaart-tekst-basis').text(randomWord);
        }
        else {
            $('#kaart-basis').removeClass('off-card').addClass('on-card');
            var words = ['maken', 'doen', 'vergeten', 'hebben', 'zijn']
            var randomWord = words[Math.floor(Math.random()*words.length)];
            $('#kaart-tekst-basis').text(randomWord);
        }
    });

    $(document).on('click', '#basis-roll-click',function(e) {
        var basisImgs = ['img/Omdat.png', 'img/Hoewel.png', 'img/Als.png', 'img/Toen.png', 'img/Sinds.png', 'img/Terwijl.png']
        var randomDobbel = basisImgs[Math.floor(Math.random()*basisImgs.length)];

        $('#dobbel-basis').attr('src', randomDobbel);
    });

    $(document).on('click', '#basis-card-click',function(e) {
        var classState = $('#kaart-basis').attr('class')
        if (classState == 'on-card') {
            $('#kaart-basis').removeClass('on-card').addClass('off-card');
        }
        else {
            $('#kaart-basis').removeClass('off-card').addClass('on-card');
        }
    });

// Dit deel gaat over het menudeel Gevorderden > Conjuncties.
    $(document).on('click', '#conjuncties-click',function(e) {
        var words = ['maken', 'doen', 'vergeten', 'hebben', 'zijn']
        var extraImgs = ['img/Omdat.png', 'img/Hoewel.png', 'img/Als.png', 'img/Toen.png', 'img/Sinds.png', 'img/Terwijl.png', 'img/Nadat.png', 'img/Voordat.png', 'img/Doordat.png']
        var randomWord = words[Math.floor(Math.random()*words.length)];
        var randomDobbel = extraImgs[Math.floor(Math.random()*extraImgs.length)];

        $('#kaart-tekst-conjuncties').text(randomWord);
        $('#dobbel-extra').attr('src', randomDobbel);
    });

    $(document).on('click', '#conjuncties-new-click',function(e) {
        var words = ['maken', 'doen', 'vergeten', 'hebben', 'zijn']
        var randomWord = words[Math.floor(Math.random()*words.length)];

        $('#kaart-tekst-conjuncties').text(randomWord);
    });

    $(document).on('click', '#conjuncties-roll-click',function(e) {
        var extraImgs = ['img/Omdat.png', 'img/Hoewel.png', 'img/Als.png', 'img/Toen.png', 'img/Sinds.png', 'img/Terwijl.png', 'img/Nadat.png', 'img/Voordat.png', 'img/Doordat.png']
        var randomDobbel = extraImgs[Math.floor(Math.random()*extraImgs.length)];

        $('#dobbel-extra').attr('src', randomDobbel);
    });

// Dit deel gaat over het menudeel Gevorderden > Separabele werkwoorden.
    $(document).on('click', '#separables-click',function(e) {
        var words = ['uitleggen', 'voorbereiden', 'kennismaken', 'schoonmaken', 'opzoeken']
        var modeImgs = ['img/PV.png', 'img/INF.png', 'img/PAR.png']
        var randomWord = words[Math.floor(Math.random()*words.length)];
        var randomDobbel = modeImgs[Math.floor(Math.random()*modeImgs.length)];

        $('#kaart-tekst-separables').text(randomWord);
        $('#dobbel-separables').attr('src', randomDobbel);
    });

    $(document).on('click', '#separables-new-click',function(e) {
        var words = ['uitleggen', 'voorbereiden', 'kennismaken', 'schoonmaken', 'opzoeken']
        var randomWord = words[Math.floor(Math.random()*words.length)];

        $('#kaart-tekst-separables').text(randomWord);
    });

    $(document).on('click', '#separables-roll-click',function(e) {
        var modeImgs = ['img/PV.png', 'img/INF.png', 'img/PAR.png']
        var randomDobbel = modeImgs[Math.floor(Math.random()*modeImgs.length)];

        $('#dobbel-separables').attr('src', randomDobbel);
    });


// Dit deel gaat over het menudeel Thema's > Seizoenen..
    $(document).on('click', '#season-click',function(e) {
        var words = ['de paraplu', 'het terrasje', 'warm', 'de winterjas', 'buiten']
        var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 'img/wijjulliezij.png', 'img/joker.png']
        var tijdImgs = ['img/PRF.png', 'img/PRE.png', 'img/IMP.png']
        var zinImgs = ['img/H.png', 'img/HI.png', 'img/IV.png', 'img/V.png']
        var randomWord = words[Math.floor(Math.random()*words.length)];
        var randomDobbel_1 = pvnImgs[Math.floor(Math.random()*pvnImgs.length)];
        var randomDobbel_2 = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];
        var randomDobbel_3 = zinImgs[Math.floor(Math.random()*zinImgs.length)];

        $('#kaart-tekst-season').text(randomWord);
        $('#dobbel-1-season').attr('src', randomDobbel_1);
        $('#dobbel-2-season').attr('src', randomDobbel_2);
        $('#dobbel-3-season').attr('src', randomDobbel_3);
    });

    $(document).on('click', '#season-new-click',function(e) {
        var words = ['de paraplu', 'het terrasje', 'warm', 'de winterjas', 'buiten']
        var randomWord = words[Math.floor(Math.random()*words.length)];

        $('#kaart-tekst-season').text(randomWord);
    });

    $(document).on('click', '#season-roll-click',function(e) {
        var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 'img/wijjulliezij.png', 'img/joker.png']
        var tijdImgs = ['img/PRF.png', 'img/PRE.png', 'img/IMP.png']
        var zinImgs = ['img/H.png', 'img/HI.png', 'img/IV.png', 'img/V.png']
        var randomDobbel_1 = pvnImgs[Math.floor(Math.random()*pvnImgs.length)];
        var randomDobbel_2 = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];
        var randomDobbel_3 = zinImgs[Math.floor(Math.random()*zinImgs.length)];

        $('#dobbel-1-season').attr('src', randomDobbel_1);
        $('#dobbel-2-season').attr('src', randomDobbel_2);
        $('#dobbel-3-season').attr('src', randomDobbel_3);
    });

// Dit deel gaat over het menudeel Thema's > Wetenschap.
    $(document).on('click', '#science-click',function(e) {
        var words = ['het onderzoek', 'de oorzaak', 'de grafiek', 'afnemen', 'blijken']
        var tijdImgs = ['img/PRF.png', 'img/PRE.png', 'img/IMP.png']
        var randomWord = words[Math.floor(Math.random()*words.length)];
        var randomDobbel = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];

        $('#kaart-tekst-science').text(randomWord);
        $('#dobbel-science').attr('src', randomDobbel);
    });

    $(document).on('click', '#science-new-click',function(e) {
        var words = ['het onderzoek', 'de oorzaak', 'de grafiek', 'afnemen', 'blijken']
        var randomWord = words[Math.floor(Math.random()*words.length)];

        $('#kaart-tekst-science').text(randomWord);
    });

    $(document).on('click', '#science-roll-click',function(e) {
        var tijdImgs = ['img/PRF.png', 'img/PRE.png', 'img/IMP.png']
        var randomDobbel = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];

        $('#dobbel-science').attr('src', randomDobbel);
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




