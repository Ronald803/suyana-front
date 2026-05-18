import { config } from "../global";

export async function loginBackend(credentials) {
  const response = await fetch(config.backendUrl + "/api/auth/login", {
    method: "POST",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify(credentials),
  });
  if (response.status == 201) {
    const bodyAnswer = await response.json();
    localStorage.setItem("name", bodyAnswer.body.name);
    localStorage.setItem("rol", bodyAnswer.body.rol);
    localStorage.setItem("phone", bodyAnswer.body.phone);
    localStorage.setItem("email", bodyAnswer.body.email);
    localStorage.setItem("address", bodyAnswer.body.address);
    localStorage.setItem("specialtyId", bodyAnswer.body.specialtyId);
    localStorage.setItem("t", bodyAnswer.body.token);
    return bodyAnswer.body;
  }
  return false;
}

export async function createEmployeeBackend(newEmployee) {
  const response = await fetch(config.backendUrl + "/api/staff", {
    method: "POST",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify(newEmployee),
  });
  if (response.status == 201) {
    const bodyAnswer = await response.json();
    return bodyAnswer.body;
  }
  return false;
}

export async function updateUserData(updatedData) {
  const token = localStorage.getItem("t");
  const response = await fetch(config.backendUrl + "/api/staff", {
    method: "PUT",
    headers: [
      ["Content-Type", "application/json"],
      ["xtoken", token],
    ],
    body: JSON.stringify(updatedData),
  });
  if (response.status == 201) {
    const bodyAnswer = await response.json();
    localStorage.setItem("name", bodyAnswer.body.name);
    localStorage.setItem("rol", bodyAnswer.body.rol);
    localStorage.setItem("phone", bodyAnswer.body.phone);
    localStorage.setItem("email", bodyAnswer.body.email);
    localStorage.setItem("address", bodyAnswer.body.address);
    return bodyAnswer.body;
  }
  return false;
}
