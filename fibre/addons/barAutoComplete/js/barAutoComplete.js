import { Autocomplete } from './Autocomplete.js';

const inputId = "autocomplete-input";
const outputId = "autocomplete-result";
// Get the configuration
var config = mviewer.customComponents.barAutoComplete.config.options;

var barAutoComplete = (function () {

  var _initBarAutoComplete = () => {

    const inputElement = document.getElementById(inputId);
    const outputElement = $("#"+ outputId);

    let autocompleteInstance = null;

    let typingTimer;
    const doneTypingInterval = 200;

    const onSelect = (i) => {
      let zoom;
      let selectedValue = document.getElementById(i.target.id);
      let coords = selectedValue.getAttribute("value");
      let coordsArray = JSON.parse(coords);
      let coordsX = coordsArray[0];
      let coordsY = coordsArray[1];
      let geotype = selectedValue.getAttribute("geo-type");
      if(geotype == "municipality"){
        zoom = 13;
      } else {
        zoom = 18;
      }
      // Use the default projection of the function zoomToLocation (EPSG:4326)
      mviewer.zoomToLocation(coordsX, coordsY, zoom, true);
      
      let inputElement = document.getElementById(inputId);
      let texte = selectedValue.textContent;
      inputElement.value = texte;
    };

    const onInput = (e) => {
      let valueLength = e.target.value.length;
      //user is "finished typing," do something
      function doneTyping() {
        if (valueLength > 3) {
          return displayAutocompleteList(e);
        }
      }
      //on input, clear the countdown
      $(e.target).on("input", function () {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
      });
    };

    const displayAutocompleteList = (inputEvt) => {
      const value = inputEvt.target.value.toLowerCase();
      let filteredData = [];

      // If the input is empty, don't fetch data
      if (!value) {
        return;
      }

      // Get the URL from the config
      const _url = config.urlCompletion;

      fetch(`${_url}?text=${value}&type=StreetAddress,PositionOfInterest&ter=5`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Réponse réseau incorrecte');
          }
          return response.json();
        })
        .then(data => {

          filteredData = data.results;

          const container = document.getElementById(outputId);
          if (!container) return;

          // Génère le HTML
          let html;
          if (filteredData.length > 0) {
            html = filteredData
              .map(
                (item) => 
                  `<a class="autocomplete-item" type="button" geo-type="${item.country}" value='[${item.x},${item.y}]' id=${_.uniqueId()}>${item.fulltext}</a>
                  `        
              )
              .join("");
          } else {
            html = `<div class="autocomplete-item">Aucun résultat trouvé</div>`;
          }

          // Affiche le HTML dans le conteneur
          autocompleteInstance.display(html, onSelect);
      })
      .catch(error => {
        console.error('Il y a eu un problème avec la requête fetch :', error);
      });
    };

    autocompleteInstance = new Autocomplete(
      inputElement,
      outputElement,
      onInput,
      displayAutocompleteList
    );
  }

  return {
    init: _initBarAutoComplete,
  }
})();

new CustomComponent("barAutoComplete", barAutoComplete.init);