var $ = jQuery = require('jQuery'),
    drags = require('../../web/js/drags.js'),
    bootstrap = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'),
    detectElements = require('../../web/js/detect-elements.js');

(function($) {

    // Returns viewport width (for older browsers)
    function viewportWidth() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return e[ a+'Width' ];
    }

    $(function(){
        var numCols = $('.products thead th').length;
        $('table.products th, table.products td').each(function(i){
            $(this).addClass('column' + (i % numCols));
        });
    });

    // Add dropdown toggle to Product boxes
    $(function(){
        $('.products a.features').click(function(){
            $( this ).closest('div.row').siblings('div.dropdown').slideToggle();
        });
    });

    // Adds the hero div to the banners and the parallax scroll
    $(function(){
        var heroHeight,
            margTop;
        $(window).on('load resize', function(e){
            heroHeight = $('.hero').height();
            margTop = heroHeight-50 + 'px';
            if(viewportWidth() > 991){
                $('.hero').next().css('margin-top', margTop);
            } else{
                $('.hero').next().css('margin-top', '0');
            }
        })
        $(window).on('load scroll', function(e){
            s = $(window).scrollTop();
            $(".hero").css("top", (s*-0.55) + "px");
            // $(".hero").css("top", (s*-0.05) + "px");
        });
    });

    // navigation scroll effect
    $(function(){
        var navBar = $('.main-nav.trans-bg');
        var heroHeight = $('.hero').height();
        // var heroAction = heroHeight - 150;
        var heroAction = 100;
        var fadeStart = 0;
        var fadeEnd = heroAction;
        var opacity;
        var scroll = $(window).scrollTop();

        // variables for text color change
        var el = $('.main-nav .summer #navbar a'),
            cStart = [113, 72, 60],
            cEnd = [255, 255, 255],
            cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]],
            tEnd = heroAction;

        if ($(window).scrollTop() >= 100){
            $('.main-nav.trans-bg').css('background', 'rgba(0, 90, 126, 0.95)');
            $('.main-nav .summer #navbar a').css('color', '#fff');
        }
        if (window.innerWidth >= 991 && $(window).scrollTop() < 100){
            $('.main-nav.trans-bg').css('background', 'rgba(0, 90, 126, '+ $(window).scrollTop()*0.95/100 +')');
            $('.main-nav .summer #navbar a').css('color', 'rgb(113, 72, 60)');
        }

        $(window).resize(function(){
            scroll = $(window).scrollTop();
            if (window.innerWidth <= 990) {
                navBar.css('background', 'rgba(0, 90, 126, .95)');
                el.css('color', '#ffffff');
            }
            if (window.innerWidth >= 991) {
                if(scroll < heroAction){
                    navBar.css('background', 'rgba(0, 90, 126, '+ scroll*0.95/fadeEnd +')');
                    el.css('color', 'rgb('+cStart+')');
                }
            }
        });
        $(window).scroll(function(){
            scroll = $(window).scrollTop();
            if (window.innerWidth >= 990){
                if (scroll <= fadeStart) {
                    opacity = 0;
                } else if (scroll > fadeStart && scroll < fadeEnd){
                    opacity = scroll*0.95/fadeEnd;
                }else{
                    opacity = 0.95;
                }
                navBar.css('background', 'rgba(0, 90, 126, '+opacity+')');

                // Change text color on scroll
                var p = ($(this).scrollTop()) / (tEnd);
                p = Math.min(1, Math.max(0, p));
                var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
                el.css('color', 'rgb(' + cBg.join(',') +')');
                if (scroll > tEnd){
                    el.css('color', 'rgb('+cEnd+')');
                }
            }
        });

        navBar.hover(function(){
            if (window.innerWidth >= 991 && $(window).scrollTop() < heroAction) {
                $(this).css('background', 'rgba(0, 90, 126, .95)');
                el.css('color', 'rgb('+cEnd+')');
            }
        }, function(){
            if (window.innerWidth >= 991 && $(window).scrollTop() < heroAction) {
                $(this).css('background', 'rgba(0, 90, 126, '+ scroll*0.95/fadeEnd +')');
                el.css('color', 'rgb('+cStart+')');
            }
        });
    });

    var init = (function(){
        
        $('[data-sgh]').detectElem();

        // Turn anchor links into smoothscroll
        $(function(){
            $('a').click(function(event){
                var link = $(this).attr('href');
                if (typeof link !== typeof undefined && link !== false){
                    if (link.indexOf('#') === 0){
                        event.preventDefault();
                        var destination = link.split('#')[1];

                        if (destination !== ''){
                            if (viewportWidth() > 991){
                                var goToDest = $(link).offset().top - 100;
                            } else{
                                var goToDest = $(link).offset().top;
                            }

                            $('html,body').animate({
                                scrollTop: goToDest
                            }, 500);
                            return false;
                        }
                    }
                }
            });
        });

        $(function(){
            $('.products a.features').click(function(){
                $( this ).closest('div.row').siblings('div.dropdown').slideToggle();
            });
        });

        // Seach Domain Form Code
        $(function(){
            var domain_search_obj = $('.domain-search-button');
            var input_obj = $('input#domain-search-input');
            var valid_exts = ['com', 'net', 'org', 'info', 'biz', 'us'];

            input_obj.keydown(function(e){
                if (e.keyCode == 13) {
                    domain_search_obj.first().trigger('click');
                    return false;
                }
                return true;
            });

            domain_search_obj.click(function(){
                var input_text = input_obj.val();
                var responseSec = $('.domain-response');
                responseSec.removeClass('fail success');
                if (input_text == '') {
                    // Enter a Domain
                    responseSec.html('Enter a Domain');
                    responseSec.addClass('fail');
                    input_obj.trigger('focus').select();
                } else if (input_text.match(/^[a-z0-9]([a-z0-9\-]*[a-z0-9])*\.([a-z]{2,4}\.)*[a-z]{2,4}$/i) == null) {
                    // Not a Domain
                    responseSec.html('Not a Domain');
                    responseSec.addClass('fail');
                    input_obj.trigger('focus').select();
                } else if (valid_exts.indexOf((input_text.split('.'))[1]) == -1) {
                    // Invalid TLD
                    responseSec.html('Invalid TLD');
                    responseSec.addClass('fail');
                    input_obj.trigger('focus').select();
                } else {
                    input_obj.prop('readonly', true);
                    responseSec.html('Loading...');
                    responseSec.addClass('loading');

                    setTimeout(function(){
                        input_obj.prop('readonly', false);
                        responseSec.removeClass('loading');
                        responseSec.html('<input type=\'submit\' value=\'Order Now\'></input>');
                        responseSec.addClass('success');
                    }, 1000);
                }
                return false;
            });
        });
    });

    $(function(){
        $( "#branding" ).load( "views/branding.html");
        $( "#icons" ).load( "views/icons.html");
        $( "#colors" ).load( "views/colors.html");
        $( "#typography" ).load( "views/typography.html");
        $( "#buttons" ).load( "views/buttons.html");
        $( "#forms" ).load( "views/forms.html");
        $( "#domain-search" ).load( "views/domain-search.html");
        $( "#product-table" ).load( "views/product-table.html", init);
    });

    $(function(){
        window.onload = function(){
            setTimeout(function(){$('.screenloading').fadeOut(200)}, 500);
        };
    });

    $(function(){
        var gridToggle = false,
            target = $('.toggle-grid');
        target.click(function(){
            if(gridToggle === false){
                $('body').append('<div class="guides-show"></div>');$('.guides-show').append('<div class="container"></div>');$('.guides-show .container').append('<div class="row"></div>');for(var i = 0; i < 12; i++){$('.guides-show .container .row').append('<div class="col-xs-1"></div>');}$('.guides-show .container .row .col-xs-1').append('<span></span>');$('.guides-show').css({'position': 'fixed','width': '100%','height': '100%','top': 0,'left': 0,'bottom': 0,'right': 0});$('.guides-show > .container, .guides-show > .container > .row, .guides-show > .container > .row > .col-xs-1').css({'height': '100%'});$('.guides-show > .container > .row > .col-xs-1').css({'border-left': '1px solid #333'});$('.guides-show > .container > .row > .col-xs-1:first-child').css({'border-left': '1px solid #333'});$('.guides-show > .container > .row > .col-xs-1:last-child').css({'border-right': '1px solid #333'});$('.guides-show > .container > .row > .col-xs-1 > span').css({'width': '100%','height': '100%','display': 'block','background-color': 'rgba(0, 0, 0, 0.05)'});
                gridToggle = true;
                target.text('hide grid');
            } else{
                $('.guides-show').remove();
                gridToggle = false;
                target.text('show grid');
            }
        });
    });

})(jQuery);
