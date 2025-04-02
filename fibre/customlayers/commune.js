{
  mviewer.customLayers.commune = {};
  mviewer.customLayers.commune.layer = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: "apps/fibre/data/commune_simple.geojson",
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "rgba(0,0,0,200)",
        width: 0.1
      }),
      fill: new ol.style.Fill({
        color: "rgba(0, 0, 0, 0)",
      }),
    }),
  });
  mviewer.customLayers.commune.handle = false;
}