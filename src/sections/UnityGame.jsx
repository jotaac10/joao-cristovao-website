import React from 'react';

function UnityGame() {
  return (
    <iframe
      src="/aventuraDosReinos/index.html"
      title="Aventura Dos Reinos - 2D Game"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        zIndex: 9999,
      }}
      allowFullScreen
    />
  );
}

export default UnityGame;
