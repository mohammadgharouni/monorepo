import { AnimatePresence, Variants, motion } from "framer-motion";

import { Text } from "../..";
import { colors } from "@/core/constants/colors";

export interface ErrorProps {
  name?: string;
  children?: React.ReactNode;
  textColor?: string;
  message?: string;
  testID?: string;
}

export const InputErrorMessage = ({
  name,
  children,
  message,
  textColor,
}: ErrorProps) => {
  return (
    <div className="h-6 justify-center pt-[2px]">
      <AnimatePresence key={`error-${name}`}>
        {message ? (
          <motion.div
            variants={variants}
            initial={"initial"}
            animate={"open"}
            exit={"disappear"}
          >
            <Text
              weight="normal"
              size={12}
              color={textColor ? textColor : colors.negative}
            >
              {message}
            </Text>
          </motion.div>
        ) : (
          children
        )}
      </AnimatePresence>
    </div>
  );
};

const variants: Variants = {
  initial: {
    height: "100%",
    opacity: 0,
    scaleY: 0.9,
    transformOrigin: "top center",
    msTransformOrigin: "top center",
    MozTransformOrigin: "top center",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  open: {
    opacity: 1,
    scaleY: 1,
    transition: {
      type: "keyframes",
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  disappear: {
    opacity: 0,
    scaleY: 0.9,
    transition: {
      type: "keyframes",
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
