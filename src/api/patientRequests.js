import { config } from "../global";

export async function createPatientBackend(newPatient) {
  const token = localStorage.getItem('t')
  const response = await fetch(config.backendUrl + '/api/patient', {
    method: 'POST',
    headers: [
      ["Content-Type", "application/json"],
      ["xtoken", token]
    ],
    body: JSON.stringify(newPatient)
  })
  if (response.status == 201) {
    const bodyAnswer = await response.json()
    return bodyAnswer
  }
  return false
}