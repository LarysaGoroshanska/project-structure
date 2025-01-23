import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { CONFIG, COMPONENTS } from './constants.ts';

const renderNode = (node: React.node) => {
  const Template = COMPONENTS[node.component];

  return (
    <Template>
      {node?.children?.map(renderNode)}
    </Template>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {CONFIG.map(renderNode)}
  </React.StrictMode>
);

