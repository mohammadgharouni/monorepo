import { InputRef } from "antd";

import { InputDefault } from "./default";
import { batch } from "@/core/utils/batch";

const Input = batch({
  Default: InputDefault,
});

export { Input };
export type { InputRef };
