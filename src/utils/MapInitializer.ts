import { loadModules } from "esri-loader";

export interface PopupTemplate {
  title: string;
  content: (feature: any) => string;
}

export interface LayerOptions {
  url: string;
  outFields?: string[];
  popupTemplate?: PopupTemplate;
  definitionExpression?: string;
}

export interface MapOptions {
  basemap?: string;
  center?: [number, number];
  zoom?: number;
  layers?: LayerOptions[];
}

export const initializeMap = async (
  containerId: string,
  options: MapOptions
) => {
  const [esriConfig, Map, MapView, FeatureLayer] = await loadModules(
    [
      "esri/config",
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
    ],
    {
      url: "https://js.arcgis.com/4.28/",
    }
  );

  esriConfig.apiKey = process.env.REACT_APP_API_KEY as string;

  const map = new Map({
    basemap: options.basemap || "arcgis-topographic",
  });

  const view = new MapView({
    container: containerId,
    map: map,
    center: options.center || [34.878, 32.031],
    zoom: options.zoom || 7,
  });

  options.layers?.forEach((layerOptions: LayerOptions) => {
    const layer = new FeatureLayer(layerOptions);
    map.add(layer);
  });

  return view;
};
