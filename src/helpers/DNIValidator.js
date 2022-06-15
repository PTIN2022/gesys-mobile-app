//Esta función es un helper que comprueba si el dni que ha introducido el usuario es válido.
export function DNIValidator(DNI) {
  const re = /^([0-9]){8}([A-Z]){1}$/   //DNI
  const re2 = /^([X-Z]){1}([0-9]){7}([A-Z]){1}$/    //NIE
  if (!DNI) return "El campo DNI no puede estar vacío!"
  if (!re.test(DNI) || !re2.test(DNI)) return 'Ooops! Necesitamos un DNI válido.'
  return ''
}