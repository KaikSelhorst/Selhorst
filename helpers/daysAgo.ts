export default (date: string) => {
  const [year, month, day] = date.split("-");
  const oldDate = new Date(+year, +month - 1, +day).getTime();
  const nowDate = new Date().getTime();

  const milliseconds = nowDate - oldDate;
  const days = milliseconds / 86400000;
  return Math.floor(days);
};
