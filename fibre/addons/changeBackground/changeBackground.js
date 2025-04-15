const changeBackground = (function() {

  var stopChange = false;

  return {
      init: function() {
          // Event when click to background btn
          let btnBackground = document.getElementById("backgroundlayersbtn");
          btnBackground.addEventListener("click", function() {
              stopChange = true;
          });

          // Function to change background on map
          function changeBackground(e) {
              if (stopChange) {
                  return;
              } else {
                  let zoomMap = mviewer.getMap().getView().getZoom();
                  if (zoomMap > 16) {
                      mviewer.setBaseLayer("ortho2");
                  } else if (zoomMap > 10 && zoomMap <= 16) {
                      mviewer.setBaseLayer("plan");
                  } else {
                      mviewer.setBaseLayer("positron");
                  }
              }
          }

          function displayTooltip(e) {
            let zoomMap = mviewer.getMap().getView().getZoom();
            let tooltipMap = document.getElementById("feature-info");
            if (zoomMap > 14) {          
                tooltipMap.style.display = 'none';
            } else {
                tooltipMap.style.display = 'block';
            }
          }
          // Event on map
          mviewer.getMap().on('moveend', changeBackground);
          mviewer.getMap().on('moveend', displayTooltip);
      },
  };
})();

new CustomComponent("changeBackground", changeBackground.init);