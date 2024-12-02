"use client";

import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const geoData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "United States", fillColor: "#F59E0B" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-101.07421875, 39.90973623453719],
            [-95.712890625, 37.16031654673677],
            [-94.04296875, 42.293564192170095],
            [-101.07421875, 39.90973623453719],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "China", fillColor: "#A78BFA" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [104.0625, 34.59704151614417],
            [108.6328125, 31.203404950917395],
            [112.1484375, 34.30714385628804],
            [104.0625, 34.59704151614417],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Brazil", fillColor: "#EF4444" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-60.8203125, -3.513421045640032],
            [-56.6015625, -8.059229627200192],
            [-51.328125, -5.61598581915534],
            [-60.8203125, -3.513421045640032],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "South Africa", fillColor: "#3B82F6" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [19.3359375, -33.137551192346145],
            [23.5546875, -30.14512718337613],
            [27.0703125, -33.35806161277886],
            [19.3359375, -33.137551192346145],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Indonesia", fillColor: "#34D399" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [117.7734375, -0.08789059053082425],
            [119.8828125, -4.915832801313177],
            [122.34375, -1.4061088354351594],
            [117.7734375, -0.08789059053082425],
          ],
        ],
      },
    },
  ],
};

const onEachFeature = (feature: any, layer: any) => {
  if (feature.properties && feature.properties.fillColor) {
    layer.setStyle({
      fillColor: feature.properties.fillColor,
      fillOpacity: 0.6,
      color: "#FFFFFF",
      weight: 1,
    });
  }
};

const SalesMap: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto  bg-white  shadow-md">
      <h2 className="text-sm font-semibold text-gray-800 mb-4 my-[10px]">
        Sales Mapping by Country
      </h2>
      <div className="relative h-[272px] w-full">
        <MapContainer
          center={[20, 0]}
          zoom={1}
          scrollWheelZoom={false}
          className="h-full w-full rounded-lg"
        >
          {}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {}
          <GeoJSON data={geoData as any} onEachFeature={onEachFeature} />
        </MapContainer>
      </div>
    </div>
  );
};

export default SalesMap;
