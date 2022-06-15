//Esta función es un helper que comprueba si el dni que ha introducido el usuario es válido.
export function DNIValidator(DNI) {
  const re = /^([0-9]){8}([A-Z]){1}$/
  if (!DNI) return "El campo DNI no puede estar vacío!"
  if (!re.test(DNI)) return 'Ooops! Necesitamos un DNI válido.'
  return ''
}