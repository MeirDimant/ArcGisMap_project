import { useEffect, useRef, useState } from "react";
import { initializeMap } from "../utils/MapInitializer";

export const useMap = (containerId, options) => {
  const [mapView, setMapView] = useState(null);
  const isMounted = useRef(false);

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
      if (mapView) {
        mapView.destroy();
      }
    };
  }, [containerId, options]);

  return mapView;
};
