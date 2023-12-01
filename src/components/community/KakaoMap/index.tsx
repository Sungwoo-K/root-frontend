import { useEffect, useRef } from "react";

interface Window {
  kakao: any;
}

interface KakaoMapProps {
  onLocationSelect: (latlng: any) => void;
  latitude: number;
  longitude: number;
  level: number;
  markerLatitude?: number;
  markerLongitude?: number;
  mapStyle: React.CSSProperties;
}

function KakaoMap({
  onLocationSelect,
  latitude,
  longitude,
  level,
  mapStyle,
  markerLatitude,
  markerLongitude,
}: KakaoMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const kakao = window.kakao;
    if (kakao && kakao.maps) {
      const mapCenter = new kakao.maps.LatLng(latitude, longitude);
      const options = {
        center: mapCenter,
        level: level,
      };
      const map = new kakao.maps.Map(mapContainer.current, options);

      const marker = new kakao.maps.Marker({
        position: mapCenter,
      });
      marker.setMap(map);

      kakao.maps.event.addListener(map, "click", function (mouseEvent) {
        const latlng = mouseEvent.latLng;
        onLocationSelect(latlng);
        marker.setPosition(latlng);
      });
    }
  }, [onLocationSelect, latitude, longitude, level]);

  return <div ref={mapContainer} style={mapStyle} />;
}

export default KakaoMap;
