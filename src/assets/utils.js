/* eslint-disable no-control-regex */
export const formatFixer = val => {
  const reg1 = new RegExp(" ", "g");
  const reg2 = new RegExp("\n", "g");
  return val.replace(reg1, "&nbsp;").replace(reg2, "<br/>");
};
