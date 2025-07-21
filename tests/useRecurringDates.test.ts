import { renderHook } from '@testing-library/react-hooks';
import { useRecurringDates } from '../hooks/useRecurringDates';
import { useRecurrenceStore } from '../store/recurrenceStore';
import { vi } from 'vitest';
import { addDays } from 'date-fns';

vi.mock('../store/recurrenceStore', () => ({
  useRecurrenceStore: vi.fn(),
}));

describe('useRecurringDates', () => {
  test('generates daily recurrence dates', () => {
    (useRecurrenceStore as any).mockReturnValue({
      recurrenceType: 'daily',
      interval: 2,
      daysOfWeek: [],
      nthDayOfMonth: null,
      startDate: new Date('2025-01-01'),
      endDate: null,
    });

    const { result } = renderHook(() => useRecurringDates());
    const dates = result.current;

    expect(dates.length).toBeGreaterThan(0);
    expect(dates[1]).toEqual(addDays(dates[0], 2));
  });
});