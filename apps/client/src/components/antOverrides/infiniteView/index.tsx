import { ReactNode } from 'react';
import InfiniteScroll, { Props } from 'react-infinite-scroll-component';

import { colors } from '@abrplus/logic';

import { Flex } from '../flex';
import { Loading } from '../loading';

export interface InfiniteViewProps extends Omit<Props, 'loader'> {
  children: ReactNode;
  indicatorSize?: number;
  indicatorColor?: string;
}

const InfiniteView = ({
  children,
  indicatorColor = colors.primary_light_1,
  indicatorSize = 0.5,
  ...rest
}: InfiniteViewProps) => {
  return (
    <InfiniteScroll
      {...rest}
      loader={
        <Flex className="h-10" align="center" justify="center">
          <Loading isLoading />
        </Flex>
      }
      className="small-custom-scrollbar"
    >
      {children}
    </InfiniteScroll>
  );
};

export { InfiniteView };
