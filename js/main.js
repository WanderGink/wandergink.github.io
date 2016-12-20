var params_url = '';

$().ready(function() {

    checkUrlParams();

    var transparent = true;

    $(window).on('scroll', function() {
        if ($(document).scrollTop() > 260) {
            if (transparent) {
                transparent = false;
                $('nav[role="navigation"]').removeClass('navbar-transparent').addClass('navbar-default');
            }
        } else {
            if (!transparent) {
                transparent = true;
                $('nav[role="navigation"]').addClass('navbar-transparent').removeClass('navbar-default');
            }
        }
    });
    initMorphingButtons();
    initDemoChartist();
    initGoogleMaps();
    var test = false;

    $(document).bind('contextmenu', function(event) {
        if (!test) {
            $('.right-click').css("display", "block");
            $cards = $('.right-click').find('.card');
            $cards.addClass('bounceInDown');
            $('#right-click-message').addClass('bounceInDown');
            event.preventDefault();
            test = true;
        } else if (test) {
            return true;
        }
    });
    $('.onclick').bind('click', function() {
        $('.right-click').css("display", "none");
    });

});

function checkUrlParams() {
    var ref = getUrlParameter('ref');
    var coupon = getUrlParameter('coupon');


    if (coupon) {
        addQSParm("coupon", coupon);
    }
    if (ref) {
        addQSParm("ref", ref);
    }

    if (ref || coupon) {

        link = $(".buy-btn").attr('href');
        $(".buy-btn").attr('href', link + params_url);

        kit_link = $(".navbar-brand").attr('href');
        $(".navbar-brand").attr('href', kit_link + params_url);

        $('.navbar-right a').each(function() {
            href = $(this).attr('href');
            if (href != '#') {
                $(this).attr('href', href + params_url);
            }
        });

    }
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function addQSParm(name, value) {
    var re = new RegExp("([?&]" + name + "=)[^&]+", "");

    function add(sep) {
        params_url += sep + name + "=" + encodeURIComponent(value);
    }

    function change() {
        params_url = params_url.replace(re, "$1" + encodeURIComponent(value));
    }
    if (params_url.indexOf("?") === -1) {
        add("?");
    } else {
        if (re.test(params_url)) {
            change();
        } else {
            add("&");
        }
    }
}

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-46172202-1', 'auto');
ga('send', 'pageview');
