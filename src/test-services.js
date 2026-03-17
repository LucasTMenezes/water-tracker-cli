import { formatDateBR } from "./utils/date.utils.js";

const answer = "11/03/2026";
const day = Number(answer.slice(0, 2));
const month = Number(answer.slice(3, 5)) - 1;
const year = Number(answer.slice(6));

console.log(day, month, year);
const formattedData = formatDateBR(new Date(Number(answer.slice(6)), Number(answer.slice(3, 5)) -1, Number(answer.slice(0, 2))));
// console.log(formatDateBR(new Date(year, month, day)));
console.log(formattedData);

