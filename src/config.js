export const config = {
  backendUrl: 'https://suyana-api.vercel.app'
  //backendUrl: 'http://localhost:4000'
}

export const options = {
  specialties: [
    { name: 'Psicología', value: 'psychology' },
    { name: 'Psicopedagogía', value: 'psychopedagogy' },
    { name: 'Fisioterapia y Psicomotricidad', value: 'physiotherapy' },
    { name: 'Fonoaudiología', value: 'speechTherapy' }
  ],
  branch: [
    { name: 'La Paz', value: 'laPaz' },
    { name: 'El Alto', value: 'elAlto' }
  ],
  availability: [
    { name: 'Mañana', value: 'morning' },
    { name: 'Tarde', value: 'afternoon' },
    { name: 'Día completo', value: 'allDay' }
  ]
}