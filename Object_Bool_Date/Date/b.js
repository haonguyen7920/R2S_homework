const oneDay = 24 * 60 * 60 * 1000; // tính tổng số giây trong 1 ngày
const today = new Date();
const year = today.getFullYear();
const lastDayOfYear = new Date(year, 11, 31);

const remainDays = Math.round(Math.abs((lastDayOfYear - today) / oneDay));
console.log(remainDays);
