export const validateCellphone = () => {
  const regex = /^[67]\d{7}$/;
  return regex.test(numero);
};

export const doesDayMatchDate = (day, date) => {
  if (!date || !days[day]) return false;

  const dayNumber = new Date(date + "T00:00:00").getDay();
  return dayNumber === days[day];
};

const days = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};
