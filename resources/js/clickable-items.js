module.exports = function($){
  clickableItems = {
    items : itemData,
    cacheDom : function(){
      this.$secInput = $('.show-sec-info');
      this.$dragHandle = this.$secInput.find('.handle');
      this.$close = this.$secInput.find('.close');
      this.$elemShow = this.$secInput.find('.information');
      this.$elemHeader = this.$secInput.find('h3');
      this.$allElements = this.$secInput.find('.all');
      this.$clickableElem = $('[data-sg]');
    },
    bindEvents : function(){
      this.$clickableElem.on('click', this.showInfo.bind(this));
      this.$close.on('click', this.hideInfo.bind(this));
      $('.show-sec-info').drags({ handle : this.$dragHandle });
    },
    showInfo : function(event){
      var clickedElem = $(event.target).attr('data-name');
      this.deleteInfo();
      if (this.items[clickedElem] !== undefined){
        this.addInfo(clickedElem);
      } else{
        this.backupInfo();
      }

      this.$secInput.fadeIn(250);
    },
    hideInfo : function(){
      this.$secInput.fadeOut(250, function(){
        clickableItems.deleteInfo();
      });
    },
    addInfo : function(clickedElem){
      this.$elemHeader.text(this.items[clickedElem].name);
      for (var key in this.items[clickedElem].props){
        this.$elemShow.append('<h4>'+key+' :</h4>');
        this.$elemShow.append('<p>'+this.items[clickedElem].props[key]+'</p>');
      }
    },
    backupInfo : function(){
      this.$elemHeader.text('Undefined Item');
      this.$elemShow.append('<p>This item has not been added to the item-data file.</p>');
    },
    deleteInfo : function(){
      this.$elemShow.html('');
    },
    init : function(){
      this.cacheDom();
      this.bindEvents();
    }
  }
  clickableItems.init();
};