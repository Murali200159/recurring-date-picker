import React from 'react';
import { useRecurrenceStore } from '../../store/recurrenceStore';
import Calendar from '../ui/Calendar';

const DateRangeSelector: React.FC = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="mb-4">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Start Date</label>
        <Calendar
          date={startDate || new Date()}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">End Date (Optional)</label>
        <Calendar
          date={endDate || new Date()}
          onChange={(date) => setEndDate(date)}
        />
      </div>
    </div>
  );
};

export default DateRangeSelector;