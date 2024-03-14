import { useEffect } from "react";

interface MarkerProps {
  map: any;
}

// 7-4 8분50초 재생
export default function Markers({ map }: MarkerProps) {
  const loadKakaoMarkers = () => {};
  useEffect(() => {
    loadKakaoMarkers();
  }, [map]);
  return <></>;
}
