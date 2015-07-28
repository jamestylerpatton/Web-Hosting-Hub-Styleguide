(function($) {
    $.fn.detectElem = function(opt){

        opt = $.extend(opt);
        var $el = this;

        var elemDataContainer = $('.element_data');
        function clearData(){
            elemDataContainer.css('display', 'none');
            elemDataContainer.html('');
        }

        return $el.hover(function(){
            $(this).css({
                'outline' : '5px auto -webkit-focus-ring-color',
                'outline-offset': '-2px',
                'cursor' : 'pointer'
            });
        }, function(){
            $(this).css({
                'outline' : 'none',
                'outline-offset': 'none',
                'cursor' : 'initial'
            });
        }).click(function(){
            var elemData = $(this).data();
            clearData();
            elemDataContainer.append("<div class=\"element_data_drag\"><span class=\"glyphicon glyphicon-remove\">No</span></div>");

            if(elemData['name'] != null){
                elemDataContainer.append("<div class=\"row\"><div class=\"col-xs-12 name\">"+elemData['name']+"</div></div>");
            }
            for (var prop in elemData) {
                if(prop !== 'sgh' && prop !== 'name'){
                    // Add content
                    elemDataContainer.append("<div class=\"row\"><div class=\"col-xs-4\">"+prop+"</div><div class=\"col-xs-8\">"+elemData[prop]+"</div></div>");
                }
            }
            
            var elDrag = document.querySelector('.element_data_drag');
            elemDataContainer.drags({handle:elDrag});

            elemDataContainer.css({'display':'block'});

            $('.element_data span').click(function(){
                clearData();
            });
        });
    }
})(jQuery);