//Esta función es un helper que comprueba si el numero de telefono que ha introducido el usuario es válido.
export function phoneValidator(phone) {
  const re = /^([0-9]){9}$/
  if (!phone) return "El campo teléfono no puede estar vacío!"
  if (!re.test(phone)) return 'Ooops! Necesitamos un numeor de teléfono válido.'
  return ''
}