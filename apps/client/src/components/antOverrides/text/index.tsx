import { CSSProperties, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { colors } from "@/core/constants/colors";

import { Flex } from "../flex";
import { Tooltip } from "../tooltip";
import Icon, { IconType } from "@icon-park/react/es/all";

export type TextSize = "tiny" | "small" | "normal" | "medium" | "large";

export type TextWeight = "light" | "normal" | "medium" | "bold";

type SizeMap = Record<TextSize | number, string>;

type WeightMap = Record<TextWeight, string>;
type LangMap = {
  [key in "fa" | "en"]: string;
};

type FamilyMap = Record<TextWeight, LangMap>;

export interface TextProps {
  size?: TextSize | number;
  lang?: "fa" | "en";
  as?: "text" | "link";
  underlineAsLink?: boolean;
  iconName?: IconType;
  iconPosition?: "start" | "end";
  className?: string;
  style?: CSSProperties;
  lineClamp?: number;
  weight?: TextWeight;
  color?: string;
  children?: string | number | Array<string | number> | null | React.ReactNode;
  colon?: boolean;
  numberOfLines?: number;
  showTooltipOnTruncate?: boolean;
  transform?: "lowercase" | "uppercase";
  onClick?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
  onWrapperClick?: (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
  onIconClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  dashedUnderline?: boolean;
}

const Text = ({
  lang = "fa",
  as = "text",
  size = "normal",
  weight = "normal",
  iconPosition = "start",
  color,
  iconName,
  children,
  lineClamp,
  className,
  style,
  onWrapperClick,
  onClick,
  onIconClick,
  colon,
  numberOfLines,
  showTooltipOnTruncate = true,
  underlineAsLink = true,
  transform,
  dashedUnderline,
}: TextProps) => {
  const [hasTooltip, setHasTooltip] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showTooltipOnTruncate && ref.current) {
      // Check if the content overflows its container
      setHasTooltip(ref.current.scrollWidth > ref.current.clientWidth);
    }
  }, [children, showTooltipOnTruncate]);

  const sizes: SizeMap = {
    tiny: "text-[10px]",
    small: "text-[12px]",
    normal: "text-[14px]",
    medium: "text-[16px]",
    large: "text-[18px]",
  };

  const weights: WeightMap = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  };

  const families: FamilyMap = {
    light: { fa: "font-yekan-light", en: "font-roboto-light" },
    normal: { fa: "font-yekan-normal", en: "font-roboto-normal" },
    medium: { fa: "font-yekan-medium", en: "font-roboto-medium" },
    bold: { fa: "font-yekan-bold", en: "font-roboto-bold" },
  };

  const _lang =
    typeof children === "string" && children.trim() === "-" ? "fa" : lang;

  const content = (
    <p
      ref={ref}
      onClick={onClick}
      dir={lang === "fa" ? "rtl" : "ltr"}
      lang={_lang}
      className={twMerge(
        "selection:text-white-ff selection:bg-primary-dark-1 w-fit ",
        as === "link" && "cursor-pointer",
        as === "link" &&
          underlineAsLink &&
          "cursor-pointer underline-offset-4 hover:underline",
        transform === "lowercase" && "lowercase",
        transform === "uppercase" && "uppercase",
        lineClamp && "text-ellipsis whitespace-nowrap",
        !!onClick && "cursor-pointer",
        typeof size === "string" && sizes[size],
        weights[weight],
        families[weight][_lang],
        className
      )}
      style={{
        fontSize: typeof size === "number" ? size : undefined,
        lineClamp,
        ...(color && { color }),
        ...(numberOfLines && {
          display: "-webkit-box",
          maxWidth: "100%",
          textOverflow: "ellipsis",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: numberOfLines,
          overflow: "hidden",
        }),
        ...style,
      }}
    >
      {children}
      {colon ? ":" : ""}
    </p>
  );
  if (iconName) {
    return (
      <Flex
        gap={8}
        align="center"
        className={twMerge(
          dashedUnderline &&
            "border-secondary mb-2 h-5 cursor-pointer border-b border-dashed"
        )}
        onClick={onWrapperClick}
      >
        {iconPosition === "start" && (
          <Icon
            type={iconName}
            onClick={onIconClick}
            color={as === "link" ? colors.secondary : color}
            className={twMerge(!!onIconClick && "cursor-pointer")}
            size={typeof size === "number" ? size : undefined}
          />
        )}
        {content}
        {iconPosition === "end" && (
          <Icon
            type={iconName}
            onClick={onIconClick}
            color={as === "link" ? colors.secondary : color}
            className={twMerge(!!onIconClick && "cursor-pointer")}
            size={typeof size === "number" ? size : undefined}
          />
        )}
      </Flex>
    );
  }
  return hasTooltip && showTooltipOnTruncate ? (
    <Tooltip variant="default" title={children}>
      {content}
    </Tooltip>
  ) : (
    content
  );
};

export { Text };
