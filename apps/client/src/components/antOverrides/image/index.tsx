import { Image as AntImage, ImageProps as Props } from 'antd';
import { ReactNode, useState } from 'react';

import { Flex } from '../flex';

export interface ImageProps extends Omit<Props, 'fallback'> {
  fallback?: ReactNode;
}

const Image = ({
  preview = false,
  width,
  height,
  fallback,
  onError,
  wrapperClassName,
  ...rest
}: ImageProps) => {
  const [showFallBack, setShowFallBack] = useState(false);

  return (
    <Flex
      style={{ width: width, height }}
      align="center"
      justify="center"
      className={wrapperClassName}
    >
      {showFallBack && fallback ? (
        fallback
      ) : (
        <AntImage
          preview={preview}
          onError={(e) => {
            setShowFallBack(true);
            onError?.(e);
          }}
          {...{ width, height }}
          {...rest}
        />
      )}
    </Flex>
  );
};

export { Image };
