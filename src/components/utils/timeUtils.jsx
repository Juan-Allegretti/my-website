export function getYear() {
  const date = new Date();
  return date.getFullYear();
}

export function getAge(birthDate) {
  const date = new Date();
  const [year, month, day] = birthDate.split("-");
  const today = new Date();
  const age = today.getFullYear() - year;
  const m = today.getMonth() - month;
  if (m < 0 || (m === 0 && today.getDate() < day)) {
    age--;
  }
  return age;
}
