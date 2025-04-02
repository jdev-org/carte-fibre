<?xml version="1.0" encoding="UTF-8"?>
<sld:StyledLayerDescriptor xmlns:sld="http://www.opengis.net/sld" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <sld:NamedLayer>
    <sld:Name>suivi_adresse</sld:Name>
    <sld:UserStyle>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:Name>Classe_705</sld:Name>
          <sld:Title>Disponible à la commercialisation</sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsLike wildCard="*" singleChar="." escape="!">
              <ogc:PropertyName>statut_rg</ogc:PropertyName>
              <ogc:Literal>COM-RAC</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <sld:MaxScaleDenominator>300000</sld:MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#60C1C5</sld:CssParameter>
                  <sld:CssParameter name="fill-opacity">1</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                  <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
                  <sld:CssParameter name="stroke-width">2</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
              <sld:Size>8</sld:Size>
              <sld:Rotation>0</sld:Rotation>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_2321</sld:Name>
          <sld:Title>Travaux en cours d'achèvement</sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsLike wildCard="*" singleChar="." escape="!">
              <ogc:PropertyName>statut_rg</ogc:PropertyName>
              <ogc:Literal>CST</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <sld:MaxScaleDenominator>300000</sld:MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#164C7E</sld:CssParameter>
                  <sld:CssParameter name="fill-opacity">1</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                  <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
                  <sld:CssParameter name="stroke-width">2</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
              <sld:Size>8</sld:Size>
              <sld:Rotation>0</sld:Rotation>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_4429</sld:Name>
          <sld:Title>Travaux commencés</sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsLike wildCard="*" singleChar="." escape="!">
              <ogc:PropertyName>statut_rg</ogc:PropertyName>
              <ogc:Literal>COV</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <sld:MaxScaleDenominator>300000</sld:MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#F9C488</sld:CssParameter>
                  <sld:CssParameter name="fill-opacity">1</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                  <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
                  <sld:CssParameter name="stroke-width">2</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
              <sld:Size>8</sld:Size>
              <sld:Rotation>0</sld:Rotation>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_5366</sld:Name>
          <sld:Title>En cours d'étude</sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsLike wildCard="*" singleChar="." escape="!">
              <ogc:PropertyName>statut_rg</ogc:PropertyName>
              <ogc:Literal>ETUDE</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <sld:MaxScaleDenominator>300000</sld:MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#FF9088</sld:CssParameter>
                  <sld:CssParameter name="fill-opacity">1</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                  <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
                  <sld:CssParameter name="stroke-width">2</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
              <sld:Size>8</sld:Size>
              <sld:Rotation>0</sld:Rotation>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_6746</sld:Name>
          <sld:Title>Déploiement suspendu</sld:Title>
          <ogc:Filter>
            <ogc:And>
              <ogc:PropertyIsLike wildCard="*" singleChar="." escape="!">
                <ogc:PropertyName>statut_rg</ogc:PropertyName>
                <ogc:Literal>KO</ogc:Literal>
              </ogc:PropertyIsLike>
              <ogc:PropertyIsLike wildCard="*" singleChar="." escape="!">
                <ogc:PropertyName>statut_rg</ogc:PropertyName>
                <ogc:Literal>GEL</ogc:Literal>
              </ogc:PropertyIsLike>
            </ogc:And>
          </ogc:Filter>
          <sld:MaxScaleDenominator>300000</sld:MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#A7A5A5</sld:CssParameter>
                  <sld:CssParameter name="fill-opacity">1</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                  <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
                  <sld:CssParameter name="stroke-width">2</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
              <sld:Size>8</sld:Size>
              <sld:Rotation>0</sld:Rotation>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>


