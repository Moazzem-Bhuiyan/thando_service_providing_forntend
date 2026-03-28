'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';

interface DateTimePickerProps {
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
  selectedDate?: string;
  selectedTime?: string;
}

export function DateTimePicker({
  onDateSelect,
  onTimeSelect,
  selectedDate,
  selectedTime,
}: DateTimePickerProps) {
  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    return date;
  });

  const times = ['7:30 pm', '8:30 pm', '9:30 pm'];

  const formatDate = (date: Date) => {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const dayNum = date.getDate();
    return { dayName, dayNum };
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h2 className="mb-6 text-xl font-bold text-gray-900">Select Date & Time</h2>

      {/* Date Selection */}
      <div className="mb-8">
        <p className="mb-4 text-sm font-semibold text-gray-900">Date</p>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {dates.map((date) => {
            const { dayName, dayNum } = formatDate(date);
            const dateStr = date.toISOString().split('T')[0];
            const isSelected = selectedDate === dateStr;

            return (
              <button
                key={dateStr}
                onClick={() => onDateSelect(dateStr)}
                className={`flex flex-col items-center gap-2 rounded-xl px-4 py-3 text-center transition ${
                  isSelected
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-300 bg-white text-gray-900 hover:border-blue-300'
                }`}
              >
                <span className="text-xs font-medium uppercase">{dayName}</span>
                <span className="text-lg font-bold">{dayNum}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Selection */}
      <div>
        <p className="mb-4 text-sm font-semibold text-gray-900">Time</p>
        <div className="flex gap-3">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => onTimeSelect(time)}
              className={`flex-1 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition ${
                selectedTime === time
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-gray-300 bg-white text-gray-900 hover:border-blue-300'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
