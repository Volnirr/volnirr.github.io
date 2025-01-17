import React from 'react';

const ScrollingText = ({ text, speed = 20, className = '' }) => {
  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <div
        className="inline-block whitespace-nowrap animate-scroll"
        style={{
          animation: `scroll ${speed}s linear infinite`,
        }}
      >
        {text}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;