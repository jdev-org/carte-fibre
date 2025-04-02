const searchBar = (function () {
  
  return {
    init: function () {

      const displayBanSearchList = async (url) => {
        // request
        const response = await fetch(url);
        const data = await response.json();
        // display response
        var res = data.features;
        var str = "";
        for (var i = 0, len = res.length; i < len && i < 5; i++) {
          var props = res[i].properties;
          var geom = res[i].geometry;
          const zoomByType = {
            city: 13,
            town: 15,
            village: 16,
            street: 17,
            housenumber: 18,
          };
          const zoom = zoomByType[props.type] || 14;
          str += `<a class="geoportail list-group-item" href="#" title="${props.context} - ${props.type}"
              onclick="mviewer.zoomToLocation(
                  ${geom.coordinates[0]},
                  ${geom.coordinates[1]},
                  ${zoom},
                  ${_searchparams.querymaponclick}
              );
              mviewer.showLocation('EPSG:4326', ${geom.coordinates[0]}, ${geom.coordinates[1]}, ${_searchparams.banmarker});">
              ${props.label}
          </a>`;
        }
        $(".geoportail").remove();
        _showResults(str, "locations");
      };

      var _showResults = function (results, resultsType) {
        if (resultsType) {
          var searchHeader = $(`[i18n='search.result.${resultsType}']`);
          searchHeader.removeClass("hidden");
          searchHeader.after(results);
        } else {
          $("#searchresults").append(results);
        }
        if (_searchparams.closeafterclick) {
          $("#searchresults .list-group-item").click(function () {
            $(".searchresults-title .close").trigger("click");
          });
        }
        $("#searchresults").show();
      };
      
      function searchAddress(value) {
        // BAN search
        var parameters = { q: value, limit: 5 };
        // create URL
        const banUrl = new URL('https://data.geopf.fr/geocodage/completion');
        banUrl.searchParams.append("q", parameters.q);
        banUrl.searchParams.append("limit", parameters.limit);
        const banUrlStr = banUrl.toString();
        // display resulr
        displayBanSearchList(banUrlStr);
        console.log(banUrlStr)
      }
      let btn = document.querySelector("#fleur")
      btn.onclick = function(){searchAddress("rennes")};    
    },
  };
})();

new CustomComponent("searchBar", searchBar.init);
