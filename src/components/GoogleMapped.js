// components/GoogleMapEmbed.js
import React from "react";

const GoogleMapEmbed = ({ lat, lng, width = "100%", height = "450px" }) => {
  const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;

  return (
    <div>
      <iframe
        title="Google Map"
        width={width}
        height={height}
        frameBorder="0"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default GoogleMapEmbed;
