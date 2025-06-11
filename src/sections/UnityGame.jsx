import React from 'react';

function UnityGame({ gamePath, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '##3d3d3d',
        zIndex: 9999,
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 10000,
          background: '#fff',
          border: 'none',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px'
        }}
      >
        Fechar
      </button>
      <iframe
        src={gamePath}
        title="Unity Game"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        allowFullScreen
      />
    </div>
  );
}

export default UnityGame;
