import React, { useState, useEffect } from 'react';

const FaveButton = ({ 
  isLiked = false, 
  onToggle, 
  size = 'medium',
  disabled = false,
  className = '',
  children = null
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSparks, setShowSparks] = useState(false);

  // Trigger animation when liked state changes
  useEffect(() => {
    if (isLiked) {
      setIsAnimating(true);
      setShowSparks(true);
      
      // Reset animation state
      const animationTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 1000);

      // Hide sparks after animation
      const sparksTimer = setTimeout(() => {
        setShowSparks(false);
      }, 600);

      return () => {
        clearTimeout(animationTimer);
        clearTimeout(sparksTimer);
      };
    }
  }, [isLiked]);

  const handleClick = () => {
    if (!disabled && onToggle) {
      onToggle();
    }
  };

  const sizeClasses = {
    small: 'fave-button-small',
    medium: 'fave-button-medium', 
    large: 'fave-button-large'
  };

  return (
    <button
      className={`fave-button ${sizeClasses[size]} ${isLiked ? 'liked' : ''} ${isAnimating ? 'animating' : ''} ${disabled ? 'disabled' : ''} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      aria-label={isLiked ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      style={{
        border: '2px solid red', // DEBUG: border vermelho para ver se aparece
        background: 'white',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Heart icon */}
      <div className="fave-icon" style={{ color: 'black', fontSize: '20px' }}>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          style={{ fill: isLiked ? 'red' : 'black' }}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      {/* Text content for button variants */}
      {children && <span className="fave-text" style={{ marginLeft: '8px' }}>{children}</span>}
    </button>
  );
};

export default FaveButton;