export const config = {
  //backendUrl: "https://suyana-api.vercel.app",
  backendUrl: "http://localhost:4000",
};

export const options = {
  branch: [
    { name: "La Paz", value: "laPaz" },
    { name: "El Alto", value: "elAlto" },
  ],
  availability: [
    { name: "Mañana", value: "morning" },
    { name: "Tarde", value: "afternoon" },
    { name: "Día completo", value: "allDay" },
  ],
  navbar: [
    { optionName: "Calendario", optionPath: "/calendar" },
    { optionName: "Pacientes", optionPath: "/patients" },
    { optionName: "Terapeutas", optionPath: "/employees" },
  ],
  parameters: [
    { name: "Paciente", value: "patientName" },
    { name: "Especialidad", value: "specialtyName" },
    { name: "Terapeuta", value: "doctorName" },
  ],
  days: [
    { name: "Lunes", value: "Monday" },
    { name: "Martes", value: "Tuesday" },
    { name: "Miércoles", value: "Wednesday" },
    { name: "Jueves", value: "Thursday" },
    { name: "Viernes", value: "Friday" },
    { name: "Sábado", value: "Saturday" },
  ],
};
