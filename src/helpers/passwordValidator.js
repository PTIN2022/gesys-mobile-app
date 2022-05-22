//Esta función es un helper que comprueba que la contraseña introducida por el usuario es válida.
export function passwordValidator(password) {
  if (!password) return "La contraseña no puede estar vacía."
  if (password.length < 5) return "La contraseña debe tener como mínimo 5 carácteres."
  return ''
}
