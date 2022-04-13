//Esta función es un helper que comprueba si el correo electronico que ha introducido el usuario es válido.
export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "El Email no puede estar vacío!"
  if (!re.test(email)) return 'Ooops! Necesitamos una dirección de correo email válida.'
  return ''
}
