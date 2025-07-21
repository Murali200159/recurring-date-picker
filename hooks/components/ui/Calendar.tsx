import React from 'react';
import { Calendar as DateRangeCalendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
  date: Date;
  onChange: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ date, onChange }) => {
  return (
    <DateRangeCalendar
      date={date}
      onChange={onChange}
      className="border rounded"
    />
  );
};

export default Calendar;