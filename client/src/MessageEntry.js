import React from 'react';

export default function MessageEntry({message}) {
  return (
    <div
    style={{
      margin: '10px',
      borderBottom: '10px',
    }}
    >
      {message}
    </div>
  )
}