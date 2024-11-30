import { Upload as AntUpload, UploadProps as AntUploadProps } from 'antd';
import { ReactNode } from 'react';

interface UploadProps<T = any> extends Omit<AntUploadProps<T>, 'onChange' | 'children'> {
  children: ReactNode;
}

export const Upload = ({ children, ...rest }: UploadProps) => {
  return (
    <AntUpload {...rest} multiple={false} maxCount={1}>
      {children}
    </AntUpload>
  );
};
