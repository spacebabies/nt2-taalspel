function selectRandom(data) {
    length = data.length
    return data[Math.floor(Math.random()*length)]
};

function dobbelChecker(dobbel) {
    return ($(dobbel).attr('class') == 'off-dobbel dice');
};

$(document).on('pagebeforeshow','#page1' ,function(e, data){
    $(document).on('click', '.card', function(e) {
        classState = $('.card').attr('class')
        if (classState == 'on-card card') {
            $('.card').removeClass('on-card card').addClass('off-card card');
        }
        else {
            $('.card').removeClass('off-card card').addClass('on-card card');
        }
    });

    $.each(dobbels, function(i) {
        $(dobbels[i]).on('click', function(e) {
            var dobbelState = $(dobbels[i]).attr('class')
            if (dobbelState == 'on-dobbel dice') {
                $(dobbels[i]).removeClass('on-dobbel dice').addClass('off-dobbel dice');
            }
            else {
                $(dobbels[i]).removeClass('off-dobbel dice').addClass('on-dobbel dice');
            }
        })
    });

    $.each(entrances, function(i) {
        $(document).on('click', entrances[i],function(e) {
            $('.card').removeClass($('.card').attr('class')).addClass('on-card card');
            $('.dice').removeClass($('.dice').attr('class')).addClass('on-dobbel dice');
        })
    });    

    //Dit deel geldt voor het deel Werkwoorden > Start van het menu.
   $(document).on('click', '#start-click',function(e) {
        $('#kaart-tekst-start').text(selectRandom(startWords));
        $('#dobbel-1-start').attr('src', selectRandom(pvnImgs));
        $('#dobbel-2-start').attr('src', selectRandom(tijdImgs));
        $('#dobbel-3-start').attr('src', selectRandom(zinImgs));
    });

    $(document).on('click', '#start-new-click',function(e) {
        if ($('.card').attr('class') != "off-card card") {
            $('#kaart-tekst-start').text(selectRandom(startWords));  
        }
    });

    $(document).on('click', '#start-roll-click',function(e) {
        if (dobbelChecker('#dobbel-1-start') == false) {
            $('#dobbel-1-start').attr('src', selectRandom(pvnImgs));
        };
        if (dobbelChecker('#dobbel-2-start') == false) {
            $('#dobbel-2-start').attr('src', selectRandom(tijdImgs));
        };
        if (dobbelChecker('#dobbel-3-start') == false) {
            $('#dobbel-3-start').attr('src', selectRandom(zinImgs));
        };
    });

    //Dit deel geldt voor het deel Werkwoorden > Modale werkwoorden van het menu.
   $(document).on('click', '#modal-click',function(e) {
        $('#kaart-tekst-modal').text(selectRandom(modaalWords));
        $('#dobbel-1-modal').attr('src', selectRandom(pvnImgs));
        $('#dobbel-3-modal').attr('src', selectRandom(zinImgs));
    });
    $(document).on('click', '#modal-new-click',function(e) {
        if ($('.card').attr('class') != "off-card card") {
            $('#kaart-tekst-modal').text(selectRandom(modaalWords));
        }
    });

    $(document).on('click', '#modal-roll-click',function(e) {
        if (dobbelChecker('#dobbel-1-modal') == false) {
            $('#dobbel-1-modal').attr('src', selectRandom(pvnImgs));
        };
        if (dobbelChecker('#dobbel-3-modal') == false) {
            $('#dobbel-3-modal').attr('src', selectRandom(zinImgs));
        };
    });

    //Dit deel geldt voor het deel Werkwoorden > Met prepositie van het menu.
   $(document).on('click', '#prepos-click',function(e) {
        $('#kaart-tekst-prepos').text(selectRandom(prepoWords));
        $('#dobbel-1-prepos').attr('src', selectRandom(pvnImgs));
        $('#dobbel-2-prepos').attr('src', selectRandom(tijdImgs));
        $('#dobbel-3-prepos').attr('src', selectRandom(zinImgs));
    });
    $(document).on('click', '#prepos-new-click',function(e) {
        if ($('.card').attr('class') != "off-card card") {
            $('#kaart-tekst-prepos').text(selectRandom(prepoWords));
        }
    });

    $(document).on('click', '#prepos-roll-click',function(e) {
        if (dobbelChecker('#dobbel-1-prepos') == false) {
            $('#dobbel-1-prepos').attr('src', selectRandom(pvnImgs));
        };
        if (dobbelChecker('#dobbel-2-prepos') == false) {
            $('#dobbel-2-prepos').attr('src', selectRandom(tijdImgs));
        };
        if (dobbelChecker('#dobbel-3-prepos') == false) {
            $('#dobbel-3-prepos').attr('src', selectRandom(zinImgs));
        };
    });

    //Dit deel geldt voor het deel Werkwoorden > Separabele werkwoorden.
    $(document).on('click', '#sepa-click',function(e) {
        $('#kaart-tekst-sepa').text(selectRandom(separabelWords));
        $('#dobbel-1-sepa').attr('src', selectRandom(pvnImgs));
        $('#dobbel-4-sepa').attr('src', selectRandom(modeImgs));
    });
    $(document).on('click', '#sepa-new-click',function(e) {
        if ($('.card').attr('class') != "off-card card") {
            $('#kaart-tekst-sepa').text(selectRandom(separabelWords));
        }
    });

    $(document).on('click', '#sepa-roll-click',function(e) {
        $('#dobbel-1-sepa').attr('src', selectRandom(pvnImgs));
        $('#dobbel-4-sepa').attr('src', selectRandom(modeImgs));
    });

    //Dit deel geldt voor het deel Werkwoorden > Te + infinitief.
    $(document).on('click', '#inf-click',function(e) {
        $('#kaart-tekst-inf').text(selectRandom(infWords));
        $('#dobbel-1-inf').attr('src', selectRandom(pvnImgs));
        $('#dobbel-2-simple-time').attr('src', selectRandom(simpleTijdImgs));
    });

    $(document).on('click', '#inf-new-click',function(e) {
        if ($('.card').attr('class') != "off-card card") {
            $('#kaart-tekst-inf').text(selectRandom(infWords));
        }
    });

    $(document).on('click', '#inf-roll-click',function(e) {
        $('#dobbel-1-inf').attr('src', selectRandom(pvnImgs));
        $('#dobbel-2-simple-time').attr('src', selectRandom(simpleTijdImgs));
    });

    // Dit deel gaat over het menudeel Conjuncties > Beginner.
    $(document).on('click', '#easy-cj-click',function(e) {
        $('#kaart-tekst-easy-cj').text(selectRandom(easyCjWords));
        $('#dobbel-easy-cj').attr('src', selectRandom(basisImgs));
    });

    $(document).on('click', '#easy-cj-new-click',function(e) {
        if ($('.card').attr('class') != "off-card card") {
            $('#kaart-tekst-easy-cj').text(selectRandom(easyCjWords));
        }
    });

    $(document).on('click', '#easy-cj-roll-click',function(e) {
        if (dobbelChecker('#dobbel-easy-cj') == false) {
            $('#dobbel-easy-cj').attr('src', selectRandom(basisImgs));
        };
    });

    // Dit deel gaat over het menudeel Conjuncties > Gevorderden.
    $(document).on('click', '#hard-cj-click',function(e) {
        $('#kaart-tekst-hard-cj').text(selectRandom(hardCjWords));
        $('#dobbel-hard-cj').attr('src', selectRandom(extraImgs));
    });

    $(document).on('click', '#hard-cj-new-click',function(e) {
        if ($('.card').attr('class') != "off-card card") {
            $('#kaart-tekst-hard-cj').text(selectRandom(hardCjWords));
        }
    });

    $(document).on('click', '#hard-cj-roll-click',function(e) {
        if (dobbelChecker('#dobbel-hard-cj') == false) {
            $('#dobbel-hard-cj').attr('src', selectRandom(extraImgs));
        };
    });

    //Dit deel geldt voor het deel Relatief pronomen van het menu.
   $(document).on('click', '#relatief-click',function(e) {
        $('#kaart-tekst-relatief').text(selectRandom(relapWords));
        $('#dobbel-relatief').attr('src', selectRandom(relPronImgs));
    });
    $(document).on('click', '#relatief-new-click',function(e) {
        if ($('.card').attr('class') != "off-card card") {
            $('#kaart-tekst-relatief').text(selectRandom(relapWords));
        }
    });

    $(document).on('click', '#relatief-roll-click',function(e) {
        $('#dobbel-relatief').attr('src', selectRandom(relPronImgs));
    });

    //Dit deel geldt voor het deel Indirecte rede van het menu.
   $(document).on('click', '#indirect-click',function(e) {
        $('#kaart-tekst-indirect').text(selectRandom(indirectWords));
        $('#dobbel-1-indirect').attr('src', selectRandom(pvnImgs));
        $('#dobbel-2-indirect').attr('src', selectRandom(tijdImgs));
    });
    $(document).on('click', '#indirect-new-click',function(e) {
        if ($('.card').attr('class') != "off-card card") {
            $('#kaart-tekst-indirect').text(selectRandom(indirectWords));
        }
    });

    $(document).on('click', '#indirect-roll-click',function(e) {
        if (dobbelChecker('#dobbel-1-indirect') == false) {
            $('#dobbel-1-indirect').attr('src', selectRandom(pvnImgs));
        };
        if (dobbelChecker('#dobbel-2-indirect') == false) {
            $('#dobbel-2-indirect').attr('src', selectRandom(tijdImgs));
        };
    });

    //Dit deel geldt voor het deel Thema's > Wetenschap van het menu.
   $(document).on('click', '#wetsch-click',function(e) {
        $('#kaart-tekst-wetsch').text(selectRandom(wetenschapWords));
        $('#dobbel-2-wetsch').attr('src', selectRandom(tijdImgs));
        $('#dobbel-3-wetsch').attr('src', selectRandom(zinImgs));
    });
    $(document).on('click', '#wetsch-new-click',function(e) {
        $('#kaart-tekst-wetsch').text(selectRandom(wetenschapWords));
    });

    $(document).on('click', '#wetsch-roll-click',function(e) {
        if (dobbelChecker('#dobbel-2-wetsch') == false) {
            $('#dobbel-2-wetsch').attr('src', selectRandom(tijdImgs));
        };
        if (dobbelChecker('#dobbel-3-wetsch') == false) {
            $('#dobbel-3-wetsch').attr('src', selectRandom(zinImgs));
        };
    });

    //Dit deel geldt voor het deel Thema's > Seizoenen van het menu.
   $(document).on('click', '#season-click',function(e) {
        $('#kaart-tekst-season').text(selectRandom(seizoenWords));
        $('#dobbel-2-season').attr('src', selectRandom(tijdImgs));
        $('#dobbel-3-season').attr('src', selectRandom(zinImgs));
    });
    $(document).on('click', '#season-new-click',function(e) {
        $('#kaart-tekst-season').text(selectRandom(seizoenWords));
    });

    $(document).on('click', '#season-roll-click',function(e) {
        if (dobbelChecker('#dobbel-2-season') == false) {
            $('#dobbel-2-season').attr('src', selectRandom(tijdImgs));
        };
        if (dobbelChecker('#dobbel-3-season') == false) {
            $('#dobbel-3-season').attr('src', selectRandom(zinImgs));
        };
    });
 
    //Dit deel geldt voor het deel Thema's > Op een feestje van het menu.
   $(document).on('click', '#party-click',function(e) {
        $('#kaart-tekst-party').text(selectRandom(feestjeWords));
        $('#dobbel-2-party').attr('src', selectRandom(tijdImgs));
        $('#dobbel-3-party').attr('src', selectRandom(zinImgs));
    });
    $(document).on('click', '#party-new-click',function(e) {
        $('#kaart-tekst-party').text(selectRandom(feestjeWords));
    });

    $(document).on('click', '#party-roll-click',function(e) {
        if (dobbelChecker('#dobbel-2-party') == false) {
            $('#dobbel-2-party').attr('src', selectRandom(tijdImgs));
        };
        if (dobbelChecker('#dobbel-3-party') == false) {
            $('#dobbel-3-party').attr('src', selectRandom(zinImgs));
        };
    });

    //Dit deel geldt voor het deel Thema's > Eten en drinken van het menu.
   $(document).on('click', '#food-click',function(e) {
        $('#kaart-tekst-food').text(selectRandom(foodWords));
        $('#dobbel-2-food').attr('src', selectRandom(tijdImgs));
        $('#dobbel-3-food').attr('src', selectRandom(zinImgs));
    });
    $(document).on('click', '#food-new-click',function(e) {
        $('#kaart-tekst-food').text(selectRandom(foodWords));
    });

    $(document).on('click', '#food-roll-click',function(e) {
        if (dobbelChecker('#dobbel-2-food') == false) {
            $('#dobbel-2-food').attr('src', selectRandom(tijdImgs));
        };
        if (dobbelChecker('#dobbel-3-food') == false) {
            $('#dobbel-3-food').attr('src', selectRandom(zinImgs));
        };
    });
});
