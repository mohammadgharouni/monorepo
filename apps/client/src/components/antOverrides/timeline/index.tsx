import {
  Timeline as AntTimeline,
  ConfigProvider,
  ThemeConfig,
  TimelineProps,
} from "antd";

import { colors } from "@/core/constants/colors";

const timeThemeConfig: ThemeConfig = {
  components: {
    Timeline: {
      tailColor: colors.light_7,
      tailWidth: 4,
    },
  },
};

const Timeline = ({ ...props }: TimelineProps) => {
  return (
    <ConfigProvider theme={timeThemeConfig}>
      <AntTimeline {...props} />
    </ConfigProvider>
  );
};

export { Timeline };
export type { TimelineProps };
