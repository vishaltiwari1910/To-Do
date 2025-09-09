import { isToday as dfIsToday, isThisWeek as dfIsThisWeek } from 'date-fns';

export const isToday = (date: string | Date) => dfIsToday(new Date(date));
export const isThisWeek = (date: string | Date) => dfIsThisWeek(new Date(date));
export const isInRange = (date: string | Date, start: string | Date, end: string | Date) => {
  const d = new Date(date);
  return d >= new Date(start) && d <= new Date(end);
};
