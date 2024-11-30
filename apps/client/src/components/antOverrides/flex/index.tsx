import { Flex as AntFlex, FlexProps } from 'antd';
import { Ref, forwardRef } from 'react';

const Flex = forwardRef((props: FlexProps, ref: Ref<HTMLElement>) => {
  return <AntFlex ref={ref} {...props} />;
});

export { Flex };
