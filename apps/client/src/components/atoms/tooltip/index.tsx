import {
  Tooltip as AntTooltip,
  TooltipProps,
} from "../../antOverrides/tooltip";

const Tooltip = ({ children, title, ...rest }: TooltipProps) => {
  return (
    <AntTooltip title={title} {...rest}>
      {children}
    </AntTooltip>
  );
};

export { Tooltip };
