const removeSpecialCharacters = (value: string) =>
  value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '').replaceAll(' ', '');

export default removeSpecialCharacters;
