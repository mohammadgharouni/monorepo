import { Pagination as AntPagination, ConfigProvider, PaginationProps } from 'antd';
import { ThemeConfig } from 'antd/lib';
import { twMerge } from 'tailwind-merge';

const PaginationThemeConfig: ThemeConfig = {
  components: {
    Pagination: {},
  },
};

const Pagination = ({ className, ...props }: PaginationProps) => {
  return (
    <ConfigProvider theme={PaginationThemeConfig}>
      <AntPagination {...props} className={twMerge('bg-light-7', className)} />
    </ConfigProvider>
  );
};

export { Pagination };
