{
  mviewer.customLayers.epci = {};
  mviewer.customLayers.epci.layer = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: "https://geobretagne.fr/geoserver/ign/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=epci&outputFormat=application/json&srsName=EPSG:4326",
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "rgba(0, 0,0,255)",
        width: 0.6,
      }),
      fill: new ol.style.Fill({
        color: "rgba(0, 0, 0, 0)",
      }),
    }),
  });
  mviewer.customLayers.epci.handle = false;
}
