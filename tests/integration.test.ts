import { render, screen, fireEvent } from '@testing-library/react';
import RecurringDatePicker from '../components/RecurringDatePicker';
import { useRecurrenceStore } from '../store/recurrenceStore';
import { vi } from 'vitest';

vi.mock('../store/recurrenceStore', () => ({
  useRecurrenceStore: vi.fn(),
}));

describe('RecurringDatePicker Integration', () => {
  test('renders weekly options and updates state', () => {
    (useRecurrenceStore as any).mockReturnValue({
      recurrenceType: 'weekly',
      interval: 1,
      daysOfWeek: [],
      nthDayOfMonth: null,
      startDate: new Date(),
      endDate: null,
      setRecurrenceType: vi.fn(),
      setInterval: vi.fn(),
      setDaysOfWeek: vi.fn(),
      setNthDayOfMonth: vi.fn(),
      setStartDate: vi.fn(),
      setEndDate: vi.fn(),
    });

    render(<RecurringDatePicker />);
    expect(screen.getByText('Days of Week')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Mon'));
    expect(useRecurrenceStore().setDaysOfWeek).toHaveBeenCalledWith([1]);
  });
});