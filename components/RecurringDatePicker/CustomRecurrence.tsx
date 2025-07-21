import React from 'react';
import { useRecurrenceStore } from '../../store/recurrenceStore';
import Select from '../ui/Select';
import Button from '../ui/Button';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const nthOptions = [
  { value: 1, label: '1st' },
  { value: 2, label: '2nd' },
  { value: 3, label: '3rd' },
  { value: 4, label: '4th' },
  { value: 5, label: '5th' },
];

const CustomRecurrence: React.FC = () => {
  const { recurrenceType, interval, daysOfWeek, nthDayOfMonth, setInterval, setDaysOfWeek, setNthDayOfMonth } = useRecurrenceStore();

  const toggleDay = (dayIndex: number) => {
    const newDays = daysOfWeek.includes(dayIndex)
      ? daysOfWeek.filter((d) => d !== dayIndex)
      : [...daysOfWeek, dayIndex];
    setDaysOfWeek(newDays);
  };

  return (
    <div className="mb-4">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Every</label>
        <input
          type="number"
          min="1"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="w-20 p-2 border rounded"
        />
        <span className="ml-2">{recurrenceType}(s)</span>
      </div>

      {recurrenceType === 'weekly' && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Days of Week</label>
          <div className="flex gap-2">
            {days.map((day, index) => (
              <Button
                key={index}
                onClick={() => toggleDay(index)}
                className={daysOfWeek.includes(index) ? 'bg-blue-500 text-white' : 'bg-gray-200'}
              >
                {day}
              </Button>
            ))}
          </div>
        </div>
      )}

      {recurrenceType === 'monthly' && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Nth Day of Month</label>
          <Select
            value={nthDayOfMonth?.nth || 1}
            onChange={(value) => setNthDayOfMonth({ ...nthDayOfMonth!, nth: Number(value) })}
            options={nthOptions}
            className="mr-2"
          />
          <Select
            value={nthDayOfMonth?.day || 0}
            onChange={(value) => setNthDayOfMonth({ ...nthDayOfMonth!, day: Number(value) })}
            options={days.map((day, index) => ({ value: index, label: day }))}
          />
        </div>
      )}
    </div>
  );
};

export default CustomRecurrence;