import React from 'react';
import { useRecurrenceStore } from '../../store/recurrenceStore';
import Select from '../ui/Select';

const recurrenceTypes = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'yearly', label: 'Yearly' },
];

const RecurrenceOptions: React.FC = () => {
  const { recurrenceType, setRecurrenceType } = useRecurrenceStore();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Recurrence Type</label>
      <Select
        value={recurrenceType}
        onChange={(value) => setRecurrenceType(value as any)}
        options={recurrenceTypes}
      />
    </div>
  );
};

export default RecurrenceOptions;