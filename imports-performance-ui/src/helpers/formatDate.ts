import {formatInTimeZone} from "date-fns-tz";

export const formatDate = (date: Date) => {
  const timeZone = "America/Sao_Paulo";
  return formatInTimeZone(date, timeZone, 'dd/MM/yyyy HH:mm:ss');
}
