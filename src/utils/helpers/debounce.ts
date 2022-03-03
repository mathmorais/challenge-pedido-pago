export const debounce = (
  callback: (...args: any) => void,
  timeout: number = 200
) => {
  let timer: NodeJS.Timeout | null;
  return (...args: any) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callback.apply(this, args);
    }, timeout);
  };
};
