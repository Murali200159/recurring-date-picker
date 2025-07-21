export interface RecurrenceState {
  recurrenceType: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  daysOfWeek: number[];
  nthDayOfMonth: { nth: number; day: number } | null;
  startDate: Date | null;
  endDate: Date | null;
}