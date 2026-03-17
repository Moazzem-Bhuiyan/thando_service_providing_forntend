/* eslint-disable @typescript-eslint/no-explicit-any */
// export const getFromSessionStorage = (key:any) => {
//   if (typeof window === "undefined") return;
//   return JSON.parse(sessionStorage.getItem(key));
// };

export const getFromSessionStorage = (key: string): any | undefined => {
  if (typeof window === "undefined") return;

  const item = sessionStorage.getItem(key); // item is string | null
  if (!item) return; // handle null

  try {
    return JSON.parse(item);
  } catch (error) {
    console.error("Error parsing sessionStorage item", error);
    return undefined;
  }
};

export const setToSessionStorage = (key:string, value:any) => {
  if (typeof window === "undefined") return;
  return sessionStorage.setItem(key, JSON.stringify(value));
};

export const removeFromSessionStorage = (key:any) => {
  if (typeof window === "undefined") return;
  return sessionStorage.removeItem(key);
};
