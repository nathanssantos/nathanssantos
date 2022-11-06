let debounceTimer: ReturnType<typeof setTimeout> | null = null;

const debounce = (action: () => unknown, time: number) => {
  if (debounceTimer) clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    action();
  }, time);
};

export default debounce;
