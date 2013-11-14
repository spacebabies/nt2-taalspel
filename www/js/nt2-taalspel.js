$(document).on('pagebeforeshow','#page1' ,function(e,data){
//Dit deel geldt voor het deel Eenvoudig > Werkwoorden van het menu.
   $(document).on('click', '#eenvoudig-click',function(e) {
        var words = ['hebben', 'zijn', 'gaan', 'doen', 'luisteren', 'wonen', 'herhalen','maken']
        var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 'img/wijjulliezij.png', 'img/joker.png']
        var tijdImgs = ['img/prf.png', 'img/PRE.png', 'img/IMP.png']
        var zinImgs = ['img/H.png', 'img/hi.png', 'img/IV.png', 'img/V.png']
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
        var tijdImgs = ['img/prf.png', 'img/PRE.png', 'img/IMP.png']
        var zinImgs = ['img/H.png', 'img/hi.png', 'img/IV.png', 'img/V.png']
        var randomDobbel_1 = pvnImgs[Math.floor(Math.random()*pvnImgs.length)];
        var randomDobbel_2 = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];
        var randomDobbel_3 = zinImgs[Math.floor(Math.random()*zinImgs.length)];

        $('#dobbel-1-ev').attr('src', randomDobbel_1);
        $('#dobbel-2-ev').attr('src', randomDobbel_2);
        $('#dobbel-3-ev').attr('src', randomDobbel_3);
    });

    $(document).on('click', '#pvn-popup-ev-click',function(e) {
        var sideText = $('#dobbel-1-ev').attr('src')
        if (sideText == 'img/ik.png') {
            $('#pvn-popup').html("<p>Ik = een subject</p><p>Voorbeeldzinnen:<br />Ik ga naar huis.<br />Op donderdagavond doe ik een cursus Nederlands.<br />Omdat ik weinig geld heb, koop ik groenten op de markt</p>").popup("open");
        }
        else if (sideText == 'img/jij.png') {
            $('#pvn-popup').html("<p>Jij = een subject</p><p>Voorbeeldzinnen:<br />Jij hebt veel vrienden.<br />Ga jij mee boodschappen doen?<br />Wanneer kun jij me helpen?</p>").popup("open");
        }
        else if (sideText == 'img/hijzijhet.png') {
            $('#pvn-popup').html("<p>Hij/Zij/Het = een subject</p><p>Voorbeeldzinnen:<br />Hij begrijpt weinig woorden.<br />Kan zij goed zingen?<br />Ik blijf binnen, omdat het regent.<br />Het maakt niet uit.</p>").popup("open");
        }
        else if (sideText == 'img/u.png') {
            $('#pvn-popup').html("<p>U = een subject</p><p>Voorbeeldzinnen:<br />Kunt u mij helpen?<br />U houdt veel van klassieke muziek. <br />Terwijl u hier wacht, haal ik de formulieren.</p>").popup("open");
        }
        else if (sideText == 'img/wijjulliezij.png') {
            $('#pvn-popup').html("<p>Wij/Jullie/Zij = een subject</p><p>Voorbeeldzinnen:<br />Hoe lang wonen jullie al in Amsterdam?  <br />Sinds zij hier wonen, is de buurt veel gezelliger. </p>").popup("open");
        }
        else {
            $('#pvn-popup').html("<p>Joker betekent: kies zelf een subject</p><p>Voorbeeldzinnen:<br />Mijn broer werkt in een restaurant.<br />mijn broer = joker<br />Omdat de docent ziek is, gaat de les niet door.<br />de docent = joker</p>").popup("open");
        }
    });

    $(document).on('click', '#tijd-popup-ev-click',function(e) {
        var sideText = $('#dobbel-2-ev').attr('src')
        if (sideText == 'img/PRE.png') {
            $('#tijd-popup').html("<p>PRE = Presens<br />(tegenwoordige tijd)</p><p>Voorbeeldzinnen:<br />Ik luister naar de radio. <br />Waarom duurt alles zo lang?<br />De spelers wachten in de kleedkamer. </p>").popup("open");
        }
        else if (sideText == 'img/prf.png') {
            $('#tijd-popup').html("<p>PRF = Perfectum<br />(voltooide tijd)</p><p>Voorbeeldzinnen:<br />Ik heb al mijn huiswerk gemaakt.<br />De jongens zijn vroeg naar huis gegaan.<br />Ze hebben bijna niet geslapen.</p>").popup("open");
        }
        else {
            $('#tijd-popup').html("<p>IMP = Imperfectum<br />(verleden tijd)</p><p>Voorbeeldzinnen:<br />Een biertje in het café kostte 2,50.<br />Wilde jij vroeger docent worden?<br />Toen ik jou zag, was ik meteen verliefd. </p>").popup("open");
        }
    });

    $(document).on('click', '#zin-popup-ev-click',function(e) {
        var sideText = $('#dobbel-3-ev').attr('src')
        if (sideText == 'img/H.png') {
            $('#zin-popup').html("<p>H = Hoofdzin<br />S / PV (/ R / V)<br />Subject / persoonsvorm / rest / verba</p><p>Voorbeeldzinnen:<br />De tafel / staat / midden in de kamer.<br />Deze tas / is / met de hand / gemaakt.<br />De resultaten van het onderzoek / werden / niet / bekendgemaakt.</p>").popup("open");
        }
        else if (sideText == 'img/hi.png') {
            $('#zin-popup').html("<p>HI = Hoofdzin met inversie<br />I / PV / S (/ R / V)<br />iets anders / persoonsvorm / subject / rest / verba</p><p>Voorbeeldzinnen:<br />Morgen / eet / ik / bij mijn moeder.<br />Vroeger / aten / de mensen / veel aardappelen.<br />Daarom / heeft / het meisje / nog nooit / gerookt.</p>").popup("open");
        }
        else if (sideText == 'img/V.png') {
            $('#zin-popup').html("<p>V = Vraagzin ja/nee<br />PV / S (/ R / V)?<br />persoonsvorm / subject / rest / verba?</p><p>Voorbeeldzinnen:<br />Eet / jij / vlees? <br /> Willen / jullie / mee naar een concert van Prince? <br />Kon / zij / geen nieuw huis / kopen? </p>").popup("open");
        }
        else {
            $('#zin-popup').html("<p>IV = Informatievraag<br />I / PV / S (/ R / V)?<br />Interrogatief / persoonsvorm / subject / rest / verba?</p><p>Voorbeeldzinnen:<br />Waarom / heb / jij / me / gebeld? <br />Hoe lang / duurde / de voorstelling? <br />Wie / heb / je / uitgenodigd? <br />Wat / is / er / gebeurd?</p>").popup("open");
        }
    });
 
// Dit deel gaat over het menudeel Eenvoudig > Conjuncties.
    $(document).on('click', '#basis-click',function(e) {
        var classState = $('#kaart-basis').attr('class')
        $('#kaart-basis').removeClass(classState).addClass('on-card');

        var words = ['maken', 'doen', 'vergeten', 'hebben', 'zijn']
        var basisImgs = ['img/Omdat.png', 'img/Hoewel.png', 'img/Als.png', 'img/Toen.png', 'img/Sinds.png', 'img/Terwijl.png', 'img/joker.png']
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
        var basisImgs = ['img/Omdat.png', 'img/Hoewel.png', 'img/Als.png', 'img/Toen.png', 'img/Sinds.png', 'img/Terwijl.png','img/joker.png']
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

    $(document).on('click', '#basis-popup-click',function(e) {
        var sideText = $('#dobbel-basis').attr('src')
        if (sideText == 'img/Omdat.png') {
            $('#basis-popup').html("<p>Omdat maakt een bijzin<br />omdat = een reden</p><p>Voorbeeldzinnen:<br />Omdat het erg druk is op zaterdag doe ik boodschappen op vrijdag. <br />Je mag hier niet spelen omdat het gevaarlijk is.</p>").popup("open");
        }
        else if (sideText == 'img/Hoewel.png') {
            $('#basis-popup').html("<p>Hoewel maakt een bijzin<br />omdat = een niet-logische relatie</p><p>Voorbeeldzinnen:<br />Hoewel hij het koud heeft, draagt hij geen jas.<br />Zij is niet blij met haar werk, hoewel ze een goed salaris heeft. </p>").popup("open");
        }
        else if (sideText == 'img/Terwijl.png') {
            $('#basis-popup').html("<p>Terwijl maakt een bijzin<br />terwijl = op hetzelfde moment</p><p>Voorbeeldzinnen:<br />Terwijl wij de afwas doen, ruimen jullie de keuken op.<br />Mijn vriend werkt terwijl ik televisie kijk. </p>").popup("open");
        }
        else if (sideText == 'img/Sinds.png') {
            $('#basis-popup').html("<p>Sinds maakt een bijzin<br />sinds = vanaf dat moment</p><p>Voorbeeldzinnen:<br />Sinds ik in Nederland woon, ben ik gelukkig. <br />De planten bloeien goed, sinds ze veel water krijgen. </p>").popup("open");
        }
        else if (sideText == 'img/Toen.png') {
            $('#basis-popup').html("<p>Toen maakt een bijzin<br />1. toen = een periode in het verleden<br />2. toen = een moment in het verleden</p><p>Voorbeeldzinnen:<br />1. Toen ik klein was, woonde ik in een flat.<br />2. De man rende weg, toen hij de politie zag.</p>").popup("open");
        }
        else if (sideText == 'img/Als.png') {
            $('#basis-popup').html("<p>Als maakt een bijzin<br />als = een voorwaarde</p><p>Voorbeeldzinnen:<br />Als ik tijd heb, bel ik je vanavond.<br />Hij krijgt een brommer, als hij achttien is.</p>").popup("open");
        }
        else {
            $('#basis-popup').html("<p>Joker betekent: kies zelf een conjunctie</p><p>Voorbeeldzinnen:<br />Totdat hij klaar is met zijn huiswerk, mag hij niet naar buiten. <br />Sinds de verwarming is gerepareerd, is het lekker warm in huis. </p>").popup("open");
        }
    });

// Dit deel gaat over het menudeel Gevorderden > Werkwoorden.
    $(document).on('click', '#ww-click',function(e) {
        var words = ['vinden','weten','durven','streven','veranderen']
        var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 'img/wijjulliezij.png', 'img/joker.png']
        var tijdImgs = ['img/prf.png', 'img/PRE.png', 'img/IMP.png']
        var zinImgs = ['img/H.png', 'img/hi.png', 'img/IV.png', 'img/V.png']
        var randomWord = words[Math.floor(Math.random()*words.length)];
        var randomDobbel_1 = pvnImgs[Math.floor(Math.random()*pvnImgs.length)];
        var randomDobbel_2 = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];
        var randomDobbel_3 = zinImgs[Math.floor(Math.random()*zinImgs.length)];

        $('#kaart-tekst-ww').text(randomWord);
        $('#dobbel-1-ww').attr('src', randomDobbel_1);
        $('#dobbel-2-ww').attr('src', randomDobbel_2);
        $('#dobbel-3-ww').attr('src', randomDobbel_3);
    });

    $(document).on('click', '#ww-new-click',function(e) {
        var words = ['vinden','weten','durven','streven','veranderen']
        var voegwoordImgs = ['img/en.png', 'img/want.png', 'img/omdat.png', 'img/maar.png', 'img/hoewel.png']
        var randomWord = words[Math.floor(Math.random()*words.length)];
        var randomDobbel_4 = voegwoordImgs[Math.floor(Math.random()*voegwoordImgs.length)];

        $('#kaart-tekst-ww').text(randomWord);
    });

    $(document).on('click', '#ww-roll-click',function(e) {
        var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 'img/wijjulliezij.png', 'img/joker.png']
        var tijdImgs = ['img/prf.png', 'img/PRE.png', 'img/IMP.png']
        var zinImgs = ['img/H.png', 'img/hi.png', 'img/IV.png', 'img/V.png']
        var randomDobbel_1 = pvnImgs[Math.floor(Math.random()*pvnImgs.length)];
        var randomDobbel_2 = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];
        var randomDobbel_3 = zinImgs[Math.floor(Math.random()*zinImgs.length)];

        $('#dobbel-1-ww').attr('src', randomDobbel_1);
        $('#dobbel-2-ww').attr('src', randomDobbel_2);
        $('#dobbel-3-ww').attr('src', randomDobbel_3);
    });

    $(document).on('click', '#pvn-popup-ww-click',function(e) {
        var sideText = $('#dobbel-1-ww').attr('src')
        if (sideText == 'img/ik.png') {
            $('#pvn-ww-popup').html("<p>Ik = een subject</p><p>Voorbeeldzinnen:<br />Ik ga naar huis.<br />Op donderdagavond doe ik een cursus Nederlands.<br />Omdat ik weinig geld heb, koop ik groenten op de markt</p>").popup("open");
        }
        else if (sideText == 'img/jij.png') {
            $('#pvn-ww-popup').html("<p>Jij = een subject</p><p>Voorbeeldzinnen:<br />Jij hebt veel vrienden.<br />Ga jij mee boodschappen doen?<br />Wanneer kun jij me helpen?</p>").popup("open");
        }
        else if (sideText == 'img/hijzijhet.png') {
            $('#pvn-ww-popup').html("<p>Hij/Zij/Het = een subject</p><p>Voorbeeldzinnen:<br />Hij begrijpt weinig woorden.<br />Kan zij goed zingen?<br />Ik blijf binnen, omdat het regent.<br />Het maakt niet uit.</p>").popup("open");
        }
        else if (sideText == 'img/u.png') {
            $('#pvn-ww-popup').html("<p>U = een subject</p><p>Voorbeeldzinnen:<br />Kunt u mij helpen?<br />U houdt veel van klassieke muziek. <br />Terwijl u hier wacht, haal ik de formulieren.</p>").popup("open");
        }
        else if (sideText == 'img/wijjulliezij.png') {
            $('#pvn-ww-popup').html("<p>Wij/Jullie/Zij = een subject</p><p>Voorbeeldzinnen:<br />Hoe lang wonen jullie al in Amsterdam?  <br />Sinds zij hier wonen, is de buurt veel gezelliger. </p>").popup("open");
        }
        else {
            $('#pvn-ww-popup').html("<p>Joker betekent: kies zelf een subject</p><p>Voorbeeldzinnen:<br />Mijn broer werkt in een restaurant.<br />mijn broer = joker<br />Omdat de docent ziek is, gaat de les niet door.<br />de docent = joker</p>").popup("open");
        }
    });

    $(document).on('click', '#tijd-popup-ww-click',function(e) {
        var sideText = $('#dobbel-2-ww').attr('src')
        if (sideText == 'img/PRE.png') {
            $('#tijd-ww-popup').html("<p>PRE = Presens<br />(tegenwoordige tijd)</p><p>Voorbeeldzinnen:<br />Ik luister naar de radio. <br />Waarom duurt alles zo lang?<br />De spelers wachten in de kleedkamer. </p>").popup("open");
        }
        else if (sideText == 'img/prf.png') {
            $('#tijd-ww-popup').html("<p>PRF = Perfectum<br />(voltooide tijd)</p><p>Voorbeeldzinnen:<br />Ik heb al mijn huiswerk gemaakt.<br />De jongens zijn vroeg naar huis gegaan.<br />Ze hebben bijna niet geslapen.</p>").popup("open");
        }
        else {
            $('#tijd-ww-popup').html("<p>IMP = Imperfectum<br />(verleden tijd)</p><p>Voorbeeldzinnen:<br />Een biertje in het café kostte 2,50.<br />Wilde jij vroeger docent worden?<br />Toen ik jou zag, was ik meteen verliefd. </p>").popup("open");
        }
    });

    $(document).on('click', '#zin-popup-ww-click',function(e) {
        var sideText = $('#dobbel-3-ww').attr('src')
        if (sideText == 'img/H.png') {
            $('#zin-ww-popup').html("<p>H = Hoofdzin<br />S / PV (/ R / V)<br />Subject / persoonsvorm / rest / verba</p><p>Voorbeeldzinnen:<br />De tafel / staat / midden in de kamer.<br />Deze tas / is / met de hand / gemaakt.<br />De resultaten van het onderzoek / werden / niet / bekendgemaakt.</p>").popup("open");
        }
        else if (sideText == 'img/hi.png') {
            $('#zin-ww-popup').html("<p>HI = Hoofdzin met inversie<br />I / PV / S (/ R / V)<br />iets anders / persoonsvorm / subject / rest / verba</p><p>Voorbeeldzinnen:<br />Morgen / eet / ik / bij mijn moeder.<br />Vroeger / aten / de mensen / veel aardappelen.<br />Daarom / heeft / het meisje / nog nooit / gerookt.</p>").popup("open");
        }
        else if (sideText == 'img/V.png') {
            $('#zin-ww-popup').html("<p>V = Vraagzin ja/nee<br />PV / S (/ R / V)?<br />persoonsvorm / subject / rest / verba?</p><p>Voorbeeldzinnen:<br />Eet / jij / vlees? <br /> Willen / jullie / mee naar een concert van Prince? <br />Kon / zij / geen nieuw huis / kopen? </p>").popup("open");
        }
        else {
            $('#zin-ww-popup').html("<p>IV = Informatievraag<br />I / PV / S (/ R / V)?<br />Interrogatief / persoonsvorm / subject / rest / verba?</p><p>Voorbeeldzinnen:<br />Waarom / heb / jij / me / gebeld? <br />Hoe lang / duurde / de voorstelling? <br />Wie / heb / je / uitgenodigd? <br />Wat / is / er / gebeurd?</p>").popup("open");
        }
    });

// Dit deel gaat over het menudeel Gevorderden > Conjuncties.
    $(document).on('click', '#conjuncties-click',function(e) {
        var classState = $('#kaart-extra').attr('class')
        $('#kaart-extra').removeClass(classState).addClass('on-card');

        var words = ['maken', 'doen', 'vergeten', 'hebben', 'zijn']
        var extraImgs = ['img/Omdat.png', 'img/Hoewel.png', 'img/Als.png', 'img/Toen.png', 'img/Sinds.png', 'img/Terwijl.png', 'img/Nadat.png', 'img/Voordat.png', 'img/Doordat.png','img/joker.png']
        var randomWord = words[Math.floor(Math.random()*words.length)];
        var randomDobbel =extraImgs[Math.floor(Math.random()*basisImgs.length)];

        $('#kaart-tekst-conjuncties').text(randomWord);
        $('#dobbel-extra').attr('src', randomDobbel);
    });

    $(document).on('click', '#conjuncties-new-click',function(e) {
        var classState = $('#kaart-extra').attr('class')
        if (classState == 'on-card') {
            var words = ['maken', 'doen', 'vergeten', 'hebben', 'zijn']
            var randomWord = words[Math.floor(Math.random()*words.length)];
            $('#kaart-tekst-conjuncties').text(randomWord);
        }
        else {
            $('#kaart-extra').removeClass('off-card').addClass('on-card');
            var words = ['maken', 'doen', 'vergeten', 'hebben', 'zijn']
            var randomWord = words[Math.floor(Math.random()*words.length)];
            $('#kaart-tekst-conjuncties').text(randomWord);
        }
    });

    $(document).on('click', '#conjuncties-roll-click',function(e) {
        var extraImgs = ['img/Omdat.png', 'img/Hoewel.png', 'img/Als.png', 'img/Toen.png', 'img/Sinds.png', 'img/Terwijl.png', 'img/Nadat.png', 'img/Voordat.png', 'img/Doordat.png','img/joker.png']
        var randomDobbel = extraImgs[Math.floor(Math.random()*extraImgs.length)];

        $('#dobbel-extra').attr('src', randomDobbel);
    });

    $(document).on('click', '#extra-card-click',function(e) {
        var classState = $('#kaart-extra').attr('class')
        if (classState == 'on-card') {
            $('#kaart-extra').removeClass('on-card').addClass('off-card');
        }
        else {
            $('#kaart-extra').removeClass('off-card').addClass('on-card');
        }
    });

    $(document).on('click', '#extra-popup-click',function(e) {
        var sideText = $('#dobbel-extra').attr('src')
        if (sideText == 'img/Omdat.png') {
            $('#extra-popup').html("<p>Omdat maakt een bijzin<br />omdat = een reden</p><p>Voorbeeldzinnen:<br />Omdat het erg druk is op zaterdag doe ik boodschappen op vrijdag. <br />Je mag hier niet spelen omdat het gevaarlijk is.</p>").popup("open");
        }
        else if (sideText == 'img/Hoewel.png') {
            $('#extra-popup').html("<p>Hoewel maakt een bijzin<br />omdat = een niet-logische relatie</p><p>Voorbeeldzinnen:<br />Hoewel hij het koud heeft, draagt hij geen jas.<br />Zij is niet blij met haar werk, hoewel ze een goed salaris heeft. </p>").popup("open");
        }
        else if (sideText == 'img/Terwijl.png') {
            $('#extra-popup').html("<p>Terwijl maakt een bijzin<br />terwijl = op hetzelfde moment</p><p>Voorbeeldzinnen:<br />Terwijl wij de afwas doen, ruimen jullie de keuken op.<br />Mijn vriend werkt terwijl ik televisie kijk. </p>").popup("open");
        }
        else if (sideText == 'img/Sinds.png') {
            $('#extra-popup').html("<p>Sinds maakt een bijzin<br />sinds = vanaf dat moment</p><p>Voorbeeldzinnen:<br />Sinds ik in Nederland woon, ben ik gelukkig. <br />De planten bloeien goed, sinds ze veel water krijgen. </p>").popup("open");
        }
        else if (sideText == 'img/Toen.png') {
            $('#extra-popup').html("<p>Toen maakt een bijzin<br />1. toen = een periode in het verleden<br />2. toen = een moment in het verleden</p><p>Voorbeeldzinnen:<br />1. Toen ik klein was, woonde ik in een flat.<br />2. De man rende weg, toen hij de politie zag.</p>").popup("open");
        }
        else if (sideText == 'img/Als.png') {
            $('#extra-popup').html("<p>Als maakt een bijzin<br />als = een voorwaarde</p><p>Voorbeeldzinnen:<br />Als ik tijd heb, bel ik je vanavond.<br />Hij krijgt een brommer, als hij achttien is.</p>").popup("open");
        }
        else if (sideText == 'img/Nadat.png') {
            $('#extra-popup').html("<p>Nadat maakt een bijzin<br />nadat = na een moment in het verleden</p><p>Voorbeeldzinnen:<br />Nadat de brandweer was gekomen, werd de vrouw gered.<br />De pizza arriveert meestal een half uur nadat u besteld hebt.</p>").popup("open");
        }
        else if (sideText == 'img/Doordat.png') {
            $('#extra-popup').html("<p>Doordat maakt een bijzin<br />doordat = oorzaak</p><p>Voorbeeldzinnen:<br />Doordat ik ziek was, kon ik het examen niet doen.<br />Iedereen kwam te laat op zijn werk, doordat de treinen vertraging hadden.</p>").popup("open");
        }
        else if (sideText == 'img/Voordat.png') {
            $('#extra-popup').html("<p>Voordat maakt een bijzin<br />voordat = voor een moment in de toekomst</p><p>Voorbeeldzinnen:<br />Voordat je naar huis gaat, sluit je de winkel af.<br />Let goed op, voordat er dingen mis gaan.</p>").popup("open");
        }
        else {
            $('#extra-popup').html("<p>Joker betekent: kies zelf een conjunctie</p><p>Voorbeeldzinnen:<br />Totdat hij klaar is met zijn huiswerk, mag hij niet naar buiten. <br />Sinds de verwarming is gerepareerd, is het lekker warm in huis. </p>").popup("open");
        }
    });


// Dit deel gaat over het menudeel Gevorderden > Separabele werkwoorden.
    $(document).on('click', '#separables-click',function(e) {
        var words = ['uitleggen', 'voorbereiden', 'kennismaken', 'schoonmaken', 'opzoeken']
        var modeImgs = ['img/PV.png', 'img/inf.png', 'img/PAR.png']
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
        var modeImgs = ['img/PV.png', 'img/inf.png', 'img/PAR.png']
        var randomDobbel = modeImgs[Math.floor(Math.random()*modeImgs.length)];

        $('#dobbel-separables').attr('src', randomDobbel);
    });

    $(document).on('click', '#modus-popup-click',function(e) {
        var sideText = $('#dobbel-separables').attr('src')
        if (sideText == 'img/PV.png') {
            $('#modus-popup').html("<p>PV = Persoonsvorm<br />Het verbum in de zin = Persoonsvorm</p><p>Voorbeeldzinnen:<br />Hij belt zijn moeder op. <br />Als hij zijn moeder opbelt….</p>").popup("open");
        }
        else if (sideText == 'img/inf.png') {
            $('#modus-popup').html("<p>INF = Infinitief<br />Het verbum in de zin = Infinitief</p><p>Voorbeeldzinnen:<br />Kun je mij helpen afwassen? <br />Wanneer zullen we kennismaken?</p>").popup("open");
        }
        else {
            $('#modus-popup').html("<p>PAR = Participium<br />Het verbum in de zin = Participium</p><p>Voorbeeldzinnen:<br />De docent heeft de opdracht uitgelegd. <br />Het pakketje is op tijd aangekomen.</p>").popup("open");
        }
    });

// Dit deel gaat over het menudeel Thema's > Seizoenen..
    $(document).on('click', '#season-click',function(e) {
        var words = ['de paraplu', 'het terrasje', 'warm', 'de winterjas', 'buiten']
        var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 'img/wijjulliezij.png', 'img/joker.png']
        var tijdImgs = ['img/prf.png', 'img/PRE.png', 'img/IMP.png']
        var zinImgs = ['img/H.png', 'img/hi.png', 'img/IV.png', 'img/V.png']
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
        var tijdImgs = ['img/prf.png', 'img/PRE.png', 'img/IMP.png']
        var zinImgs = ['img/H.png', 'img/hi.png', 'img/IV.png', 'img/V.png']
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
        var tijdImgs = ['img/prf.png', 'img/PRE.png', 'img/IMP.png']
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
        var tijdImgs = ['img/prf.png', 'img/PRE.png', 'img/IMP.png']
        var randomDobbel = tijdImgs[Math.floor(Math.random()*tijdImgs.length)];

        $('#dobbel-science').attr('src', randomDobbel);
    });
});
