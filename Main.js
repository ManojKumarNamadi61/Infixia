
$(function () {
  var filterList = {
    init: function () {
      $('#gallery').mixItUp({
        selectors: {
          target: '.gallery-item',
          filter: '.filter' 
        },
        load: {
          filter: '.web, .App, .seo, .iot, .digit'
        }     
      });               
    }
  };  
  filterList.init(); 
});