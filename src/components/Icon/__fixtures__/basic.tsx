import React from 'react';
import Card from '_global/Card';
import * as icons from '../../../icons';

function Demo() {
  return (
    <Card title="内置icon">
      {Object.keys(icons).map((key) => {
        const IconComponent = icons[key as keyof typeof icons];
        return (
          <div key={key} style={{ margin: 8 }}>
            <IconComponent />
            <span style={{ marginLeft: 8 }}>{key}</span>
          </div>
        );
      })}
    </Card>
  );
}

export default Demo;
