import React from 'react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentDate = new Date();

export function Calendar() {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-6">
      <h3 className="text-xl font-bold mb-4">Events & Webinars</h3>
      <div className="bg-emerald-800 text-white p-2 rounded-t-lg">
        <h4 className="text-center">September</h4>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {days.map(day => (
          <div key={day} className="py-2 font-medium">{day}</div>
        ))}
        {Array.from({ length: 35 }, (_, i) => {
          const day = i + 1;
          const isToday = day === currentDate.getDate();
          return (
            <div
              key={i}
              className={`py-2 ${isToday ? 'bg-emerald-500 text-white rounded-full' : ''} 
                         hover:bg-emerald-100 cursor-pointer transition-colors`}
            >
              {day <= 30 ? day : ''}
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 mt-4">
        {['Focus', 'Get Help', 'Review', 'Learn More'].map((btn) => (
          <button
            key={btn}
            className="px-3 py-1.5 bg-emerald-500 text-white text-sm rounded-full hover:bg-emerald-600 transition-colors"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}