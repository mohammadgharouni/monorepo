import { Steps as AntSteps, ConfigProvider, StepsProps, ThemeConfig } from 'antd';

const stepTheme: ThemeConfig = {
  components: {},
};

const Steps = ({ ...props }: StepsProps) => {
  return (
    <ConfigProvider theme={stepTheme}>
      <AntSteps {...props} />
    </ConfigProvider>
  );
};

export { Steps };

Steps.Step = AntSteps.Step;
export type { StepsProps };
