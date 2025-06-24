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
      let poiType = selectedValue.getAttribute("poi-type");
      if(geotype === "municipality" && poiType === "null"){
        zoom = 14;
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
      let results = [];

      // If the input is empty, don't fetch data
      if (!value) {
        return;
      }

      // Get the URL from the config
      const _url = config.urlCompletion;

      fetch(`${_url}?text=${value}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Réponse réseau incorrecte');
          }
          return response.json();
        })
        .then(data => {

          results = data.results;

          const acceptedKinds = ["municipality", "locality", "housenumber", "street"];
          filteredData = results.filter(f => acceptedKinds.includes(f.kind));

          const container = document.getElementById(outputId);
          if (!container) return;

          // Créer les éléments HTML pour chaque type de résultat
          let html = loadResultsSearch(filteredData, acceptedKinds);

          // Affiche le html dans le conteneur
          const htmlString = Object.values(html).map(div => div.outerHTML);
          autocompleteInstance.display(htmlString, onSelect);
      })
      .catch(error => {
        console.error('Il y a eu un problème avec la requête fetch :', error);
      });
    };

    const loadResultsSearch = (data, kinds) => {
      let kindLists = {};
      let results = {};

      for (const kind of kinds) {
        const container = document.createElement("div");
        container.className = `${kind}-group`;
        container.id = kind;

        const title = document.createElement("div");
        title.className = `${kind}-title`;
        title.textContent = formatKindTitle(kind);
        title.style.fontWeight = "bold";

        container.appendChild(title);
        kindLists[kind] = container;
      }

      for (const item of data) {
        const kind = item.kind;
        const container = kindLists[kind];
        if (!container) continue;
        
        const a = document.createElement("a");
        a.className = "autocomplete-item";
        a.setAttribute("type", "button");
        a.setAttribute("geo-type", item.kind);
        a.setAttribute("poi-type", item.poiType || null);
        a.setAttribute("value", `[${item.x},${item.y}]`);
        a.id = _.uniqueId();
        a.textContent = item.fulltext;
        a.style.display = "block";
        kindLists[kind].appendChild(a);
      }

      for (const kind of kinds) {
        const container = kindLists[kind];
        if (container.children.length > 1) {
          results[kind] = container;
        }
      }

      return results;
    };

    const formatKindTitle = (kind) => {
      switch (kind) {
        case "municipality":
          return "Communes";
        case "locality":
          return "Lieux-dits";
        case "housenumber":
          return "Adresse";
        case "street":
          return "Voies";
        default:
          return kind.charAt(0).toUpperCase() + kind.slice(1);
      }
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