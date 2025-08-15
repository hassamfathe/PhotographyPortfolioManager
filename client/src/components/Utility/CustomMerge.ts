export default function customMerge(objValue: object, srcValue: unknown): unknown {
  if (Array.isArray(objValue)) {
    if (Array.isArray(srcValue) && srcValue.length === 0) {
      return objValue;
    }
  }

  if (
    typeof objValue === "object" &&
    objValue !== null &&
    srcValue === undefined
  ) {
    return objValue;
  }

  // Fallback to undefined (means default merge behavior will occur)
  return undefined;
}
