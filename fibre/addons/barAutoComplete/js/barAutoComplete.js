import { Autocomplete } from './Autocomplete.js';

var barAutoComplete = (function () {

  var _initBarAutoComplete = () => {

    const inputElement = document.getElementById("autocomplete-input");
    const outputElement = $("#autocomplete-result");

    let autocompleteInstance = null;

    let typingTimer;
    const doneTypingInterval = 200;

    const onSelect = (i) => {
      let zoom = 16;
      let projection = "EPSG:2154";
      let selectedValue = document.getElementById(i.target.id);
      let coords = selectedValue.getAttribute("value");
      let coordsArray = JSON.parse(coords);
      let coordsX = coordsArray[0];
      let coordsY = coordsArray[1];
      let inputElement = document.getElementById("autocomplete-input");
      let texte = selectedValue.textContent;

      mviewer.zoomToLocation(coordsX, coordsY, zoom, null, projection);

      inputElement.value = texte;

      let container = document.getElementById("autocomplete-container");
      container.classList.add("rgb-aura");

      setTimeout(() => {
        container.classList.remove("rgb-aura");
      }, 10000);
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

      fetch(`https://api-adresse.data.gouv.fr/search/?q=${value}&autocomplete=1`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Réponse réseau incorrecte');
          }
          return response.json();
        })
        .then(data => {
          console.log(data); // créer la liste ici
          
          filteredData = data.features.filter((item) =>
            item.properties.label.toLowerCase().includes(value)
          );

          const container = document.getElementById("autocomplete-result");
          if (!container) return;

          // Génère le HTML
          let html;
          if (filteredData.length > 0) {
            html = filteredData
              .map(
                (item) =>
                  `<div class="autocomplete-item">
                    <a value='[${item.properties.x},${item.properties.y}]' type="ban" id=${_.uniqueId()}> ${item.properties.label} </a>
                  </div>`
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
