type BatchFunction = (...props: any[]) => React.ReactNode;
type BatchRecord = { [K in string]: BatchRecord | BatchFunction };
type BatchResult<T extends BatchRecord> = {
  readonly [K in Capitalize<keyof T & string>]: T[K];
};
function uncapitalize(value: string) {
  return value.slice(0, 1).toLowerCase() + value.slice(1);
}
function batch<T extends BatchRecord>(components: T): BatchResult<T> {
  const assignees = Object.assign({}, { ...components });
  return new Proxy(assignees, {
    get(target, property: keyof T & string) {
      const safeTarget = Object.freeze({
        ...target,
        [Symbol.toPrimitive]() {
          return "Error: Attempted to render object as a JSX";
        },
      }) as BatchResult<T>;
      if (property in safeTarget) {
        return safeTarget[property as keyof BatchResult<T>];
      }
      const origProperty = uncapitalize(property);
      if (origProperty in safeTarget) {
        return safeTarget[origProperty as keyof BatchResult<T>];
      }
      return null;
    },
  }) as BatchResult<T>;
}
export { batch };
