import { useMemo } from "react";
import { useMap } from "../hooks/useMap";

const MapComponent = () => {
  const options = useMemo(
    () => ({
      basemap: "arcgis/topographic",
      center: [34.878, 32.031],
      zoom: 7,
      layers: [
        {
          url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0",
          outFields: ["CITY_NAME", "POP", "STATUS"],
          popupTemplate: {
            title: "{CITY_NAME}",
            content: (feature) => {
              const population = feature.graphic.attributes.POP;
              const formattedPopulation = population.toLocaleString();
              return `Population: ${formattedPopulation}`;
            },
          },
          definitionExpression:
            "STATUS IN ('National and provincial capital', 'National capital and provincial capital enclave', 'National capital')",
        },
      ],
    }),
    []
  );

  useMap("viewDiv", options);

  return <div id="viewDiv" style={{ height: "100vh", width: "100%" }}></div>;
};

export default MapComponent;
