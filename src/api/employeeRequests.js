import { config } from "../config"

export async function loginBackend(credentials) {
  const response = await fetch(config.backendUrl + '/api/auth/login', {
    method: 'POST',
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify(credentials)
  })
  if (response.status == 201) {
    const bodyAnswer = await response.json()
    localStorage.setItem('n', bodyAnswer.body.name)
    localStorage.setItem('r', bodyAnswer.body.rol)
    localStorage.setItem('t', bodyAnswer.body.token)
    return bodyAnswer.body
  }
  return false
}

export async function createEmployeeBackend(newEmployee){
  const response = await fetch(config.backendUrl + '/api/staff', {
    method: 'POST',
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify(newEmployee)
  })
  if(response.status == 201) {
    const bodyAnswer = await response.json()
    return bodyAnswer.body
  }
  return false
}