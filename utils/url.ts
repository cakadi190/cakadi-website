const serializeArray = (obj: Record<string, any>): string => {
  const queryParams = new URLSearchParams();

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      queryParams.append(key, String(value));
    }
  }

  return queryParams.toString();
};

export { serializeArray };