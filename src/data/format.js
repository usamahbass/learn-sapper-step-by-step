function number(num) {
  if (num === null || num === undefined) {
    return "data tidak ditemukan !";
  }

  return num.toLocaleString();
}

export default {
  number,
};
