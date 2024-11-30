import { Dropdown as AntDropdown, ConfigProvider, DropdownProps } from 'antd';
import { ThemeConfig } from 'antd/lib';
import { twMerge } from 'tailwind-merge';

const SwitchThemeConfig: ThemeConfig = {
  components: {
    Dropdown: {},
  },
};

const Dropdown = ({ className, ...props }: DropdownProps) => {
  return (
    <ConfigProvider theme={SwitchThemeConfig}>
      <AntDropdown {...props} className={twMerge('bg-light-7', className)} />
    </ConfigProvider>
  );
};

export { Dropdown };
export type { DropdownProps };
