export const saveStorageItem = (key: string, val: string) => {
  localStorage.setItem(key, val);
};

export const getStorageItem = (key: string) => localStorage.getItem(key);

export const removeStorageItem = (key: string) => localStorage.removeItem(key);
