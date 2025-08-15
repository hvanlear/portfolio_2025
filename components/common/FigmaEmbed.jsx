"use client";

import { useState, useEffect } from 'react';

export default function FigmaEmbed({ 
  figmaUrl, 
  title = "Interactive Prototype", 
  height = "600px",
  allowFullscreen = true,
  showControls = true
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Convert Figma file URL to embed URL
  const getEmbedUrl = (url) => {
    if (!url) return null;
    
    // Handle different Figma URL formats
    let embedUrl = url;
    
    // Convert file URL to embed URL
    if (url.includes('figma.com/file/')) {
      embedUrl = url.replace('figma.com/file/', 'figma.com/embed?embed_host=share&url=')
        .replace('figma.com/embed?embed_host=share&url=figma.com/', 'figma.com/embed?embed_host=share&url=https://www.figma.com/');
    }
    
    // Convert proto URL to embed URL  
    if (url.includes('figma.com/proto/')) {
      embedUrl = url.replace('figma.com/proto/', 'figma.com/embed?embed_host=share&url=')
        .replace('figma.com/embed?embed_host=share&url=figma.com/', 'figma.com/embed?embed_host=share&url=https://www.figma.com/');
    }

    // Add embed parameters if not already present
    if (!embedUrl.includes('embed_host=share')) {
      const separator = embedUrl.includes('?') ? '&' : '?';
      embedUrl += `${separator}embed_host=share`;
    }

    return embedUrl;
  };

  const embedUrl = getEmbedUrl(figmaUrl);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (!embedUrl) {
    return (
      <div className="figma-embed-error" style={{ 
        height: height, 
        border: '2px dashed #ccc', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <div className="text-center">
          <p className="text-muted mb-0">Invalid Figma URL provided</p>
          <small className="text-muted">Please provide a valid Figma file or prototype URL</small>
        </div>
      </div>
    );
  }

  return (
    <div className="figma-embed-container" style={{ position: 'relative', width: '100%', height: height }}>
      {/* Loading State */}
      {isLoading && (
        <div 
          className="figma-embed-loading" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f8f9fa',
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            zIndex: 1
          }}
        >
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-muted mb-0">Loading {title}...</p>
            <small className="text-muted">Interactive prototype powered by Figma</small>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div 
          className="figma-embed-error"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff5f5',
            border: '1px solid #feb2b2',
            borderRadius: '8px',
            zIndex: 1
          }}
        >
          <div className="text-center">
            <p className="text-danger mb-2">Failed to load Figma prototype</p>
            <small className="text-muted">Please check the URL and sharing settings</small>
            <br />
            <button 
              className="btn btn-sm btn-outline-primary mt-2"
              onClick={() => window.open(figmaUrl, '_blank')}
            >
              View in Figma
            </button>
          </div>
        </div>
      )}

      {/* Figma Embed iframe */}
      <iframe
        src={embedUrl}
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid #e9ecef',
          borderRadius: '8px',
          background: '#ffffff'
        }}
        allowFullScreen={allowFullscreen}
        onLoad={handleLoad}
        onError={handleError}
        title={title}
        loading="lazy"
      />

      {/* Attribution/Controls */}
      {showControls && !isLoading && !hasError && (
        <div 
          className="figma-embed-controls"
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            zIndex: 2
          }}
        >
          <a 
            href={figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Open in Figma ↗
          </a>
        </div>
      )}
    </div>
  );
}