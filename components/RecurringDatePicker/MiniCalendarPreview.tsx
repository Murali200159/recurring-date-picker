import React from 'react';
import { useRecurrenceStore } from '../../store/recurrenceStore';
import { useRecurringDates } from '../../hooks/useRecurringDates';
import { format } from 'date-fns';

const MiniCalendarPreview: React.FC = () => {
  const { startDate } = useRecurrenceStore();
  const previewDates = useRecurringDates();

  if (!startDate) return null;

  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2">Preview</h3>
      <div className="grid grid-cols-7 gap-1">
        {previewDates.map((date, index) => (
          <div key={index} className="p-2 bg-blue-100 rounded text-center">
            {format(date, 'MM/dd/yyyy')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendarPreview;