"use client";

import { useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker, Polyline, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { demoOrder } from "@/constants/tracking";

export default function TrackMap({ progress }: { progress: number }) {
  const route = demoOrder.route;

  const rider = useMemo(() => {
    const seg = progress * (route.length - 1);
    const i = Math.min(Math.floor(seg), route.length - 2);
    const t = seg - i;
    return {
      lat: route[i].lat + (route[i + 1].lat - route[i].lat) * t,
      lng: route[i].lng + (route[i + 1].lng - route[i].lng) * t,
    };
  }, [progress, route]);

  return (
    <MapContainer
      center={[28.563, 77.225]}
      zoom={14}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ background: "#f8f8f8" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap &copy; CARTO"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Polyline
        positions={route.map((p) => [p.lat, p.lng] as [number, number])}
        pathOptions={{ color: "#4F46E5", weight: 4, opacity: 0.5, dashArray: "8 8" }}
      />
      <CircleMarker
        center={[route[0].lat, route[0].lng]}
        radius={7}
        pathOptions={{ color: "#4F46E5", fillColor: "#4F46E5", fillOpacity: 0.8 }}
      >
        <Tooltip>Facility</Tooltip>
      </CircleMarker>
      <CircleMarker
        center={[route[route.length - 1].lat, route[route.length - 1].lng]}
        radius={7}
        pathOptions={{ color: "#22C55E", fillColor: "#22C55E", fillOpacity: 0.8 }}
      >
        <Tooltip>Your address</Tooltip>
      </CircleMarker>
      <CircleMarker
        center={[rider.lat, rider.lng]}
        radius={11}
        pathOptions={{ color: "#4F46E5", fillColor: "#4F46E5", fillOpacity: 1, weight: 3 }}
      >
        <Tooltip permanent direction="top">Rider</Tooltip>
      </CircleMarker>
    </MapContainer>
  );
}
