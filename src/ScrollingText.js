import React from 'react';

const ScrollingText = ({ text, speed = 20}) => {
  return (
    // outer that defines viewport
    <div 
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: `scroll ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {text}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(-60vw);
          }
          to {
            transform: translateX(60vw);
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;