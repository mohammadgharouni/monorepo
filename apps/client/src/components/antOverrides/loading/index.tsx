import React, { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

import { colors } from '@abrplus/logic';

export interface SpinnerProps {
  size?: number;
  thickness?: number;
  color?: string;
  isLoading?: boolean;
  heightOffset?: number;
  children?: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

export const Loading = ({
  children,
  isLoading,
  size = 18,
  color,
  heightOffset,
  thickness = 2,
  className,
  height,
  width,
}: SpinnerProps) => {
  const spinner = (
    <div
      className={twMerge('grid place-items-center', className)}
      style={{ width: width || size, height: height || size, minHeight: heightOffset }}
    >
      <svg
        width={`${size}px`}
        height={`${size}px`}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values={`0 ${size / 2} ${size / 2};270 ${size / 2} ${size / 2}`}
            begin="0s"
            dur="1.4s"
            repeatCount="indefinite"
          />
          <circle
            fill="none"
            strokeWidth={thickness} // Set the stroke thickness to 1
            strokeLinecap="round"
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - thickness / 2} // Adjusted radius to fit the circle within the square with minimal thickness
            strokeDasharray={2 * Math.PI * (size / 2 - thickness / 2)}
            strokeDashoffset={2 * Math.PI * (size / 2 - thickness / 2)}
          >
            <animate
              attributeName="stroke"
              values={color || colors.primary}
              begin="0s"
              dur="5.6s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              values={`0 ${size / 2} ${size / 2};135 ${size / 2} ${size / 2};450 ${size / 2} ${
                size / 2
              }`}
              begin="0s"
              dur="1.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              values={`${2 * Math.PI * (size / 2 - thickness / 2)};${
                2 * Math.PI * (size / 8 - thickness / 2)
              };${2 * Math.PI * (size / 2 - thickness / 2)}`}
              begin="0s"
              dur="1.4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );

  if (isLoading) return spinner;

  return <Fragment>{children}</Fragment>;
};
