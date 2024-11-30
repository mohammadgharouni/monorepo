import { Avatar as AntAvatar, AvatarProps } from 'antd';
import { PopoverProps } from 'antd/lib';
import { CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

interface AvatarGroupProps extends AvatarProps {
  max?: { count?: number; style?: CSSProperties; popover?: PopoverProps };
}
const Avatar = ({ className, ...props }: AvatarProps) => {
  return (
    <AntAvatar {...props} className={twMerge('bg-light-7 border-primary-light-3', className)} />
  );
};

const Group = ({ className, max, ...props }: AvatarGroupProps) => {
  return <AntAvatar.Group max={max} {...props} className={twMerge(className)} />;
};

Avatar.Group = Group;

export { Avatar };
