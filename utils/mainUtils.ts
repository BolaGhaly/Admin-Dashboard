export const numFormatter = (num, digits) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item ? (num / item.value).toFixed(digits) + item.symbol : "0";
};

export const sortArrOfObjsByKeyValue = (
  array: any[],
  key: string,
  descending: boolean = false
): any[] => {
  return array.sort((a, b) => {
    if (descending) {
      if (a[key] > b[key]) {
        return -1;
      } else if (a[key] < b[key]) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (a[key] < b[key]) {
        return -1;
      } else if (a[key] > b[key]) {
        return 1;
      } else {
        return 0;
      }
    }
  });
};
