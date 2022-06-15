//Esta función es un helper que comprueba si el correo electronico que ha introducido el usuario es válido.
export function matriculaValidator(matricula) {
  const re = /^([0-9]){4}([A-Z]){3}$/
  if (!matricula) return "El Email no puede estar vacío!"
  if (!re.test(matricula)) return 'Ooops! Necesitamos una matrícula válida.'
  return ''
}
