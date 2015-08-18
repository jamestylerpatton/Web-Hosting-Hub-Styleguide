var $ = jQuery = require('jQuery'),
    drags = require('./drags.js'),
    smoothscroll = require('./smoothscroll.js'),
    navscroll = require('./navscroll.js'),
    items = require('./item-data.js'),
    bootstrap = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'),
    clickableItems = require('./clickable-items.js');

(function($) {

    // Returns viewport width (for older browsers)
    var viewportWidth = function(){
        var e = window, a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return e[ a+'Width' ];
    }

    smoothscroll($, viewportWidth);

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
        });
    });

    // Toggle grid
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

    var init = (function(){

        clickableItems($);

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

})(jQuery);
