import React from 'react';

export type ConfigItem = {
  component: string;
  children?: React.node[];
};

export type ComponentsMap = {
  [key: string]: React.node;
};
