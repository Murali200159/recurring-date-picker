import { render, screen, fireEvent } from '@testing-library/react';
import RecurringDatePicker from '../components/RecurringDatePicker';
import { useRecurrenceStore } from '../store/recurrenceStore';
import { vi } from 'vitest';

vi.mock('../store/recurrenceStore', () => ({
  useRecurrenceStore: vi.fn(),
}));

describe('RecurringDatePicker', () => {
  beforeEach(() => {
    (useRecurrenceStore as any).mockReturnValue({
      recurrenceType: 'daily',
      interval: 1,
      daysOfWeek: [],
      nthDayOfMonth: null,
      startDate: null,
      endDate: null,
      setRecurrenceType: vi.fn(),
      setInterval: vi.fn(),
      setDaysOfWeek: vi.fn(),
      setNthDayOfMonth: vi.fn(),
      setStartDate: vi.fn(),
      setEndDate: vi.fn(),
    });
  });

  test('renders recurrence type dropdown', () => {
    render(<RecurringDatePicker />);
    expect(screen.getByText('Recurrence Type')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Daily' })).toBeInTheDocument();
  });

  test('changes recurrence type', () => {
    const setRecurrenceType = vi.fn();
    (useRecurrenceStore as any).mockReturnValue({
      ...useRecurrenceStore(),
      setRecurrenceType,
    });
    render(<RecurringDatePicker />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'weekly' } });
    expect(setRecurrenceType).toHaveBeenCalledWith('weekly');
  });
});