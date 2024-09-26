export const config = {
  backendUrl: 'https://suyana-api.vercel.app'
  //backendUrl: 'http://localhost:4000'
}

export const options = {
  specialties: [
    { name: 'Psicología', value: 'psychology', color: 'red-500' },
    { name: 'Psicopedagogía', value: 'psychopedagogy', color: 'green-500' },
    { name: 'Fisioterapia y Psicomotricidad', value: 'physiotherapy', color: 'yellow-600' },
    { name: 'Fonoaudiología', value: 'speechTherapy', color: 'blue-500' }
  ],
  branch: [
    { name: 'La Paz', value: 'laPaz' },
    { name: 'El Alto', value: 'elAlto' }
  ],
  availability: [
    { name: 'Mañana', value: 'morning' },
    { name: 'Tarde', value: 'afternoon' },
    { name: 'Día completo', value: 'allDay' }
  ],
  navbar: [
    { optionName: 'Calendario', optionPath: '/calendar'},
    { optionName: 'Pacientes', optionPath: '/patients'},
    { optionName: 'Terapeutas', optionPath: '/employees'}
  ]
}