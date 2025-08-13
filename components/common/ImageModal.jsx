"use client";
import Image from "next/image";

export default function ImageModal({ 
  modalId, 
  title, 
  imageSrc, 
  imageAlt, 
  description,
  originalWidth = 1200,
  originalHeight = 800 
}) {
  return (
    <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${modalId}Label`}>{title}</h5>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            <div style={{ position: "relative", width: "100%", minHeight: "400px" }}>
              <Image
                src={imageSrc}
                width={originalWidth}
                height={originalHeight}
                alt={imageAlt}
                style={{ 
                  objectFit: "contain", 
                  width: "100%", 
                  height: "auto",
                  maxHeight: "70vh"
                }}
                priority={false}
              />
            </div>
            {description && (
              <p className="text-muted mt-3 small">{description}</p>
            )}
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary btn-sm" 
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}