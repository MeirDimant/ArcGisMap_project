import { useEffect, useRef, useState } from "react";
import { initializeMap, MapOptions } from "../utils/MapInitializer";
import MapView from "@arcgis/core/views/MapView";

export const useMap = (
  containerId: string,
  options: MapOptions
): MapView | null => {
  const [mapView, setMapView] = useState<MapView | null>(null);
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    isMounted.current = true;
    const setupMap = async () => {
      try {
        const view = await initializeMap(containerId, options);
        if (isMounted.current) {
          setMapView(view);
        }
      } catch (error) {
        console.error("Error initializing ArcGIS map:", error);
      }
    };

    setupMap();

    return () => {
      isMounted.current = false;
      mapView?.destroy();
    };
  }, [containerId, options]);

  return mapView;
};
