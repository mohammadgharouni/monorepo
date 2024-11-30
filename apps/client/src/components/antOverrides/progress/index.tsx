import { Progress as AntProgress, ProgressProps } from 'antd';
import { twMerge } from 'tailwind-merge';

const Progress = ({ className, ...props }: ProgressProps) => {
  return <AntProgress {...props} className={twMerge('bg-light-7', className)} />;
};

export { Progress };
