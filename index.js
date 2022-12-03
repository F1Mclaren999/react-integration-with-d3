import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello';
import { SVG } from './Hello';
import * as d3 from 'd3';
import './style.css';

const ReactD3Integration = () => {
  const [name] = useState('Simple React integration with D3');
  const d3Ref = useRef();

  useEffect(() => {
    const svgElement = d3.select(d3Ref.current);
    svgElement
      .append('circle')
      .attr('cx', 150)
      .attr('cy', 70)
      .attr('r', 50)
      .attr('fill', 'tomato');
  }, []);

  return (
    <div>
      <Hello name={name} />
      {/* <SVG /> */}
      <svg ref={d3Ref} />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactD3Integration />
  </React.StrictMode>
);
