import { Breadcrumb as AntBreadcrumb, BreadcrumbProps } from 'antd';
import { Link } from 'react-router-dom';

import { colors, getColorKey } from '@abrplus/logic';

import { Text } from '../../antOverrides/text';
import { Icon } from '../../atoms/icon';

export interface AntBreadCrumbProps extends BreadcrumbProps {}

export const Breadcrumb = (props: AntBreadCrumbProps) => {
  return (
    <AntBreadcrumb
      {...props}
      separator={<Icon name="Chevron_Left" size={22} color={colors[getColorKey()].action} />}
      itemRender={(route, _, items) => {
        if (!route.title) return null;

        const last = items.indexOf(route) === items.length - 1;

        if (last) {
          return (
            <Text size={16} weight="medium">
              {route.title}
            </Text>
          );
        }
        return route.path ? (
          <Link to={route.path!}>
            <Text size={16} weight="medium" color={colors[getColorKey()].action}>
              {route.title}
            </Text>
          </Link>
        ) : (
          <div onClick={route.onClick!} className="cursor-pointer">
            <Text size={16} weight="medium" color={colors[getColorKey()].action}>
              {route.title}
            </Text>
          </div>
        );
      }}
    />
  );
};
