import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import CustomRecurrence from './CustomRecurrence';
import DateRangeSelector from './DateRangeSelector';
import MiniCalendarPreview from './MiniCalendarPreview';
import { useRecurrenceStore } from '../../store/recurrenceStore';

const RecurringDatePicker: React.FC = () => {
  const { startDate } = useRecurrenceStore();

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Recurring Date Picker</h2>
      <RecurrenceOptions />
      <CustomRecurrence />
      <DateRangeSelector />
      {startDate && <MiniCalendarPreview />}
    </div>
  );
};

export default RecurringDatePicker;