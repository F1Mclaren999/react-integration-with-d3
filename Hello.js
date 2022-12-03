import React from 'react';

export default ({ name }) => <h1 style={{ color: 'Green' }}>{name}!</h1>;

export const SVG = () => {
  return (
    <svg
      style={{
        border: '2px solid gold',
      }}
    />
  );
};
