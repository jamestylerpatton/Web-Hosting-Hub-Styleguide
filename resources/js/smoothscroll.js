// Turn anchor links into smoothscroll
module.exports = function($, viewportWidth){
    smoothScroll = {
        cacheDom : function(){
            this.$link = $('a');
            this.$body = $('html,body');
        },
        bindEvents : function(){
            this.$link.on('click', this.checkScroll.bind(this));
        },
        checkScroll : function(event){
            var clicked = $(event.target).attr('href');
            if (typeof clicked !== typeof undefined && clicked !== false && clicked.indexOf('#') === 0){
                this.smoothScroll(clicked);
            }
        },
        getScrollDist : function(clicked){
            if (viewportWidth() > 991){
                return $(clicked).offset().top - 100;
            } else{
                return $(clicked).offset().top;
            }
        },
        smoothScroll : function(clicked){
            event.preventDefault();
            if (clicked.split('#')[1] !== ''){
                var goToDest = this.getScrollDist(clicked);
                this.$body.animate({
                    scrollTop: goToDest
                }, 500);
                return false;
            }
        },
        init : function(){
            this.cacheDom();
            this.bindEvents();
        }
    }
    smoothScroll.init();
};