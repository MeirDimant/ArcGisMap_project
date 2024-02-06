import { useMemo } from "react";
import { useMap } from "../hooks/useMap";
import { MapOptions } from "../utils/MapInitializer";

interface MapComponentProps {
  containerId: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ containerId }) => {
  const options: MapOptions = useMemo(
    () => ({
      basemap: "arcgis-topographic",
      center: [34.878, 32.031],
      zoom: 7,
      layers: [
        {
          url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0",
          outFields: ["CITY_NAME", "POP", "STATUS"],
          popupTemplate: {
            title: "{CITY_NAME}",
            content: (feature: any) => {
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

  useMap(containerId, options);

  return (
    <div id={containerId} style={{ height: "100vh", width: "100%" }}></div>
  );
};

export default MapComponent;
