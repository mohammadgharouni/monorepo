import { Breadcrumb as AntBreadcrumb, BreadcrumbProps } from "antd";
import { Link } from "react-router-dom";

import { Text } from "../../antOverrides/text";
import { Left } from "@icon-park/react";
import { colors } from "@/core/constants/colors";
export interface AntBreadCrumbProps extends BreadcrumbProps {}

export const Breadcrumb = (props: AntBreadCrumbProps) => {
  return (
    <AntBreadcrumb
      {...props}
      separator={<Left size={22} color={colors.primary} />}
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
            <Text size={16} weight="medium" color={colors.primary}>
              {route.title}
            </Text>
          </Link>
        ) : (
          <div onClick={route.onClick!} className="cursor-pointer">
            <Text size={16} weight="medium" color={colors.primary}>
              {route.title}
            </Text>
          </div>
        );
      }}
    />
  );
};
