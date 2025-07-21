import { create } from 'zustand';
import { RecurrenceState } from '../components/RecurringDatePicker/types';

interface RecurrenceStore extends RecurrenceState {
  setRecurrenceType: (type: 'daily' | 'weekly' | 'monthly' | 'yearly') => void;
  setInterval: (interval: number) => void;
  setDaysOfWeek: (days: number[]) => void;
  setNthDayOfMonth: (nthDay: { nth: number; day: number } | null) => void;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
}

export const useRecurrenceStore = create<RecurrenceStore>((set) => ({
  recurrenceType: 'daily',
  interval: 1,
  daysOfWeek: [],
  nthDayOfMonth: null,
  startDate: null,
  endDate: null,
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setInterval: (interval) => set({ interval }),
  setDaysOfWeek: (days) => set({ daysOfWeek: days }),
  setNthDayOfMonth: (nthDay) => set({ nthDayOfMonth: nthDay }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));