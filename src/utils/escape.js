export const htmlEscape = (s) => {
  /* Escapes HTML in string*/
  return s.replace(
  />/g, '&gt;'
).replace(
  /</g, '&lt;'
).replace(
  /&/g, '&'
).replace(
  /"/g, '&quot;'
).replace(
  /'/g, '&#039;'
);}