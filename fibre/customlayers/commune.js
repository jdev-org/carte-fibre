{
  mviewer.customLayers.commune = {};
  mviewer.customLayers.commune.layer = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: "https://geobretagne.fr/geoserver/ign/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=commune_metro&&outputFormat=application/json&srsName=EPSG:4326&CQL_FILTER=insee_reg=%2753%27&PROPERTYNAME=nom_com,geom",
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "rgba(0,0,0,0)",
        width: 0.1
      }),
      fill: new ol.style.Fill({
        color: "rgba(0, 0, 0, 0)",
      }),
    }),
  });
  mviewer.customLayers.commune.handle = false;
}