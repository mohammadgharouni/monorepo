import { Menu as AntMenu, ConfigProvider, MenuProps } from 'antd';

// const SwitchThemeConfig: ThemeConfig = {
//   components: {
//     Menu: {
//       handleBg: colors.light_1,
//       colorPrimaryHover: colors.primary,
//       colorTextTertiary: colors.light_1,
//       trackMinWidthSM: 26,
//     },
//   },
// };

const Menu = ({ ...props }: MenuProps) => {
  return (
    <ConfigProvider>
      <AntMenu {...props} />
    </ConfigProvider>
  );
};

Menu.Item = AntMenu.Item;
Menu.ItemGroup = AntMenu.ItemGroup;

export { Menu };
export type { MenuProps };
