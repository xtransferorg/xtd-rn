import React from 'react';

export const joinElement = (
  nodes: React.ReactNode[],
  separator: React.ReactNode
) => {
  const nodeArray = nodes?.reduce((acc: React.ReactNode[], item, index) => {
    acc.push(item);
    if (index < nodes.length - 1) {
      acc.push(separator);
    }
    return acc;
  }, []);

  return React.Children.map(nodeArray, (node) => node);
};
