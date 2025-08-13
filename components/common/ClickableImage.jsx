"use client";
import Image from "next/image";

export default function ClickableImage({ 
  src, 
  alt, 
  width, 
  height, 
  modalId,
  className = "",
  style = {} 
}) {
  const defaultStyle = {
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    ...style
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.02)";
    e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = style.boxShadow || "none";
  };

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={defaultStyle}
      data-bs-toggle="modal"
      data-bs-target={`#${modalId}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}