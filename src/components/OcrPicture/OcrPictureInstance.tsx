import React, { useEffect, useRef } from 'react';
import { OcrPictureMethodProps, OcrPictureRef } from './interface';
import { Portal } from '../../core';
import { FC } from 'react';
import OcrPicture from './OcrPicture';

const OcrPictureMethod: FC<OcrPictureMethodProps> = (props) => {
  const instance = useRef<OcrPictureRef>(null);

  useEffect(() => {
    instance.current?.open();
  }, []);

  return <OcrPicture enableInput={false} {...props} ref={instance} />;
};

export const open = (
  options: Omit<OcrPictureMethodProps, 'onSuccess' | 'onError'>
) => {
  return new Promise((resolve, reject) => {
    const key = Portal.add(
      <OcrPictureMethod
        {...options}
        onSuccess={(result) => {
          Portal.remove(key);
          resolve(result);
        }}
        onError={(error) => {
          Portal.remove(key);
          reject(error);
        }}
      />
    );
  });
};
