const helpMap = (function () {
  
  return {
    init: function () {
      mviewer.getMap().on('moveend', function(evt) {
        let zoomMap = mviewer.getMap().getView().getZoom();
        if (zoomMap > 11.5) {          
          document.getElementById('helpTwoFibre').style.display="block";
          document.getElementById('helpOneFibre').style.display="none";
        }else{
          document.getElementById('helpTwoFibre').style.display="none";
          document.getElementById('helpOneFibre').style.display="block";
        }
    });
    },
  };
})();

new CustomComponent("helpMap", helpMap.init);
