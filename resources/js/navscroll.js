module.exports = function($){
    navScroll = {
        cacheDom : function(){
            this.$navbar = $('.main-nav.trans-bg');
            this.$hero = $('.hero');
            this.$window = $(window);
        },
        bindEvents : function(){
            this.$window.on('resize', this.checkWidth.bind(this));
            this.$window.on('scroll', this.checkScroll.bind(this));
            this.$navbar.hover(this.fillBackground.bind(this), this.checkScroll.bind(this));
        },
        checkWidth : function(){
            if (window.innerWidth <= 990) {
                this.fillBackground();
            }
            if (window.innerWidth >= 991 && this.$window.scrollTop() < 100) {
                this.calcbackground();
            }
        },
        checkScroll : function(){
            if (window.innerWidth >= 991){
                if(this.scrollHeight() <= 0){
                    this.emptyBackground();
                } else if(this.scrollHeight() > 0 && this.scrollHeight() < 100){
                    this.calcbackground();
                } else{
                    this.fillBackground();
                }
            }
        },
        scrollHeight : function(){
            return this.$window.scrollTop();
        },
        calcbackground : function(){
            this.$navbar.css('background', 'rgba(0, 90, 126, '+ this.scrollHeight()*0.95/100 +')');
        },
        fillBackground : function(){
            this.$navbar.css('background', 'rgba(0, 90, 126, .95)');
        },
        emptyBackground : function(){
            this.$navbar.css('background', 'rgba(0, 90, 126, 0)');
        },
        init : function(){
            this.cacheDom();
            this.bindEvents();
            this.checkScroll();
        }
    }
    navScroll.init();
}