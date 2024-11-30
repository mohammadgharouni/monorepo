import { Skeleton as AntSkeleton, SkeletonProps } from 'antd';

const Skeleton = (props: SkeletonProps) => {
  return <AntSkeleton {...props} />;
};
Skeleton.Avatar = AntSkeleton.Avatar;
Skeleton.Button = AntSkeleton.Button;
Skeleton.Image = AntSkeleton.Image;
Skeleton.Input = AntSkeleton.Input;
Skeleton.Node = AntSkeleton.Node;
export { Skeleton };
