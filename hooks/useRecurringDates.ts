import { useEffect, useState } from 'react';
import { useRecurrenceStore } from '../store/recurrenceStore';
import { addDays, addWeeks, addMonths, addYears } from 'date-fns';

export const useRecurringDates = () => {
  const { recurrenceType, interval, daysOfWeek, nthDayOfMonth, startDate, endDate } = useRecurrenceStore();
  const [previewDates, setPreviewDates] = useState<Date[]>([]);

  useEffect(() => {
    if (!startDate) return;

    const dates: Date[] = [];
    let currentDate = new Date(startDate);
    const maxPreviewDates = 30;

    while (dates.length < maxPreviewDates && (!endDate || currentDate <= endDate)) {
      if (recurrenceType === 'daily') {
        dates.push(new Date(currentDate));
        currentDate = addDays(currentDate, interval);
      } else if (recurrenceType === 'weekly') {
        if (daysOfWeek.includes(currentDate.getDay())) {
          dates.push(new Date(currentDate));
        }
        currentDate = addDays(currentDate, 1);
        if (currentDate.getDay() === 0) currentDate = addDays(currentDate, (interval - 1) * 7);
      } else if (recurrenceType === 'monthly' && nthDayOfMonth) {
        dates.push(new Date(currentDate));
        currentDate = addMonths(currentDate, interval);
      } else if (recurrenceType === 'yearly') {
        dates.push(new Date(currentDate));
        currentDate = addYears(currentDate, interval);
      }
    }
    setPreviewDates(dates);
  }, [recurrenceType, interval, daysOfWeek, nthDayOfMonth, startDate, endDate]);

  return previewDates;
};